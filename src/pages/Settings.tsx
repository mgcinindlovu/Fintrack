import React, { useState } from 'react';
import { Layout, Typography, Input, Button, Switch, Divider, Upload, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import Sidebar from '../Sidebar';
import { UploadChangeParam } from 'antd/lib/upload';
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

const SettingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    .ant-input {
      width: 100%;
    }
  }
`;

const SettingLabel = styled.span`
  margin-right: 16px;

  @media (max-width: 576px) {
    margin-right: 0;
    margin-bottom: 4px;
  }
`;

const StyledInput = styled(Input)`
  width: 300px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const Settings = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  
  const handleProfilePictureChange = (info: UploadChangeParam) => {
    if (info.file.status === 'done') {
      message.success('Profile picture updated successfully');
      setProfilePicture(info.file.response.url);
    } else if (info.file.status === 'error') {
      message.error('Failed to upload profile picture');
    }
  };

  return (
    <Layout>
      <Sidebar collapsed={collapsed} toggle={() => setCollapsed(!collapsed)} />
      <ContentWrapper>
        <StyledTitle level={2}>Settings</StyledTitle>
        
        <Section>
          <StyledTitle level={3}>Profile Settings</StyledTitle>
          <div style={{ marginBottom: '16px' }}>
            <Upload
              name="profilePicture"
              action="/upload"
              showUploadList={false}
              onChange={handleProfilePictureChange}
            >
              <Button icon={<UserOutlined />} block={window.innerWidth <= 576}>
                Change Profile Picture
              </Button>
            </Upload>
          </div>

          <StyledInput
            style={{ marginBottom: '12px' }}
            prefix={<UserOutlined />}
            placeholder="Full Name"
            defaultValue="John Doe"
          />
          <StyledInput
            style={{ marginBottom: '12px' }}
            prefix={<MailOutlined />}
            placeholder="Email"
            defaultValue="johndoe@example.com"
          />
          <StyledInput
            style={{ marginBottom: '20px' }}
            prefix={<LockOutlined />}
            placeholder="Password"
            type="password"
          />
        </Section>

        <Divider />

        <Section>
          <StyledTitle level={3}>Notification Preferences</StyledTitle>
          <SettingRow>
            <SettingLabel>Email Notifications</SettingLabel>
            <Switch defaultChecked />
          </SettingRow>
          <SettingRow>
            <SettingLabel>Push Notifications</SettingLabel>
            <Switch defaultChecked />
          </SettingRow>
          <SettingRow>
            <SettingLabel>SMS Alerts</SettingLabel>
            <Switch />
          </SettingRow>
        </Section>

        <Divider />

        <Section>
          <StyledTitle level={3}>Security Settings</StyledTitle>
          <SettingRow>
            <SettingLabel>Enable Two-Factor Authentication</SettingLabel>
            <Switch />
          </SettingRow>
          <Button type="primary" block={window.innerWidth <= 576}>Save Changes</Button>
        </Section>

        <Divider />

        <Section>
          <StyledTitle level={3}>Privacy Settings</StyledTitle>
          <SettingRow>
            <SettingLabel>Allow Data Sharing</SettingLabel>
            <Switch />
          </SettingRow>
          <SettingRow>
            <SettingLabel>Profile Visibility</SettingLabel>
            <Switch defaultChecked />
          </SettingRow>
        </Section>

        <Divider />

        <Section>
          <StyledTitle level={3}>Language and Region</StyledTitle>
          <SettingRow>
            <SettingLabel>Language</SettingLabel>
            <StyledInput defaultValue="English" />
          </SettingRow>
          <SettingRow>
            <SettingLabel>Time Zone</SettingLabel>
            <StyledInput defaultValue="GMT+1" />
          </SettingRow>
          <SettingRow>
            <SettingLabel>Currency</SettingLabel>
            <StyledInput defaultValue="USD" />
          </SettingRow>
        </Section>
      </ContentWrapper>
    </Layout>
  );
};

export default Settings;