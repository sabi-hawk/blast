import React, { useEffect, useState } from 'react';
import { getCampaignAnalytics } from 'api/campaigns';
import { getLeadAnalytics } from 'api/leads';
import { Card, Row, Col, Spin } from 'antd';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

function Analytics() {
  const [loading, setLoading] = useState(true);
  const [campaignData, setCampaignData] = useState<any>(null);
  const [leadData, setLeadData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [c, l] = await Promise.all([
        getCampaignAnalytics().then(res => res.data),
        getLeadAnalytics().then(res => res.data)
      ]);
      setCampaignData(c);
      setLeadData(l);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <Spin />;

  return (
    <div className="p-6">
      <Row gutter={16}>
        <Col span={6}><Card title="Total Campaigns">{campaignData.stats.total}</Card></Col>
        <Col span={6}><Card title="Scheduled">{campaignData.stats.scheduled}</Card></Col>
        <Col span={6}><Card title="In Progress">{campaignData.stats.inProgress}</Card></Col>
        <Col span={6}><Card title="Completed">{campaignData.stats.completed}</Card></Col>
      </Row>
      <Row gutter={16} className="mt-6">
        <Col span={12}>
          <Card title="Campaigns Created Per Month">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={campaignData.monthly}>
                <XAxis dataKey="_id" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Leads Added Per Month">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={leadData.monthly}>
                <XAxis dataKey="_id" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} className="mt-6">
        <Col span={12}>
          <Card title="Leads Per Group">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={leadData.perGroup} dataKey="count" nameKey="_id" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Analytics;