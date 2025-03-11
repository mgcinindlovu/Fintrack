import React, { useState } from 'react';
import { Card, Progress, Button, Row, Col, List, Typography, Layout, Modal, Input, Form } from 'antd';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Sidebar from '../Sidebar';

const { Title, Text } = Typography;

// Type for goal object
interface Goal {
  name: string;
  progress: number;
  remainingBalance: string;
  expectedCompletionDate: string;
}

const goalsInitialState: Goal[] = [
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

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 576px) {
    padding: 12px;
  }
`;

const StyledCard = styled(Card)`
  margin-bottom: 16px;
  
  .ant-card-head-title {
    @media (max-width: 576px) {
      font-size: 16px;
    }
  }

  .ant-list-item {
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }

  .ant-list-item-meta {
    @media (max-width: 576px) {
      width: 100%;
    }
  }

  .ant-list-item-action {
    @media (max-width: 576px) {
      width: 100%;
      margin-left: 0;
      
      button {
        width: 100%;
        margin-bottom: 8px;
      }
    }
  }
`;

const ChartCard = styled(Card)`
  .recharts-responsive-container {
    @media (max-width: 576px) {
      height: 250px !important;
    }
  }
`;

const Goals = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [goals, setGoals] = useState<Goal[]>(goalsInitialState);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [contributionAmount, setContributionAmount] = useState('');

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleUpdate = (goal: Goal) => {
    setSelectedGoal(goal);
    setIsModalVisible(true);
  };

  const handleContribute = (goal: Goal) => {
    setSelectedGoal(goal);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    if (selectedGoal && contributionAmount) {
      const updatedGoals = goals.map((goal) =>
        goal.name === selectedGoal.name
          ? {
              ...goal,
              progress: Math.min(goal.progress + 10, 100), // Example: Increase progress by 10%
              remainingBalance: `$${parseInt(goal.remainingBalance.replace('$', '')) - parseInt(contributionAmount)}`,
            }
          : goal
      );
      setGoals(updatedGoals);
    }
    setIsModalVisible(false);
    setContributionAmount('');
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setContributionAmount('');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} toggle={toggle} />
      <Layout className="site-layout">
        <GoalsContainer>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <StyledCard title="Active Goals" bordered={false}>
                <List
                  itemLayout="horizontal"
                  dataSource={goals}
                  renderItem={(goal) => (
                    <List.Item
                      actions={[
                        <Button type="primary" onClick={() => handleUpdate(goal)}>
                          Update
                        </Button>,
                        <Button type="default" onClick={() => handleContribute(goal)}>
                          Contribute
                        </Button>,
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
              </StyledCard>
            </Col>
            <Col xs={24} md={12}>
              <StyledCard title="Goal Recommendations" bordered={false}>
                <List
                  itemLayout="horizontal"
                  dataSource={recommendations}
                  renderItem={(recommendation) => (
                    <List.Item>
                      <List.Item.Meta
                        title={recommendation.name}
                        description={recommendation.description}
                      />
                    </List.Item>
                  )}
                />
              </StyledCard>
              <StyledCard title="Savings Plan" bordered={false}>
                <Text>Here is a plan showing how you can achieve your financial goals.</Text>
              </StyledCard>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <ChartCard title="Goal Insights" bordered={false}>
                <Title level={4}>Goal History</Title>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={goalHistoryData}
                    margin={{
                      top: 5,
                      right: 20,
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
              </ChartCard>
            </Col>
          </Row>
        </GoalsContainer>
      </Layout>

      <Modal
        title={selectedGoal ? `Contribute to ${selectedGoal.name}` : 'Update Goal'}
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width={window.innerWidth < 576 ? "95%" : 520}
      >
        <Form layout={window.innerWidth < 576 ? "vertical" : "horizontal"}>
          <Form.Item label="Contribution Amount">
            <Input
              type="number"
              value={contributionAmount}
              onChange={(e) => setContributionAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Goals;
