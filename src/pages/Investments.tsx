import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Card, Statistic, Table, Tag, Button, Typography, Divider } from 'antd';
import type { Breakpoint } from 'antd';
import { DollarOutlined, BarChartOutlined, FundOutlined, LineChartOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Sidebar from '../Sidebar';  // Assuming Sidebar is in the components folder

const { Content } = Layout;
const { Title } = Typography;

const StyledContent = styled(Content)`
  padding: 24px;
  min-height: 280px;
  margin-top: 64px;

  @media (max-width: 768px) {
    padding: 16px;
    margin-top: 56px;
  }

  @media (max-width: 576px) {
    padding: 12px;
  }
`;

const StyledTitle = styled(Title)`
  &.ant-typography {
    margin-bottom: 24px;
    
    @media (max-width: 768px) {
      font-size: 24px !important;
      margin-bottom: 16px;
    }
  }
`;

const PortfolioCard = styled(Card)`
  margin-bottom: 20px;
  
  .ant-card-body {
    @media (max-width: 576px) {
      padding: 16px;
    }
  }

  .ant-statistic-content {
    @media (max-width: 576px) {
      font-size: 20px !important;
    }
  }
`;

const ChartWrapper = styled.div`
  height: 300px;
  background: #f5f5f5;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 576px) {
    height: 200px;
  }
`;

const ResponsiveTable = styled(Table)`
  .ant-table {
    overflow-x: auto;
  }

  @media (max-width: 768px) {
    .ant-table-cell {
      padding: 8px !important;
      font-size: 14px;
    }
  }

  @media (max-width: 576px) {
    .ant-table-cell {
      padding: 6px !important;
      font-size: 13px;
    }
  }
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
      responsive: ['md' as Breakpoint],
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      responsive: ['lg' as Breakpoint],
    },
    {
      title: 'Amount',
      dataIndex: 'invested',
      key: 'invested',
      render: (text: number) => `$${text.toFixed(2)}`,
    },
    {
      title: 'Value',
      dataIndex: 'currentValue',
      key: 'currentValue',
      render: (text: number) => `$${text.toFixed(2)}`,
    },
    {
      title: 'Performance',
      dataIndex: 'performance',
      key: 'performance',
      render: (text: number) => `${text}%`,
      responsive: ['sm' as Breakpoint],
    },
  ];

  return (
    <Layout>
      <Sidebar collapsed={collapsed} toggle={toggle} /> {/* Pass collapsed and toggle to Sidebar */}
      <StyledContent>
        <StyledTitle level={2}>My Investments</StyledTitle>

        {/* Portfolio Overview */}
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={8}>
            <PortfolioCard title="Total Portfolio Value">
              <Statistic
                prefix={<DollarOutlined />}
                value={totalValue}
                precision={2}
                valueStyle={{ fontSize: '24px', fontWeight: 'bold' }}
                suffix="USD"
              />
            </PortfolioCard>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <PortfolioCard title="Risk Level">
              <Tag color="geekblue">Medium</Tag>
            </PortfolioCard>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <PortfolioCard title="Performance">
              <Row justify="center" align="middle">
                <Col>
                  <BarChartOutlined style={{ fontSize: 32 }} />
                  <Title level={4}>+8.2%</Title>
                </Col>
              </Row>
            </PortfolioCard>
          </Col>
        </Row>

        {/* Investment Breakdown */}
        <StyledTitle level={3}>Investment Breakdown</StyledTitle>
        <ResponsiveTable 
          columns={columns} 
          dataSource={investments} 
          pagination={false}
          scroll={{ x: 'max-content' }}
        />

        <Divider />

        {/* Investment Strategy Recommendations */}
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card title="Suggested Investments">
              <ul>
                <li>Consider diversifying your portfolio by adding bonds.</li>
                <li>Look into adding international stocks to reduce risk.</li>
                <li>Explore tax-efficient investments like index funds.</li>
              </ul>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <ChartWrapper>
              <LineChartOutlined style={{ fontSize: 32, color: '#8c8c8c' }} />
              <Title level={5} style={{ textAlign: 'center', marginTop: 16 }}>
                Portfolio Performance Chart
              </Title>
            </ChartWrapper>
          </Col>
        </Row>
      </StyledContent>
    </Layout>
  );
};

export default Investments;
