import React from 'react';
import { Layout, Input, Card, Calendar, Select, Row, Col, Button, Progress, Dropdown, Menu as AntMenu, Table } from 'antd';
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
import profilePic from './assets/Rectangle 68.jpg';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Sidebar from './Sidebar';

const { Header, Content } = Layout;
const { Search } = Input;
const { Option } = Select;

const data = [
  { name: 'Jan', income: 4000, expenses: 2400, amt: 2400 },
  { name: 'Feb', income: 3000, expenses: 1398, amt: 2210 },
  { name: 'Mar', income: 2000, expenses: 9800, amt: 2290 },
  { name: 'Apr', income: 2780, expenses: 3908, amt: 2000 },
  { name: 'May', income: 1890, expenses: 4800, amt: 2181 },
  { name: 'Jun', income: 2390, expenses: 3800, amt: 2500 },
  { name: 'Jul', income: 3490, expenses: 4300, amt: 2100 },
];

const currencyRates: { [key: string]: number } = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
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

const columns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (text: string, record: any) => (
      <div>
        <div>{record.type === 'Income' ? <DollarOutlined /> : <CreditCardOutlined />}</div>
        <div>{record.name}</div>
        <div>{record.date}</div>
        <div>{record.direction}</div>
      </div>
    ),
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Payment Method',
    dataIndex: 'paymentMethod',
    key: 'paymentMethod',
    render: (text: string) => (
      <div>
        {text === 'Bank Transfer' && <BankOutlined />}
        {text === 'Credit Card' && <CreditCardIcon />}
        {text === 'PayPal' && <ApiOutlined />}
        <span style={{ marginLeft: 8 }}>{text}</span>
      </div>
    ),
  },
];

const Logo = styled.div`
  height: 32px;
  margin: 16px;
  color: #008cff;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background: #001529;
`;

const Trigger = styled.div`
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
`;

const SiteLayoutBackground = styled.div`
  background: #001529;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilePic = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin-left: 16px;
`;

const WelcomeMessage = styled.div`
  margin-left: 16px;
  font-size: 16px;
  color: #fff;
`;

const CardContainer = styled.div`
  margin: 24px 0;
`;

const StyledCard = styled(Card)`
  background: #fff;
  color: #000;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h1`
  margin: 0;
  color: #000;
`;

const CardDate = styled.div`
  font-size: 14px;
  color: #888;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
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
  }
  p {
    color: #000;
  }
`;

const FinanceCard = styled(Card)`
  background: #fff;
  color: #000;
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
`;

const QuickActionsCard = styled(Card)`
  background: #fff;
  color: #000;
`;

const QuickActionsCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuickActionsCardTitle = styled.h1`
  margin: 0;
  color: #000;
`;

const QuickActionsCardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const QuickActionsButton = styled(Button)`
  margin-bottom: 16px;
`;

const GoalsContainer = styled.div`
  margin-top: 16px;
`;

const GoalItem = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;

const GoalIcon = styled.div`
  margin-right: 8px;
  color: #000;
`;

const TransactionsCard = styled(Card)`
  background: #fff;
  color: #000;
  margin-top: 24px;
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

