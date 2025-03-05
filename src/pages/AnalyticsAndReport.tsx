import React, { useState } from 'react';
import { Layout, Typography, Row, Col, Card, Statistic, Button } from 'antd';
import Sidebar from '../Sidebar'; // Adjust the path as needed
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const { Content } = Layout;
const { Title } = Typography;

const AnalyticsAndReport = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  // Sample data for financial trends
  const data = [
    { name: 'Jan', income: 1000, expense: 800 },
    { name: 'Feb', income: 1200, expense: 900 },
    { name: 'Mar', income: 1500, expense: 1100 },
    { name: 'Apr', income: 1300, expense: 1000 },
    { name: 'May', income: 1700, expense: 1300 },
    { name: 'Jun', income: 1600, expense: 1200 },
  ];

  return (
    <Layout>
      <Sidebar collapsed={collapsed} toggle={toggle} />
      <Content style={{ padding: '24px', minHeight: 280 }}>
        <Title level={2}>Analytics and Reports</Title>

        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <Statistic title="Total Income" value="$10,000" />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic title="Total Expenses" value="$8,000" />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic title="Net Worth" value="$20,000" />
            </Card>
          </Col>
        </Row>

        <Title level={3}>Income vs. Expenses</Title>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#82ca9d" />
          <Line type="monotone" dataKey="expense" stroke="#ff7300" />
        </LineChart>

        <Button type="primary" style={{ marginTop: 20 }}>
          <Link to="/generate-report">Generate Report</Link>
        </Button>
      </Content>
    </Layout>
  );
};

export default AnalyticsAndReport;