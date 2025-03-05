import React, { useState } from 'react';
import { Layout, Typography, Button, List, Divider } from 'antd';
import Sidebar from '../Sidebar'; // Assuming you already have a Sidebar component

const { Content } = Layout;
const { Title } = Typography;

const Help = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sidebar collapsed={collapsed} toggle={toggle} />
      <Content style={{ padding: '24px', minHeight: 280 }}>
        <Title level={2}>Help & Support</Title>

        <section>
          <Title level={3}>Frequently Asked Questions</Title>
          <List
            bordered
            dataSource={[
              {
                question: "How do I add a new transaction?",
                answer: "To add a new transaction, click on the 'Add Transaction' button on your Dashboard. Then, fill out the necessary details like the amount, date, category, and description.",
              },
              {
                question: "How can I set financial goals?",
                answer: "Go to the 'My Goals' section from the sidebar. You can set new financial goals by clicking the 'Add Goal' button and inputting your target amount and date.",
              },
              {
                question: "How can I view my investments?",
                answer: "You can view your investments by going to the 'Investments' page from the sidebar. Here, you can see all your active and completed investments.",
              },
            ]}
            renderItem={item => (
              <List.Item>
                <strong>{item.question}</strong>
                <p>{item.answer}</p>
              </List.Item>
            )}
          />

          <Divider />

          <Title level={3}>Need More Help?</Title>
          <p>If you couldn't find an answer to your question, you can reach out to our support team via email or by using the contact form below.</p>
          <Button type="primary" size="large">Contact Support</Button>
        </section>
      </Content>
    </Layout>
  );
};

export default Help;