class Dashboard extends React.Component {
  state = {
    collapsed: false,
    currency: 'USD',
    balance: 7890,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleCurrencyChange = (value: string) => {
    const newBalance = 7890 * currencyRates[value];
    this.setState({
      currency: value,
      balance: newBalance,
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
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Trigger onClick={this.toggle}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
              )}
            </Trigger>
            <HeaderContent>
              <ProfileContainer>
                <ProfilePic src={profilePic} alt="Profile" />
                <WelcomeMessage>Welcome back, Mgcini!</WelcomeMessage>
              </ProfileContainer>
              <Search
                placeholder="Search..."
                onSearch={(value: string) => console.log(value)}
                style={{ width: 200 }}
              />
            </HeaderContent>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Row gutter={16}>
              <Col span={8}>
                <CardContainer>
                  <StyledCard>
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                      <CardDate>{new Date().toLocaleDateString()}</CardDate>
                    </CardHeader>
                    <CardContent>
                      <CardItem>
                        <h2>Transactions</h2>
                        <p>123</p>
                      </CardItem>
                      <CardItem>
                        <h2>Income</h2>
                        <p>$4567</p>
                      </CardItem>
                      <CardItem>
                        <h2>Outcome</h2>
                        <p>$1234</p>
                      </CardItem>
                    </CardContent>
                    <Calendar fullscreen={false} />
                  </StyledCard>
                </CardContainer>
              </Col>
              <Col span={8}>
                <CardContainer>
                  <FinanceCard>
                    <FinanceCardHeader>
                      <FinanceCardTitle>Finance</FinanceCardTitle>
                      <CurrencySelect
                        defaultValue="USD"
                        onChange={(value) => this.handleCurrencyChange(value as string)}
                      >
                        <Option value="USD">USD</Option>
                        <Option value="EUR">EUR</Option>
                        <Option value="GBP">GBP</Option>
                      </CurrencySelect>
                    </FinanceCardHeader>
                    <FinanceCardContent>
                      <FinanceCardItem>
                        <h2>Balance</h2>
                        <p>
                          {this.state.currency} {this.state.balance.toFixed(2)}
                        </p>
                      </FinanceCardItem>
                    </FinanceCardContent>
                    <FinanceCardContent>
                      <FinanceCardItem>
                        <h2>Finance Health</h2>
                        <ResponsiveContainer width="100%" height={200}>
                          <LineChart
                            data={data}
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
                            <Line
                              type="monotone"
                              dataKey="income"
                              stroke="#8884d8"
                              activeDot={{ r: 8 }}
                            />
                            <Line
                              type="monotone"
                              dataKey="expenses"
                              stroke="#82ca9d"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </FinanceCardItem>
                    </FinanceCardContent>
                  </FinanceCard>
                </CardContainer>
              </Col>
              <Col span={8}>
                <CardContainer>
                  <QuickActionsCard>
                    <QuickActionsCardHeader>
                      <QuickActionsCardTitle>Quick Actions</QuickActionsCardTitle>
                      <span style={{ color: '#000' }}>Manage</span>
                    </QuickActionsCardHeader>
                    <QuickActionsCardContent>
                      <Dropdown overlay={sendMoneyMenu}>
                        <QuickActionsButton type="primary" block>
                          Send Money
                        </QuickActionsButton>
                      </Dropdown>
                      <Dropdown overlay={requestMoneyMenu}>
                        <QuickActionsButton type="primary" block>
                          Request Money
                        </QuickActionsButton>
                      </Dropdown>
                      <GoalsContainer>
                        <GoalItem>
                          <GoalIcon>
                            <UserOutlined />
                          </GoalIcon>
                          <div>
                            <h2 style={{ color: '#000' }}>Goal 1</h2>
                            <Progress percent={50} />
                          </div>
                        </GoalItem>
                        <GoalItem>
                          <GoalIcon>
                            <UserOutlined />
                          </GoalIcon>
                          <div>
                            <h2 style={{ color: '#000' }}>Goal 2</h2>
                            <Progress percent={75} />
                          </div>
                        </GoalItem>
                      </GoalsContainer>
                    </QuickActionsCardContent>
                  </QuickActionsCard>
                </CardContainer>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <CardContainer>
                  <TransactionsCard>
                    <TransactionsCardHeader>
                      <TransactionsCardTitle>Recent Transactions</TransactionsCardTitle>
                      <FilterText>
                        <FilterOutlined style={{ marginRight: 8 }} />
                        Filter
                      </FilterText>
                    </TransactionsCardHeader>
                    <Table columns={columns} dataSource={transactions} pagination={false} />
                  </TransactionsCard>
                </CardContainer>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;