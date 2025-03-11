import React, { useState } from 'react';
import { Layout, Typography, List, Button, Divider } from 'antd';
import type { ListProps } from 'antd';
import Sidebar from '../Sidebar';
import styled from 'styled-components';

const { Content } = Layout;
const { Title } = Typography;

const ContentWrapper = styled(Content)`
  padding: 24px;
  min-height: 280px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 576px) {
    padding: 12px;
  }
`;

const StyledTitle = styled(Title)`
  @media (max-width: 768px) {
    font-size: 24px !important;
  }

  @media (max-width: 576px) {
    font-size: 20px !important;
  }
`;

const Section = styled.section`
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 576px) {
    margin-bottom: 16px;
  }
`;

interface IntegrationItem {
  name: string;
  description: string;
}

const StyledList = styled(List<IntegrationItem>)`
  .ant-list-item {
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      padding: 16px 12px;

      strong {
        margin-bottom: 8px;
      }

      p {
        margin-bottom: 8px;
      }

      button {
        width: 100%;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 16px;

  @media (max-width: 576px) {
    button {
      width: 100%;
      margin-bottom: 12px;
    }
  }
`;

const integrationData: IntegrationItem[] = [
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
];

const Integration = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} toggle={toggle} />
      <Layout className="site-layout">
        <ContentWrapper>
          <StyledTitle level={2}>Integration Guide</StyledTitle>

          <Section>
            <StyledTitle level={3}>Available Integrations</StyledTitle>
            <StyledList
              bordered
              dataSource={integrationData}
              renderItem={(item) => (
                <List.Item>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.description}</p>
                    <Button type="link">Learn More</Button>
                  </div>
                </List.Item>
              )}
            />

            <Divider />

            <StyledTitle level={3}>API Documentation</StyledTitle>
            <p>Access our API documentation to integrate with third-party services and extend your workflows.</p>
            <ButtonContainer>
              <Button type="primary">Go to API Docs</Button>
            </ButtonContainer>

            <Divider />

            <StyledTitle level={3}>Getting Started</StyledTitle>
            <p>Follow our step-by-step guide to set up your integrations easily.</p>
            <ButtonContainer>
              <Button type="primary">Start Now</Button>
            </ButtonContainer>

            <Divider />

            <StyledTitle level={3}>Testing & Debugging</StyledTitle>
            <p>Test your integrations in a sandbox environment and troubleshoot issues with our debugging tools.</p>
            <ButtonContainer>
              <Button type="primary">Go to Sandbox</Button>
            </ButtonContainer>

            <Divider />

            <StyledTitle level={3}>Need Help?</StyledTitle>
            <p>If you're facing any issues or have questions, please reach out to our support team.</p>
            <ButtonContainer>
              <Button type="primary">Contact Support</Button>
            </ButtonContainer>
          </Section>
        </ContentWrapper>
      </Layout>
    </Layout>
  );
};

export default Integration;