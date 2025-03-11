import React from 'react';
import { Layout, Input, Card, Calendar, Select, Row, Col, Button, Progress, Dropdown, Menu as AntMenu, Table } from 'antd';
import type { TableProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DollarOutlined,
  BarChartOutlined,
  CreditCardOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  AppstoreOutlined,
  FilterOutlined,
  DashboardOutlined,
  BankOutlined,
  CreditCardOutlined as CreditCardIcon,
  ApiOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Sidebar from './Sidebar';
import Header from './Header'
import 'country-flag-icons/3x2/flags.css'; // Import flag icons

const { Content } = Layout;
const { Search } = Input;
const { Option } = Select;

// Add TransactionType interface
interface TransactionType {
  key: string;
  type: string;
  name: string;
  date: string;
  amount: string;
  status: string;
  paymentMethod: string;
  direction: string;
}

const data = [
  { name: 'Jan', income: 4000, expenses: 2400, amt: 2400 },
  { name: 'Feb', income: 3000, expenses: 1398, amt: 2210 },
  { name: 'Mar', income: 2000, expenses: 9800, amt: 2290 },
  { name: 'Apr', income: 2780, expenses: 3908, amt: 2000 },
  { name: 'May', income: 1890, expenses: 4800, amt: 2181 },
  { name: 'Jun', income: 2390, expenses: 3800, amt: 2500 },
  { name: 'Jul', income: 3490, expenses: 4300, amt: 2100 },
];

// Comprehensive list of currencies with exchange rates (example rates)
const currencyRates: { [key: string]: { rate: number; flag: string } } = {
  USD: { rate: 1, flag: 'US' }, // United States Dollar
  EUR: { rate: 0.85, flag: 'EU' }, // Euro
  GBP: { rate: 0.75, flag: 'GB' }, // British Pound
  ZWL: { rate: 322.23, flag: 'ZW' }, // Zimbabwean Dollar
  JPY: { rate: 110.0, flag: 'JP' }, // Japanese Yen
  AUD: { rate: 1.35, flag: 'AU' }, // Australian Dollar
  CAD: { rate: 1.25, flag: 'CA' }, // Canadian Dollar
  CHF: { rate: 0.92, flag: 'CH' }, // Swiss Franc
  CNY: { rate: 6.45, flag: 'CN' }, // Chinese Yuan
  INR: { rate: 75.0, flag: 'IN' }, // Indian Rupee
};

const transactions = [
  {
    key: '1',
    type: 'Income',
    name: 'Company A',
    date: '2025-03-01',
    amount: '$1000',
    status: 'Completed',
    paymentMethod: 'Bank Transfer',
    direction: 'Received',
  },
  {
    key: '2',
    type: 'Expense',
    name: 'Individual B',
    date: '2025-03-02',
    amount: '$500',
    status: 'Pending',
    paymentMethod: 'Credit Card',
    direction: 'Sent',
  },
  {
    key: '3',
    type: 'Income',
    name: 'Company C',
    date: '2025-03-03',
    amount: '$2000',
    status: 'Completed',
    paymentMethod: 'PayPal',
    direction: 'Received',
  },
];

const columns: ColumnsType<TransactionType> = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (text: string, record: TransactionType) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div>{record.type === 'Income' ? <DollarOutlined /> : <CreditCardOutlined />}</div>
        <div style={{ fontSize: '14px' }}>{record.name}</div>
        <div style={{ fontSize: '12px', color: '#666' }}>{record.date}</div>
        <div style={{ fontSize: '12px' }}>{record.direction}</div>
      </div>
    ),
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    responsive: ['md'],
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    responsive: ['lg'],
  },
  {
    title: 'Payment Method',
    dataIndex: 'paymentMethod',
    key: 'paymentMethod',
    responsive: ['lg'],
    render: (text: string) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {text === 'Bank Transfer' && <BankOutlined />}
        {text === 'Credit Card' && <CreditCardIcon />}
        {text === 'PayPal' && <ApiOutlined />}
        <span>{text}</span>
      </div>
    ),
  },
];

