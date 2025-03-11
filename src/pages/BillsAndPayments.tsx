import React, { useState } from 'react';
import { Layout, Typography, Table, Button, Tag, Modal, Input, Radio, Row, Col } from 'antd';
import type { Breakpoint } from 'antd';
import Sidebar from '../Sidebar'; // Adjust the path as needed
import styled from 'styled-components';

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

const StyledModal = styled(Modal)`
  @media (max-width: 768px) {
    .ant-modal-body {
      padding: 16px;
    }
    
    .ant-radio-wrapper {
      display: block;
      margin: 8px 0;
    }
  }
`;

const BillsAndPayments = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // For modal visibility
  const [currentBill, setCurrentBill] = useState<any>(null); // Store the current bill for payment
  const [paymentMethod, setPaymentMethod] = useState<string>(''); // Store the selected payment method

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const showModal = (bill: any) => {
    setCurrentBill(bill);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // Handle payment logic here, including the selected payment method
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handlePaymentMethodChange = (e: any) => {
    setPaymentMethod(e.target.value);
  };

  // Sample data for bills
  const billsData = [
    {
      key: '1',
      name: 'Electricity Bill',
      dueDate: '2025-03-10',
      amount: '$120.00',
      status: 'Paid',
      paymentMethod: 'Credit Card',
      paymentDate: '2025-03-01',
    },
    {
      key: '2',
      name: 'Water Bill',
      dueDate: '2025-03-15',
      amount: '$75.00',
      status: 'Pending',
      paymentMethod: '',
      paymentDate: '',
    },
    {
      key: '3',
      name: 'Internet Bill',
      dueDate: '2025-03-20',
      amount: '$50.00',
      status: 'Paid',
      paymentMethod: 'Debit Card',
      paymentDate: '2025-03-05',
    },
    {
      key: '4',
      name: 'Gas Bill',
      dueDate: '2025-03-25',
      amount: '$60.00',
      status: 'Pending',
      paymentMethod: '',
      paymentDate: '',
    },
    {
      key: '5',
      name: 'Rent Payment',
      dueDate: '2025-04-01',
      amount: '$1500.00',
      status: 'Pending',
      paymentMethod: '',
      paymentDate: '',
    },
    {
      key: '6',
      name: 'Car Loan Payment',
      dueDate: '2025-04-05',
      amount: '$250.00',
      status: 'Paid',
      paymentMethod: 'Bank Transfer',
      paymentDate: '2025-03-28',
    },
    {
      key: '7',
      name: 'Phone Bill',
      dueDate: '2025-04-10',
      amount: '$80.00',
      status: 'Pending',
      paymentMethod: '',
      paymentDate: '',
    },
    {
      key: '8',
      name: 'Insurance Payment',
      dueDate: '2025-04-15',
      amount: '$200.00',
      status: 'Paid',
      paymentMethod: 'Debit Card',
      paymentDate: '2025-03-30',
    },
    {
      key: '9',
      name: 'Subscription Service',
      dueDate: '2025-04-20',
      amount: '$15.00',
      status: 'Pending',
      paymentMethod: '',
      paymentDate: '',
    },
    {
      key: '10',
      name: 'Gym Membership',
      dueDate: '2025-04-25',
      amount: '$50.00',
      status: 'Paid',
      paymentMethod: 'Credit Card',
      paymentDate: '2025-03-15',
    },
    {
      key: '11',
      name: 'Streaming Service',
      dueDate: '2025-05-01',
      amount: '$12.00',
      status: 'Pending',
      paymentMethod: '',
      paymentDate: '',
    },
    {
      key: '12',
      name: 'Cable TV Bill',
      dueDate: '2025-05-05',
      amount: '$100.00',
      status: 'Paid',
      paymentMethod: 'PayPal',
      paymentDate: '2025-04-30',
    },
    {
      key: '13',
      name: 'Credit Card Bill',
      dueDate: '2025-05-10',
      amount: '$300.00',
      status: 'Pending',
      paymentMethod: '',
      paymentDate: '',
    },
    {
      key: '14',
      name: 'Student Loan Payment',
      dueDate: '2025-05-15',
      amount: '$600.00',
      status: 'Paid',
      paymentMethod: 'Bank Transfer',
      paymentDate: '2025-04-10',
    },
    {
      key: '15',
      name: 'Mortgage Payment',
      dueDate: '2025-05-20',
      amount: '$2000.00',
      status: 'Pending',
      paymentMethod: '',
      paymentDate: '',
    },
    {
      key: '16',
      name: 'Medical Bill',
      dueDate: '2025-05-25',
      amount: '$150.00',
      status: 'Paid',
      paymentMethod: 'Debit Card',
      paymentDate: '2025-05-01',
    },
    {
      key: '17',
      name: 'Electricity Bill (April)',
      dueDate: '2025-04-10',
      amount: '$120.00',
      status: 'Pending',
      paymentMethod: '',
      paymentDate: '',
    },
    {
      key: '18',
      name: 'Water Bill (April)',
      dueDate: '2025-04-15',
      amount: '$75.00',
      status: 'Paid',
      paymentMethod: 'Credit Card',
      paymentDate: '2025-03-25',
    },
    {
      key: '19',
      name: 'Internet Bill (April)',
      dueDate: '2025-04-20',
      amount: '$50.00',
      status: 'Pending',
      paymentMethod: '',
      paymentDate: '',
    },
    {
      key: '20',
      name: 'Gas Bill (April)',
      dueDate: '2025-04-25',
      amount: '$60.00',
      status: 'Paid',
      paymentMethod: 'Bank Transfer',
      paymentDate: '2025-04-05',
    },
  ];

  // Payment methods list
  const paymentMethods = [
    'Credit Card',
    'Debit Card',
    'PayPal',
    'Bank Transfer',
    'Cash on Delivery',
    'Mobile Payment (Apple Pay, Google Pay)',
    'Cryptocurrency',
    'Gift Cards or Vouchers',
  ];

  // Columns for the table
  const columns = [
    {
      title: 'Bill Name',
      dataIndex: 'name',
      key: 'name',
      responsive: ['md' as Breakpoint],
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      responsive: ['sm' as Breakpoint],
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
      render: (status: string) => (
        <Tag color={status === 'Paid' ? 'green' : 'volcano'}>{status}</Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        record.status !== 'Paid' ? (
          <Button type="primary" size="small" onClick={() => showModal(record)}>
            Pay Now
          </Button>
        ) : null
      ),
    },
  ];

  return (
    <Layout>
      <Sidebar collapsed={collapsed} toggle={toggle} />
      <StyledContent>
        <StyledTitle level={2}>Bills and Payments</StyledTitle>
        <ResponsiveTable
          dataSource={billsData}
          columns={columns}
          pagination={{
            responsive: true,
            position: ['bottomCenter'],
            size: 'small',
          }}
          scroll={{ x: 'max-content' }}
          rowKey="key"
        />
        <StyledModal
          title="Pay Bill"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={window.innerWidth < 576 ? '95%' : 520}
        >
          {currentBill && (
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <p>Bill Name: {currentBill.name}</p>
                <p>Amount: {currentBill.amount}</p>
              </Col>
              <Col span={24}>
                <p>Select Payment Method:</p>
                <Radio.Group 
                  onChange={handlePaymentMethodChange} 
                  value={paymentMethod}
                  style={{ width: '100%' }}
                >
                  {paymentMethods.map((method, index) => (
                    <Radio key={index} value={method} style={{ display: 'block', marginBottom: 8 }}>
                      {method}
                    </Radio>
                  ))}
                </Radio.Group>
              </Col>
            </Row>
          )}
        </StyledModal>
      </StyledContent>
    </Layout>
  );
};

export default BillsAndPayments;
