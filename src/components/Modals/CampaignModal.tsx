import { Modal, Form, Select, Input, Button, Switch, DatePicker, message } from "antd";
import React, { useState, useEffect } from "react";
import { getTemplatesNames } from "api/templates";
import { getGroupsSummary } from "api/leads";
import { addCampaign } from "api/campaigns";
import { useAppState } from "hooks";

interface CampaignModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (data: any) => void;
}

const { Option } = Select;

function CampaignModal({ open, setOpen, onSubmit }: CampaignModalProps) {
  const [form] = Form.useForm();
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [isScheduled, setIsScheduled] = useState(false);
  const { auth: { user } } = useAppState();
  const [templateOptions, setTemplateOptions] = useState<{ label: string, value: string, id: string }[]>([]);
  const [groupOptions, setGroupOptions] = useState<{ label: string, value: string; count: number }[]>([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      if (!user?._id) return;
      try {
        const { data } = await getTemplatesNames(user._id);
        setTemplateOptions(
          data.files.map((template: any) => ({
            label: template.name?.includes("design")
              ? template.name?.split(".")[0]
              : template.name?.split(".")[1],
            value: template.name,
            id: template._id,
          }))
        );
      } catch (err) {
        // Optionally handle error
      }
    };
    fetchTemplates();
  }, [user?._id]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await getGroupsSummary();
        if (response && response.data && Array.isArray(response.data.groups)) {
          setGroupOptions(
            response.data.groups.map((group: any) => ({
              label: `${group.groupId} (${group.count})`,
              value: group.groupId,
              count: group.count,
            }))
          );
        }
      } catch (err) {
        // Optionally handle error
      }
    };
    fetchGroups();
  }, []);

  const handleGroupsChange = (values: string[]) => {
    setSelectedGroups(values);
  };

  const handleScheduleChange = (checked: boolean) => {
    setIsScheduled(checked);
    if (!checked) {
      form.setFieldsValue({ scheduleDate: undefined });
    }
  };

  const handleFinish = async (values: any) => {
    try {
      // Find the selected template's id
      const selectedTemplate = templateOptions.find(
        (t) => t.value === values.template
      );
      const payload = {
        ...values,
        template: {
          id: selectedTemplate?.id,
          name: selectedTemplate?.value || selectedTemplate?.label,
        },
        groupIds: values.groups,
        scheduled: isScheduled,
        totalLeads,
        mailSubject: values.mailSubject,
      };
      delete payload.groups;

      await addCampaign(payload);
      message.success("Campaign created successfully!");
      if (onSubmit) onSubmit(values);
    } catch (err: any) {
      message.error(err?.response?.data?.message || "Failed to create campaign");
    }
    setOpen(false);
    form.resetFields();
    setSelectedGroups([]);
    setIsScheduled(false);
  };

  // Calculate total leads from selected groups
  const totalLeads = selectedGroups.reduce((sum, groupId) => {
    const group = groupOptions.find((g) => g.value === groupId);
    return sum + (group ? group.count : 0);
  }, 0);

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      title="Create New Campaign"
      centered
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{ schedule: false }}
      >
        <Form.Item
          label="Campaign Name"
          name="campaignName"
          rules={[{ required: true, message: "Please enter a campaign name" }]}
        >
          <Input placeholder="Enter campaign name" />
        </Form.Item>

        <Form.Item
          label="Mail Subject"
          name="mailSubject"
          rules={[{ required: true, message: "Please enter a mail subject" }]}
        >
          <Input placeholder="Enter mail subject" />
        </Form.Item>

        <div style={{ display: 'flex', gap: 16 }}>
          <Form.Item
            label="Email Template"
            name="template"
            rules={[{ required: true, message: "Please select a template" }]}
            style={{ flex: 1 }}
          >
            <Select placeholder="Choose Email Template" options={templateOptions} />
          </Form.Item>

          <Form.Item
            label="Lead Groups"
            name="groups"
            rules={[{ required: true, message: "Please select at least one group" }]}
            style={{ flex: 1 }}
          >
            <Select
              mode="multiple"
              placeholder="Select Lead Groups"
              options={groupOptions}
              onChange={handleGroupsChange}
            />
          </Form.Item>
        </div>
        {selectedGroups.length > 0 && (
          <div style={{ marginBottom: 16, color: '#1677ff', fontWeight: 500 }}>
            Gathered {totalLeads} leads
          </div>
        )}

        <Form.Item label="Schedule Campaign" valuePropName="checked" style={{ marginBottom: 0 }}>
          <Switch checked={isScheduled} onChange={handleScheduleChange} />
        </Form.Item>
        {isScheduled && (
          <Form.Item
            label="Schedule Date & Time"
            name="scheduleDate"
            rules={[{ required: true, message: "Please select date & time" }]}
          >
            <DatePicker showTime style={{ width: '100%' }} />
          </Form.Item>
        )}

        <Form.Item label="Description" name="description">
          <Input.TextArea rows={3} placeholder="Description (optional)" />
        </Form.Item>

        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            <Button onClick={() => { setOpen(false); form.resetFields(); setSelectedGroups([]); setIsScheduled(false); }}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CampaignModal;