const Logo = styled.div`
  height: 32px;
  margin: 16px;
  color: #008cff;
  @media (max-width: 576px) {
    margin: 12px;
    text-align: center;
  }
`;

const SiteLayoutBackground = styled.div`
  background: #001529;
  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfilePic = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin-left: 16px;
  @media (max-width: 576px) {
    margin: 8px auto;
  }
`;

const WelcomeMessage = styled.div`
  margin-left: 16px;
  font-size: 16px;
  color: #fff;
  @media (max-width: 576px) {
    margin: 8px 0;
    font-size: 14px;
  }
`;

const CardContainer = styled.div`
  margin: 24px 0;
  @media (max-width: 768px) {
    margin: 12px 0;
  }
  @media (max-width: 576px) {
    margin: 8px 0;
  }
`;

const StyledCard = styled(Card)`
  background: #fff;
  color: #000;
  @media (max-width: 768px) {
    .ant-card-body {
      padding: 12px;
    }
  }
  @media (max-width: 576px) {
    .ant-card-head {
      padding: 0 12px;
      min-height: 40px;
      font-size: 14px;
    }
    .ant-card-head-title {
      padding: 8px 0;
    }
    .ant-card-extra {
      padding: 8px 0;
    }
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const CardTitle = styled.h1`
  margin: 0;
  color: #000;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

const CardDate = styled.div`
  font-size: 14px;
  color: #888;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const CardItem = styled.div`
  text-align: center;
  flex: 1;
  border-right: 1px solid #444;
  &:last-child {
    border-right: none;
  }
  h2 {
    color: #000;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  p {
    color: #000;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  @media (max-width: 576px) {
    border-right: none;
    border-bottom: 1px solid #444;
    padding-bottom: 12px;
    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;

const FinanceCard = styled(Card)`
  background: #fff;
  color: #000;
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const FinanceCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FinanceCardTitle = styled.h1`
  margin: 0;
  color: #000;
`;

const CurrencySelect = styled(Select)`
  width: 120px;
`;

const FinanceCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const FinanceCardItem = styled.div`
  text-align: center;
  flex: 1;
  border-right: 1px solid #444;
  &:last-child {
    border-right: none;
  }
  h2 {
    color: #000;
  }
  p {
    color: #000;
  }
  @media (max-width: 576px) {
    border-right: none;
    border-bottom: 1px solid #444;
    padding-bottom: 16px;
    &:last-child {
      border-bottom: none;
    }
  }
`;

const QuickActionsCard = styled(Card)`
  background: #fff;
  color: #000;
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const QuickActionsCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 12px;
    .ant-btn {
      width: 100%;
    }
  }
`;

const QuickActionsCardTitle = styled.h1`
  margin: 0;
  color: #000;
`;

const QuickActionsCardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  @media (max-width: 576px) {
    margin-top: 12px;
  }
`;

const QuickActionsButton = styled(Button)`
  margin-bottom: 16px;
  @media (max-width: 576px) {
    margin-bottom: 12px;
    width: 100%;
  }
`;

const GoalsContainer = styled.div`
  margin-top: 16px;
  @media (max-width: 576px) {
    margin-top: 12px;
  }
`;

const GoalItem = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    margin-bottom: 12px;
  }
`;

const GoalIcon = styled.div`
  margin-right: 8px;
  color: #000;
`;

const TransactionsCard = styled(Card)`
  background: #fff;
  color: #000;
  margin-top: 24px;
  @media (max-width: 768px) {
    margin-top: 16px;
  }
  @media (max-width: 576px) {
    margin-top: 12px;
    .ant-table {
      font-size: 14px;
    }
  }
`;

const TransactionsCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TransactionsCardTitle = styled.h1`
  margin: 0;
  color: #000;
`;

const FilterText = styled.span`
  color: #000;
  display: flex;
  align-items: center;
