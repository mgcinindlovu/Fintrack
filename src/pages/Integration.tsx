import React, { useState } from 'react';
import { Layout, Typography, List, Button, Divider } from 'antd';
import Sidebar from '../Sidebar'; // Adjust the path as needed

const { Content } = Layout;
const { Title } = Typography;

const Integration = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} toggle={toggle} />
      <Layout className="site-layout">
        <Content style={{ padding: '24px', minHeight: 280 }}>
          <Title level={2}>Integration Guide</Title>

          <section>
            <Title level={3}>Available Integrations</Title>
            <List
              bordered
              dataSource={[
                {
                  name: 'Payment Gateways',
                  description: 'Integrate with popular payment gateways like Stripe, PayPal, etc.',
                },
                {
                  name: 'CRM Systems',
                  description: 'Connect to CRM systems like Salesforce, HubSpot for syncing data.',
                },
                {
                  name: 'Email Marketing',
                  description: 'Integrate with email platforms such as Mailchimp, SendGrid, etc.',
                },
              ]}
              renderItem={item => (
                <List.Item>
                  <strong>{item.name}</strong>
                  <p>{item.description}</p>
                  <Button type="link">Learn More</Button>
                </List.Item>
              )}
            />

            <Divider />

            <Title level={3}>API Documentation</Title>
            <p>Access our API documentation to integrate with third-party services and extend your workflows.</p>
            <Button type="primary">Go to API Docs</Button>

            <Divider />

            <Title level={3}>Getting Started</Title>
            <p>Follow our step-by-step guide to set up your integrations easily.</p>
            <Button type="primary">Start Now</Button>

            <Divider />

            <Title level={3}>Testing & Debugging</Title>
            <p>Test your integrations in a sandbox environment and troubleshoot issues with our debugging tools.</p>
            <Button type="primary">Go to Sandbox</Button>

            <Divider />

            <Title level={3}>Need Help?</Title>
            <p>If you're facing any issues or have questions, please reach out to our support team.</p>
            <Button type="primary">Contact Support</Button>
          </section>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Integration;