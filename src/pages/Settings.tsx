import React, { useState } from 'react';
import { Layout, Typography, Input, Button, Switch, Divider, Upload, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import Sidebar from '../Sidebar'; // Assuming you already have a Sidebar component
import { UploadChangeParam } from 'antd/lib/upload';

const { Content } = Layout;
const { Title } = Typography;

const Settings = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  
  // Handle profile picture upload
  const handleProfilePictureChange = (info: UploadChangeParam) => {
    if (info.file.status === 'done') {
      message.success('Profile picture updated successfully');
      setProfilePicture(info.file.response.url);  // Assuming the URL is returned from the backend
    } else if (info.file.status === 'error') {
      message.error('Failed to upload profile picture');
    }
  };

  return (
    <Layout>
      <Sidebar collapsed={collapsed} toggle={() => setCollapsed(!collapsed)} />
      <Content style={{ padding: '24px', minHeight: 280 }}>
        <Title level={2}>Settings</Title>
        
        {/* Profile Section */}
        <section>
          <Title level={3}>Profile Settings</Title>
          <div style={{ marginBottom: '10px' }}>
            <Upload
              name="profilePicture"
              action="/upload" // Your upload API endpoint
              showUploadList={false}
              onChange={handleProfilePictureChange}
            >
              <Button icon={<UserOutlined />}>Change Profile Picture</Button>
            </Upload>
          </div>

          <Input
            style={{ marginBottom: '10px' }}
            prefix={<UserOutlined />}
            placeholder="Full Name"
            defaultValue="John Doe"
          />
          <Input
            style={{ marginBottom: '10px' }}
            prefix={<MailOutlined />}
            placeholder="Email"
            defaultValue="johndoe@example.com"
          />
          <Input
            style={{ marginBottom: '20px' }}
            prefix={<LockOutlined />}
            placeholder="Password"
            type="password"
          />
        </section>

        <Divider />

        {/* Notification Preferences Section */}
        <section>
          <Title level={3}>Notification Preferences</Title>
          <div style={{ marginBottom: '10px' }}>
            <span>Email Notifications</span>
            <Switch defaultChecked />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <span>Push Notifications</span>
            <Switch defaultChecked />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <span>SMS Alerts</span>
            <Switch />
          </div>
        </section>

        <Divider />

        {/* Security Section */}
        <section>
          <Title level={3}>Security Settings</Title>
          <div style={{ marginBottom: '10px' }}>
            <span>Enable Two-Factor Authentication</span>
            <Switch />
          </div>
          <Button type="primary">Save Changes</Button>
        </section>

        <Divider />

        {/* Privacy Settings Section */}
        <section>
          <Title level={3}>Privacy Settings</Title>
          <div style={{ marginBottom: '10px' }}>
            <span>Allow Data Sharing</span>
            <Switch />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <span>Profile Visibility</span>
            <Switch defaultChecked />
          </div>
        </section>

        <Divider />

        {/* Language and Region Settings */}
        <section>
          <Title level={3}>Language and Region</Title>
          <div style={{ marginBottom: '10px' }}>
            <span>Language</span>
            <Input defaultValue="English" />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <span>Time Zone</span>
            <Input defaultValue="GMT+1" />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <span>Currency</span>
            <Input defaultValue="USD" />
          </div>
        </section>
      </Content>
    </Layout>
  );
};

export default Settings;