import React, { useState } from 'react';
import { Table, DatePicker, Select, Input, Pagination, Row, Col, Layout } from 'antd';
import { BankOutlined, CreditCardOutlined as CreditCardIcon, ApiOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Sidebar from '../Sidebar';


const { RangePicker } = DatePicker;
const { Option } = Select;
const { Search } = Input;
const { Sider, Content } = Layout;

const transactions = [
  {
    key: '1',
    date: '2025-03-01',
    description: 'Company A Payment',
    category: 'Income',
    amount: '$1000',
    transactionType: 'Credit',
    balance: '$5000',
    paymentMethod: 'Bank Transfer',
    status: 'Completed',
    referenceNumber: 'TXN123456',
  },
  {
    key: '2',
    date: '2025-03-02',
    description: 'Purchase at Store X',
    category: 'Expense',
    amount: '$500',
    transactionType: 'Debit',
    balance: '$4500',
    paymentMethod: 'Credit Card',
    status: 'Pending',
    referenceNumber: 'TXN123457',
  },
  {
    key: '3',
    date: '2025-03-03',
    description: 'Freelance Payment',
    category: 'Income',
    amount: '$2000',
    transactionType: 'Credit',
    balance: '$6500',
    paymentMethod: 'PayPal',
    status: 'Completed',
    referenceNumber: 'TXN123458',
  },
];

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Transaction Type',
    dataIndex: 'transactionType',
    key: 'transactionType',
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance',
  },
  {
    title: 'Payment Method',
    dataIndex: 'paymentMethod',
    key: 'paymentMethod',
    render: (text: string) => (
      <div>
        {text === 'Bank Transfer' && <BankOutlined />}
        {text === 'Credit Card' && <CreditCardIcon />}
        {text === 'PayPal' && <ApiOutlined />} {/* Using ApiOutlined as a placeholder */}
        <span style={{ marginLeft: 8 }}>{text}</span>
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Reference Number',
    dataIndex: 'referenceNumber',
    key: 'referenceNumber',
  },
];

const TransactionsContainer = styled.div`
  background-color: #141414;
  padding: 24px;
  min-height: 100vh;
  color: #fff;
`;

const Transactions = () => {
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const handleDateRangeChange = (dates: any, dateStrings: [string, string]) => {
    const [startDate, endDate] = dateStrings;
    const filtered = transactions.filter(transaction => {
      return transaction.date >= startDate && transaction.date <= endDate;
    });
    setFilteredTransactions(filtered);
  };

  const handleSearch = (value: string) => {
    const filtered = transactions.filter(transaction => {
      return (
        transaction.description.toLowerCase().includes(value.toLowerCase()) ||
        transaction.referenceNumber.toLowerCase().includes(value.toLowerCase()) ||
        transaction.category.toLowerCase().includes(value.toLowerCase())
      );
    });
    setFilteredTransactions(filtered);
  };

  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    setPageSize(pageSize || 5);
  };

  const paginatedTransactions = filteredTransactions.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={false}>
        <Sidebar collapsed={false} toggle={() => {}} />
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '24px 16px', padding: 24, background: '#141414', minHeight: 280 }}>
          <TransactionsContainer>
            <Row gutter={16}>
              <Col span={8}>
                <RangePicker onChange={handleDateRangeChange} />
              </Col>
              <Col span={8}>
                <Select placeholder="Select Transaction Type" style={{ width: '100%' }}>
                  <Option value="income">Income</Option>
                  <Option value="expense">Expense</Option>
                </Select>
              </Col>
              <Col span={8}>
                <Search placeholder="Search transactions" onSearch={handleSearch} style={{ width: '100%' }} />
              </Col>
            </Row>
            <Table columns={columns} dataSource={paginatedTransactions} pagination={false} style={{ marginTop: 16 }} />
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={filteredTransactions.length}
              onChange={handlePageChange}
              style={{ marginTop: 16, textAlign: 'right' }}
            />
          </TransactionsContainer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Transactions;