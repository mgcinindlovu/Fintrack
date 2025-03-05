import React, { useState } from 'react';
import { Layout, Typography, Table, Button, Tag, Modal, Input } from 'antd';
import Sidebar from '../Sidebar'; // Adjust the path as needed

const { Content } = Layout;
const { Title } = Typography;

const BillsAndPayments = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // For modal visibility
  const [currentBill, setCurrentBill] = useState<any>(null); // Store the current bill for payment

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const showModal = (bill: any) => {
    setCurrentBill(bill);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // Handle payment logic here
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
        <Button type="primary" size="small" onClick={() => showModal(record)}>
          Pay Now
        </Button>
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
              <Input placeholder="Enter payment method" />
            </>
          )}
        </Modal>
      </Content>
    </Layout>
  );
};

export default BillsAndPayments;