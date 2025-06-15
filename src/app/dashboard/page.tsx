import React, { useEffect, useState } from "react";
import { Table, Button, Row, Col, Input, Card, Modal, message } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "flux/reducers/auth";
import {
  Search,
  Bell,
  User,
  Plus,
  Calendar,
  PlayCircle,
  CheckCircle,
  BarChart3,
  Filter,
  Download,
  Settings,
  ChevronDown,
} from "lucide-react";
import CampaignModal from "components/Modals/CampaignModal";
import { getCampaigns, deleteCampaign } from "api/campaigns";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isNewCampaignModalOpen, setIsNewCampaignModalOpen] =
    React.useState(false);
  const [campaignModalOpen, setCampaignModalOpen] = React.useState(false);
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [editCampaign, setEditCampaign] = useState<any | null>(null);

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/");
  };

  // Navigation Handler for Campaign Cards
  const handleNavigate = (route: string) => {
    navigate(route);
  };

  const handleOpenNewCampaignModal = () => setIsNewCampaignModalOpen(true);
  const handleCloseNewCampaignModal = () => setIsNewCampaignModalOpen(false);

  const fetchCampaigns = async () => {
    setLoading(true);
    try {
      const { data } = await getCampaigns();
      setCampaigns(data.data);
    } catch (err) {
      message.error("Failed to fetch campaigns");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const handleDelete = async (id: string) => {
    Modal.confirm({
      title: "Are you sure you want to delete this campaign?",
      onOk: async () => {
        try {
          await deleteCampaign(id);
          message.success("Campaign deleted");
          fetchCampaigns();
        } catch {
          message.error("Failed to delete campaign");
        }
      },
    });
  };

  // Table Columns
  const columns = [
    { title: "Campaign Name", dataIndex: "campaignName", key: "campaignName" },
    {
      title: "Template",
      dataIndex: "template",
      key: "template",
      render: (template: { name: string }) => template?.name || "-",
    },
    { title: "Group Ids", dataIndex: "groupIds", key: "groupIds" },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: string) => new Date(date).toLocaleString(),
    },
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <span>
          <Button
            icon={<EditOutlined />}
            style={{ marginRight: 8 }}
            onClick={() => setEditCampaign(record)}
          />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record._id)}
          />
        </span>
      ),
    },
  ];

  const colorMap = {
    "New Campaign": { bg: "#F0F7FF", border: "#339DFF", text: "#339DFF" },
    "Scheduled Campaigns": {
      bg: "#F4F1FB",
      border: "#8B6FC5",
      text: "#8B6FC5",
    },
    "In Progress Campaigns": {
      bg: "#E9F9F1",
      border: "#3CB371",
      text: "#3CB371",
    },
    "Completed Campaigns": {
      bg: "#FFF0F0",
      border: "#E57373",
      text: "#E57373",
    },
    "Total Campaigns": { bg: "#F8F5F2", border: "#A67B5B", text: "#A67B5B" },
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200";
      case "Scheduled":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Completed":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "Paused":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const campaignStats = [
    {
      title: "New Campaign",
      value: null,
      icon: Plus,
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-50 to-cyan-50",
      iconColor: "text-blue-600",
      isNew: true,
    },
    {
      title: "Scheduled",
      subtitle: "Campaigns",
      value: "1,284",
      icon: Calendar,
      gradient: "from-purple-500 to-pink-400",
      bgGradient: "from-purple-50 to-pink-50",
      iconColor: "text-purple-600",
    },
    {
      title: "In Progress",
      subtitle: "Campaigns",
      value: "847",
      icon: PlayCircle,
      gradient: "from-emerald-500 to-teal-400",
      bgGradient: "from-emerald-50 to-teal-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Completed",
      subtitle: "Campaigns",
      value: "2,156",
      icon: CheckCircle,
      gradient: "from-orange-500 to-red-400",
      bgGradient: "from-orange-50 to-red-50",
      iconColor: "text-orange-600",
    },
    {
      title: "Total",
      subtitle: "Campaigns",
      value: "4,287",
      icon: BarChart3,
      gradient: "from-indigo-500 to-purple-400",
      bgGradient: "from-indigo-50 to-purple-50",
      iconColor: "text-indigo-600",
    },
  ];
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Campaign Stats Grid - UPDATED SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {campaignStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                stat.isNew ? "col-span-1 md:col-span-2 lg:col-span-1" : ""
              }`}
              onClick={
                stat.isNew ? () => setCampaignModalOpen(true) : undefined
              }
            >
              <div
                className={`h-full bg-gradient-to-br ${stat.bgGradient} rounded-2xl p-6 border border-white/50 shadow-lg backdrop-blur-sm relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-white/80 shadow-sm ${stat.iconColor}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {!stat.isNew && (
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-800">
                          {stat.value}
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800 text-lg leading-tight">
                      {stat.title}
                    </h3>
                    {stat.subtitle && (
                      <p className="text-slate-600 text-sm">{stat.subtitle}</p>
                    )}
                    {stat.isNew && (
                      <p className="text-slate-600 text-sm mt-2">
                        Click to create
                      </p>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      <CampaignModal open={campaignModalOpen} setOpen={setCampaignModalOpen} onSubmit={fetchCampaigns} />
      {/* Campaign Data Table */}
      <Table
        columns={columns}
        dataSource={campaigns}
        loading={loading}
        rowKey="_id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
}

export default Dashboard;
