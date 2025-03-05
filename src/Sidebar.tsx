import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
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

const StyledSider = styled(Sider)`
  @media (max-width: 768px) {
    position: fixed;
    z-index: 1000;
    height: 100vh;
    left: ${({ collapsed }) => (collapsed ? '-200px' : '0')};
    transition: left 0.3s ease-in-out;
  }
`;

// Define the prop types
interface SidebarProps {
  collapsed: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggle }) => (
  <StyledSider trigger={null} collapsible collapsed={collapsed}>
    <Logo>FinTrack</Logo>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
);

export default Sidebar;
