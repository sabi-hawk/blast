import { Modal, Form, Select, Input, Button, Switch, DatePicker, message } from "antd";
import React, { useState } from "react";

interface CampaignModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (data: any) => void;
}

const { Option } = Select;

const templateOptions = [
  { label: "Template 1", value: "template1" },
  { label: "Template 2", value: "template2" },
  { label: "Template 3", value: "template3" },
];

const groupOptions = [
  { label: "Group 1000", value: "group1000" },
  { label: "Group 1001", value: "group1001" },
  { label: "Group 1002", value: "group1002" },
];

function CampaignModal({ open, setOpen, onSubmit }: CampaignModalProps) {
  const [form] = Form.useForm();
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [isScheduled, setIsScheduled] = useState(false);

  const handleGroupsChange = (values: string[]) => {
    setSelectedGroups(values);
  };

  const handleScheduleChange = (checked: boolean) => {
    setIsScheduled(checked);
    if (!checked) {
      form.setFieldsValue({ scheduleDate: undefined });
    }
  };

  const handleFinish = (values: any) => {
    if (onSubmit) onSubmit(values);
    message.success("Campaign data ready to submit!");
    setOpen(false);
    form.resetFields();
    setSelectedGroups([]);
    setIsScheduled(false);
  };

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
          label="Email Template"
          name="template"
          rules={[{ required: true, message: "Please select a template" }]}
        >
          <Select placeholder="Choose Email Template" options={templateOptions} />
        </Form.Item>

        <Form.Item
          label="Lead Groups"
          name="groups"
          rules={[{ required: true, message: "Please select at least one group" }]}
        >
          <Select
            mode="multiple"
            placeholder="Select Lead Groups"
            options={groupOptions}
            onChange={handleGroupsChange}
          />
        </Form.Item>
        {selectedGroups.length > 0 && (
          <div style={{ marginBottom: 16, color: '#1677ff', fontWeight: 500 }}>
            Gathered {selectedGroups.length * 10} leads
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
