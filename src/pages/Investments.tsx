import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Card, Statistic, Table, Tag, Button, Typography, Divider } from 'antd';
import { DollarOutlined, BarChartOutlined, FundOutlined, LineChartOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Sidebar from '../Sidebar';  // Assuming Sidebar is in the components folder

const { Content } = Layout;
const { Title } = Typography;

const PortfolioCard = styled(Card)`
  margin-bottom: 20px;
`;

const ChartWrapper = styled.div`
  height: 300px;
  background: #f5f5f5;
  margin-bottom: 20px;
`;

const Investments = () => {
  const [collapsed, setCollapsed] = useState(false);  // Manage sidebar collapse state
  const [investments, setInvestments] = useState<any[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);

  // Toggle function for sidebar
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  // Simulating fetching investment data
  useEffect(() => {
    const fetchInvestments = () => {
      // Replace with actual API call
      const data = [
        {
          key: '1',
          name: 'Apple Stock',
          type: 'Stock',
          invested: 5000,
          currentValue: 5500,
          performance: 10,
        },
        {
          key: '2',
          name: 'Real Estate Fund',
          type: 'Fund',
          invested: 10000,
          currentValue: 11000,
          performance: 5,
        },
        {
          key: '3',
          name: 'Bitcoin',
          type: 'Crypto',
          invested: 3000,
          currentValue: 4500,
          performance: 50,
        },
      ];

      setInvestments(data);
      setTotalValue(data.reduce((acc, investment) => acc + investment.currentValue, 0));
    };

    fetchInvestments();
  }, []);

  const columns = [
    {
      title: 'Investment',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Amount Invested',
      dataIndex: 'invested',
      key: 'invested',
      render: (text: number) => `$${text.toFixed(2)}`,
    },
    {
      title: 'Current Value',
      dataIndex: 'currentValue',
      key: 'currentValue',
      render: (text: number) => `$${text.toFixed(2)}`,
    },
    {
      title: 'Performance',
      dataIndex: 'performance',
      key: 'performance',
      render: (text: number) => `${text}%`,
    },
  ];

  return (
    <Layout>
      <Sidebar collapsed={collapsed} toggle={toggle} /> {/* Pass collapsed and toggle to Sidebar */}
      <Content style={{ padding: '24px', minHeight: 280 }}>
        <Title level={2}>My Investments</Title>

        {/* Portfolio Overview */}
        <Row gutter={16}>
          <Col span={8}>
            <PortfolioCard title="Total Portfolio Value" bordered>
              <Statistic
                prefix={<DollarOutlined />}
                value={totalValue}
                precision={2}
                valueStyle={{ fontSize: '24px', fontWeight: 'bold' }}
                suffix="USD"
              />
            </PortfolioCard>
          </Col>
          <Col span={8}>
            <PortfolioCard title="Risk Level" bordered>
              <Tag color="geekblue">Medium</Tag>
            </PortfolioCard>
          </Col>
          <Col span={8}>
            <PortfolioCard title="Investment Performance" bordered>
              <Row justify="center" align="middle">
                <Col span={12}>
                  <BarChartOutlined style={{ fontSize: 48 }} />
                  <Title level={4}>+8.2%</Title>
                </Col>
              </Row>
            </PortfolioCard>
          </Col>
        </Row>

        {/* Investment Breakdown */}
        <Title level={3}>Investment Breakdown</Title>
        <Table columns={columns} dataSource={investments} pagination={false} />

        <Divider />

        {/* Investment Strategy Recommendations */}
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Suggested Investments" bordered>
              <ul>
                <li>Consider diversifying your portfolio by adding bonds.</li>
                <li>Look into adding international stocks to reduce risk.</li>
                <li>Explore tax-efficient investments like index funds.</li>
              </ul>
            </Card>
          </Col>
          <Col span={12}>
            <ChartWrapper>
              {/* Placeholder for investment performance chart */}
              <LineChartOutlined style={{ fontSize: 48, color: '#8c8c8c' }} />
              <Title level={5} style={{ textAlign: 'center' }}>Portfolio Performance Chart</Title>
            </ChartWrapper>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Investments;
