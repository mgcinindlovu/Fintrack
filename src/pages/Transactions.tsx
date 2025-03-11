import React, { useState } from 'react';
import { Table, DatePicker, Select, Input, Pagination, Row, Col, Layout } from 'antd';
import type { Breakpoint } from 'antd';
import { BankOutlined, CreditCardOutlined as CreditCardIcon, ApiOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Sidebar from '../Sidebar';

const { RangePicker } = DatePicker;
const { Option } = Select;
const { Search } = Input;
const { Content } = Layout;

const StyledContent = styled(Content)`
  margin: 24px 16px;
  padding: 24px;
  background: #141414;
  min-height: 280px;
  margin-top: 64px;

  @media (max-width: 768px) {
    margin: 16px 12px;
    padding: 16px;
    margin-top: 56px;
  }

  @media (max-width: 576px) {
    margin: 12px 8px;
    padding: 12px;
  }
`;

const FilterContainer = styled(Row)`
  margin-bottom: 16px;
  
  .ant-col {
    margin-bottom: 16px;
  }

  @media (max-width: 576px) {
    .ant-picker {
      width: 100%;
    }
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

const StyledPagination = styled(Pagination)`
  margin-top: 16px;
  text-align: right;

  @media (max-width: 576px) {
    text-align: center;
  }
`;

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
    responsive: ['md' as Breakpoint],
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
    responsive: ['lg' as Breakpoint],
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Type',
    dataIndex: 'transactionType',
    key: 'transactionType',
    responsive: ['sm' as Breakpoint],
  },
  {
    title: 'Method',
    dataIndex: 'paymentMethod',
    key: 'paymentMethod',
    responsive: ['md' as Breakpoint],
    render: (text: string) => (
      <div>
        {text === 'Bank Transfer' && <BankOutlined />}
        {text === 'Credit Card' && <CreditCardIcon />}
        {text === 'PayPal' && <ApiOutlined />}
        <span style={{ marginLeft: 8 }}>{text}</span>
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    responsive: ['lg' as Breakpoint],
  },
];

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

  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={false} toggle={() => {}} />
      <StyledContent>
        <FilterContainer gutter={[16, 16]}>
          <Col xs={24} sm={24} md={8}>
            <RangePicker 
              onChange={handleDateRangeChange}
              style={{ width: '100%' }}
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Select 
              placeholder="Select Transaction Type" 
              style={{ width: '100%' }}
            >
              <Option value="income">Income</Option>
              <Option value="expense">Expense</Option>
            </Select>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Search 
              placeholder="Search transactions" 
              onSearch={handleSearch}
              style={{ width: '100%' }}
            />
          </Col>
        </FilterContainer>

        <ResponsiveTable 
          columns={columns} 
          dataSource={paginatedTransactions} 
          pagination={false}
          scroll={{ x: 'max-content' }}
        />

        <StyledPagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredTransactions.length}
          onChange={handlePageChange}
          size="small"
          responsive
        />
      </StyledContent>
    </Layout>
  );
};

export default Transactions;