import React, { useState } from 'react';
import { Layout, Typography, Table, Button, Tag, Modal, Input, Radio } from 'antd';
import Sidebar from '../Sidebar'; // Adjust the path as needed

const { Content } = Layout;
const { Title } = Typography;

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
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
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
      <Content style={{ padding: '24px', minHeight: 280 }}>
        <Title level={2}>Bills and Payments</Title>
        <Table
          dataSource={billsData}
          columns={columns}
          pagination={false}
          rowKey="key"
        />
        <Modal
          title="Pay Bill"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {currentBill && (
            <>
              <p>Bill Name: {currentBill.name}</p>
              <p>Amount: {currentBill.amount}</p>
              <p>Select Payment Method:</p>
              <Radio.Group onChange={handlePaymentMethodChange} value={paymentMethod}>
                {paymentMethods.map((method, index) => (
                  <Radio key={index} value={method}>
                    {method}
                  </Radio>
                ))}
              </Radio.Group>
            </>
          )}
        </Modal>
      </Content>
    </Layout>
  );
};

export default BillsAndPayments;
