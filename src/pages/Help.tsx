import React, { useState } from 'react';
import { Layout, Typography, Button, List, Divider } from 'antd';
import type { ListProps } from 'antd';
import Sidebar from '../Sidebar'; // Assuming you already have a Sidebar component
import styled from 'styled-components';

const { Content } = Layout;
const { Title } = Typography;

interface FAQItem {
  question: string;
  answer: string;
}

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

const StyledSubTitle = styled(Title)`
  @media (max-width: 768px) {
    font-size: 20px !important;
  }

  @media (max-width: 576px) {
    font-size: 18px !important;
  }
`;

const ListContainer = styled(List<FAQItem>)`
  .ant-list-item {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;

    @media (max-width: 576px) {
      padding: 12px;
    }

    strong {
      margin-bottom: 8px;
    }
  }
`;

const SupportSection = styled.div`
  margin-top: 24px;
  
  @media (max-width: 768px) {
    margin-top: 20px;
  }

  @media (max-width: 576px) {
    margin-top: 16px;
    
    button {
      width: 100%;
    }
  }
`;

const Help = () => {
  const [collapsed, setCollapsed] = useState(false);

  const faqData: FAQItem[] = [
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
  ];

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} toggle={toggle} />
      <ContentWrapper>
        <StyledTitle level={2}>Help & Support</StyledTitle>

        <section>
          <StyledSubTitle level={3}>Frequently Asked Questions</StyledSubTitle>
          <ListContainer
            bordered
            dataSource={faqData}
            renderItem={(item) => (
              <List.Item>
                <strong>{item.question}</strong>
                <p>{item.answer}</p>
              </List.Item>
            )}
          />

          <Divider />

          <SupportSection>
            <StyledSubTitle level={3}>Need More Help?</StyledSubTitle>
            <p>If you couldn't find an answer to your question, you can reach out to our support team via email or by using the contact form below.</p>
            <Button type="primary" size="large">Contact Support</Button>
          </SupportSection>
        </section>
      </ContentWrapper>
    </Layout>
  );
};

export default Help;