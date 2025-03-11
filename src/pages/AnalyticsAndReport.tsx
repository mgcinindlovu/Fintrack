import React, { useState } from 'react';
import { Layout, Typography, Row, Col, Card, Statistic, Button } from 'antd';
import Sidebar from '../Sidebar'; // Adjust the path as needed
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';

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
      <ContentWrapper>
        <Title level={2}>Analytics and Reports</Title>

        <Row gutter={16}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card>
              <Statistic title="Total Income" value="$10,000" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card>
              <Statistic title="Total Expenses" value="$8,000" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card>
              <Statistic title="Net Worth" value="$20,000" />
            </Card>
          </Col>
        </Row>

        <Title level={3}>Income vs. Expenses</Title>
        <LineChartWrapper>
          <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#82ca9d" />
            <Line type="monotone" dataKey="expense" stroke="#ff7300" />
          </LineChart>
        </LineChartWrapper>

        <ButtonWrapper>
          <Button type="primary">
            <Link to="/generate-report">Generate Report</Link>
          </Button>
        </ButtonWrapper>
      </ContentWrapper>
    </Layout>
  );
};

// Styled Components for Responsiveness
const ContentWrapper = styled(Content)`
  padding: 24px;
  min-height: 280px;

  @media (max-width: 1200px) {
    padding: 20px;
  }

  @media (max-width: 992px) {
    padding: 18px;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 576px) {
    padding: 12px;
  }
`;

const LineChartWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 576px) {
    margin-top: 5px;
    width: 100%;
    justify-content: center;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 10px;
  }

  @media (max-width: 576px) {
    margin-top: 5px;
  }
`;

export default AnalyticsAndReport;
