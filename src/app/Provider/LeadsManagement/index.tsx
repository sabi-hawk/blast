import React from "react";
import { Table, Tag, Space, Button, Input, Tooltip } from "antd";
import type { TableColumnsType } from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  FilterOutlined,
} from "@ant-design/icons";

interface DataType {
  key: React.Key;
  groupId: string;
  groupName: string;
  email: string;
  phone: string;
  time: string;
  tags: string[];
  description: string;
}

const columns: TableColumnsType<DataType> = [
  { title: "Group Id", dataIndex: "groupId" },
  { title: "Group Name", dataIndex: "groupName" },
  { title: "Email", dataIndex: "email" },
  { title: "Phone", dataIndex: "phone" },
  { title: "Time", dataIndex: "time" },
  {
    title: "Tags",
    dataIndex: "tags",
    render: (tags: string[]) => (
      <>
        {tags.map((tag) => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </>
    ),
  },
  { title: "Description", dataIndex: "description" },
  {
    title: "Action",
    dataIndex: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button
          className="w-auto h-auto p-0 border-0"
          onClick={() => handleEdit(record.key)}
        >
          <img
            src="/assets/icons/edit.svg"
            alt="Edit Icon"
            width={20}
            height={20}
          />
        </Button>
        <Button
          className="w-auto h-auto p-0 border-0"
          onClick={() => handleDelete(record.key)}
        >
          <img
            src="/assets/icons/delete.svg"
            alt="Delete Icon"
            width={20}
            height={20}
          />
        </Button>
      </Space>
    ),
  },
];



const handleEdit = (key: React.Key) => {
  console.log("Edit record", key);
};

const handleDelete = (key: React.Key) => {
  console.log("Delete record", key);
};

function LeadsManagement() {
  return (
    <div>
      <div className="flex justify-between p-[20px] bg-[#DAE1F3]">
        <div className="flex items-center gap-[10px]">
          <span className="text-[#5B626B] font-roboto text-base font-medium">
            Leads
          </span>
          <Input
            className="w-[215px] bg-white rounded-[6px]"
            addonBefore={<SearchOutlined style={{ color: "#0000008A" }} />}
            placeholder="Search"
          />
        </div>
        <div className="flex gap-[10px]">
          <Tooltip title="Add">
            <Button>
              <img
                src="/assets/icons/import.svg"
                alt="Import Icon"
                width={17}
                height={17}
              />
              Import Leads
            </Button>
          </Tooltip>
        </div>
      </div>
      <Table<DataType>
        rowSelection={{ type: "checkbox", columnWidth: "50px" }}
        columns={columns}
        dataSource={data}
        pagination={{ showSizeChanger: true, pageSize: 10 }}
      />
    </div>
  );
}

export default LeadsManagement;
