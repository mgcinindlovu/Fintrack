import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom'; // Using useLocation hook to track the current route
import {
  DashboardOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DollarOutlined,
  BarChartOutlined,
  CreditCardOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

const { Sider } = Layout;

const Logo = styled.div`
  height: 32px;
  margin: 16px 50px 100px 50px;
  color: #008cff;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    margin: 16px 20px;
    font-size: 1.2em;
  }
`;

const StyledSider = styled(Sider)<{ collapsed: boolean }>`
  position: fixed;
  z-index: 1000;
  height: 100vh;
  left: ${({ collapsed }) => (collapsed ? '-200px' : '0')};
  transition: left 0.3s ease-in-out;
  width: 300px; /* Ensure fixed width */
  
  @media (max-width: 768px) {
    width: ${({ collapsed }) => (collapsed ? '80px' : '200px')}; /* Adjust width on collapse */
  }
`;

const ContentWrapper = styled.div<{ collapsed: boolean }>`
  margin-left: ${({ collapsed }) => (collapsed ? '80px' : '200px')}; /* Adjust the left margin */
  transition: margin-left 0.3s ease-in-out;
  padding: 24px;
  min-height: 100vh;
`;

interface SidebarProps {
  collapsed: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggle }) => {
  const location = useLocation(); // Track current route

  // Get the current route's first part for selected key
  const selectedKey = location.pathname.split('/')[1] || '1';

  return (
    <>
      <StyledSider trigger={null} collapsible collapsed={collapsed}>
        <Logo>FinTrack</Logo>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]} // Set the active link based on current route
        >
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/transactions">Transactions</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<VideoCameraOutlined />}>
            <Link to="/goals">My Goals</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<DollarOutlined />}>
            <Link to="/investments">Investments</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<CreditCardOutlined />}>
            <Link to="/BillsAndPayments">Bills and Payments</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<BarChartOutlined />}>
            <Link to="/AnalyticsAndReport">Analytics and Report</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<QuestionCircleOutlined />}>
            <Link to="/Help">Help</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<AppstoreOutlined />}>
            <Link to="/Integration">Integration</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<SettingOutlined />}>
            <Link to="/Settings">Settings</Link>
          </Menu.Item>
        </Menu>
      </StyledSider>
      <ContentWrapper collapsed={collapsed}>
        {/* Add your content here */}
      </ContentWrapper>
    </>
  );
};

export default Sidebar;
