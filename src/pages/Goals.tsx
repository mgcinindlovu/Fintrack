import React, { useState } from 'react';
import { Card, Progress, Button, Row, Col, List, Typography, Layout } from 'antd';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Sidebar from '../Sidebar';

const { Title, Text } = Typography;

const goals = [
  {
    name: 'Emergency Fund',
    progress: 60,
    remainingBalance: '$4000',
    expectedCompletionDate: '2025-12-31',
  },
  {
    name: 'Vacation Fund',
    progress: 30,
    remainingBalance: '$2000',
    expectedCompletionDate: '2025-06-30',
  },
];

const recommendations = [
  {
    name: 'Save for Retirement',
    description: 'Start saving for your retirement to ensure a comfortable future.',
  },
  {
    name: 'Home Down Payment',
    description: 'Save for a down payment on a new home.',
  },
];

const goalHistoryData = [
  { name: 'Jan', progress: 10 },
  { name: 'Feb', progress: 20 },
  { name: 'Mar', progress: 30 },
  { name: 'Apr', progress: 40 },
  { name: 'May', progress: 50 },
  { name: 'Jun', progress: 60 },
];

const GoalsContainer = styled.div`
  background-color: #141414;
  padding: 24px;
  min-height: 100vh;
  color: #fff;
`;

const Goals = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} toggle={toggle} />
      <Layout className="site-layout">
        <GoalsContainer>
          <Row gutter={16}>
            <Col span={12}>
              <Card title="Active Goals" bordered={false} style={{ marginBottom: 16 }}>
                <List
                  itemLayout="horizontal"
                  dataSource={goals}
                  renderItem={goal => (
                    <List.Item
                      actions={[
                        <Button type="primary">Update</Button>,
                        <Button type="default">Contribute</Button>,
                      ]}
                    >
                      <List.Item.Meta
                        title={goal.name}
                        description={
                          <>
                            <Progress percent={goal.progress} />
                            <Text>Remaining Balance: {goal.remainingBalance}</Text>
                            <br />
                            <Text>Expected Completion Date: {goal.expectedCompletionDate}</Text>
                          </>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Goal Recommendations" bordered={false} style={{ marginBottom: 16 }}>
                <List
                  itemLayout="horizontal"
                  dataSource={recommendations}
                  renderItem={recommendation => (
                    <List.Item>
                      <List.Item.Meta
                        title={recommendation.name}
                        description={recommendation.description}
                      />
                    </List.Item>
                  )}
                />
              </Card>
              <Card title="Savings Plan" bordered={false}>
                <Text>Here is a plan showing how you can achieve your financial goals.</Text>
                {/* Add more details about the savings plan here */}
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Card title="Goal Insights" bordered={false}>
                <Title level={4}>Goal History</Title>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={goalHistoryData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="progress" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </Col>
          </Row>
        </GoalsContainer>
      </Layout>
    </Layout>
  );
};

export default Goals;