`;

const StyledContent = styled(Content)`
  margin: 16px;
  padding: 24px;
  min-height: 280px;

  @media (max-width: 768px) {
    margin: 12px;
    padding: 16px;
  }

  @media (max-width: 576px) {
    margin: 8px;
    padding: 12px;
  }
`;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
    currency: 'USD',
    balance: 7890,
    searchQuery: '',
    filteredTransactions: transactions,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleCurrencyChange = (value: string) => {
    const newBalance = 7890 * currencyRates[value].rate;
    this.setState({
      currency: value,
      balance: newBalance,
    });
  };

  handleSearch = (value: string) => {
    const filtered = transactions.filter(transaction =>
      transaction.name.toLowerCase().includes(value.toLowerCase()) ||
      transaction.type.toLowerCase().includes(value.toLowerCase()) ||
      transaction.status.toLowerCase().includes(value.toLowerCase()) ||
      transaction.paymentMethod.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      searchQuery: value,
      filteredTransactions: filtered,
    });
  };

  render() {
    const sendMoneyMenu = (
      <AntMenu>
        <AntMenu.Item key="1">To Bank Account</AntMenu.Item>
        <AntMenu.Item key="2">To Mobile Wallet</AntMenu.Item>
      </AntMenu>
    );

    const requestMoneyMenu = (
      <AntMenu>
        <AntMenu.Item key="1">From Bank Account</AntMenu.Item>
        <AntMenu.Item key="2">From Mobile Wallet</AntMenu.Item>
      </AntMenu>
    );

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar collapsed={this.state.collapsed} toggle={this.toggle} />
        <Header 
          collapsed={this.state.collapsed}
          onSearch={(query) => {
            // Handle search functionality here
            console.log('Search query:', query);
          }}
        />
        <Layout className="site-layout">
          <StyledContent className="site-layout-background">
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={8}>
                <CardContainer>
                  <StyledCard
                    title="Income"
                    extra={<Button icon={<DollarOutlined />} />}
                  >
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="income"
                          stroke="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </StyledCard>
                </CardContainer>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <CardContainer>
                  <StyledCard
                    title="Expenses"
                    extra={<Button icon={<DollarOutlined />} />}
                  >
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="expenses"
                          stroke="#82ca9d"
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </StyledCard>
                </CardContainer>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <CardContainer>
                  <StyledCard title="Balance">
                    <h2>${this.state.balance}</h2>
                  </StyledCard>
                </CardContainer>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12}>
                <FinanceCard>
                  <FinanceCardHeader>
                    <FinanceCardTitle>Quick Actions</FinanceCardTitle>
                    <Dropdown overlay={sendMoneyMenu} trigger={['click']}>
                      <Button icon={<CreditCardOutlined />}>Send Money</Button>
                    </Dropdown>
                  </FinanceCardHeader>
                  <FinanceCardContent>
                    <FinanceCardItem>
                      <h2>USD</h2>
                      <p>Cash Balance</p>
                    </FinanceCardItem>
                    <FinanceCardItem>
                      <h2>EUR</h2>
                      <p>Equity</p>
                    </FinanceCardItem>
                  </FinanceCardContent>
                </FinanceCard>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <QuickActionsCard>
                  <QuickActionsCardHeader>
                    <QuickActionsCardTitle>Requests</QuickActionsCardTitle>
                    <Dropdown overlay={requestMoneyMenu} trigger={['click']}>
                      <Button icon={<CreditCardOutlined />}>Request Money</Button>
                    </Dropdown>
                  </QuickActionsCardHeader>
                  <QuickActionsCardContent>
                    <QuickActionsButton>Send</QuickActionsButton>
                    <QuickActionsButton>Receive</QuickActionsButton>
                  </QuickActionsCardContent>
                </QuickActionsCard>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={24} lg={12}>
                <TransactionsCard title="Transactions">
                  <Table
                    dataSource={this.state.filteredTransactions}
                    columns={columns}
                    pagination={false}
                    scroll={{ y: 240, x: true }}
                  />
                </TransactionsCard>
              </Col>
            </Row>
          </StyledContent>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;