import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
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
  MenuOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

const { Sider } = Layout;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 15px;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1002;
  background-color: #001529;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    color: #1890ff;
    background-color: rgba(0, 21, 41, 0.9);
  }
`;

const Logo = styled.div`
  height: 32px;
  margin: 16px;
  color: #008cff;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  padding: 0 24px;

  @media (max-width: 768px) {
    margin: 16px 0;
    padding: 0 16px;
  }
`;

const StyledSider = styled(Sider)`
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1001;
  background-color: #001529;
  transition: all 0.3s ease-in-out;

  .ant-menu-item {
    margin: 0 !important;
    width: 100% !important;
    
    &:after {
      display: none;
    }
  }

  .ant-menu-item-selected {
    background-color: #1890ff !important;
    
    a {
      color: white !important;
    }
    
    .anticon {
      color: white !important;
    }
  }

  .ant-menu-item:hover {
    background-color: rgba(24, 144, 255, 0.1) !important;
  }

  @media (max-width: 768px) {
    left: ${props => (props.collapsed ? '-250px' : '0')};
    box-shadow: ${props => (props.collapsed ? 'none' : '2px 0 8px rgba(0,0,0,0.15)')};
  }
`;

const Overlay = styled.div<{ $visible: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${({ $visible }) => ($visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
`;

const ContentWrapper = styled.div<{ $collapsed: boolean }>`
  margin-left: ${({ $collapsed }) => ($collapsed ? '0' : '200px')};
  transition: margin-left 0.3s ease-in-out;
  padding: 24px;
  min-height: 100vh;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

interface SidebarProps {
  collapsed: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggle }) => {
  const location = useLocation();

  // Get the current route path without the leading slash
  const currentPath = location.pathname.slice(1) || '';

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      toggle();
    }
  };

  const menuItems = [
    { key: '', path: '/', icon: <DashboardOutlined />, label: 'Dashboard' },
    { key: 'transactions', path: '/transactions', icon: <UserOutlined />, label: 'Transactions' },
    { key: 'goals', path: '/goals', icon: <VideoCameraOutlined />, label: 'My Goals' },
    { key: 'investments', path: '/investments', icon: <DollarOutlined />, label: 'Investments' },
    { key: 'billsandpayments', path: '/BillsAndPayments', icon: <CreditCardOutlined />, label: 'Bills and Payments' },
    { key: 'analyticsandreport', path: '/AnalyticsAndReport', icon: <BarChartOutlined />, label: 'Analytics and Report' },
    { key: 'help', path: '/Help', icon: <QuestionCircleOutlined />, label: 'Help' },
    { key: 'integration', path: '/Integration', icon: <AppstoreOutlined />, label: 'Integration' },
    { key: 'settings', path: '/Settings', icon: <SettingOutlined />, label: 'Settings' },
  ];

  return (
    <>
      <MobileMenuButton onClick={toggle}>
        <MenuOutlined />
      </MobileMenuButton>
      <Overlay $visible={!collapsed} onClick={toggle} />
      <StyledSider 
        width={250}
        collapsed={collapsed}
      >
        <Logo>
          FinTrack
        </Logo>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[currentPath.toLowerCase()]}
        >
          {menuItems.map(item => (
            <Menu.Item 
              key={item.key} 
              icon={item.icon}
            >
              <Link to={item.path} onClick={handleLinkClick}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </StyledSider>
      <ContentWrapper $collapsed={collapsed}>
        {/* Add your content here */}
      </ContentWrapper>
    </>
  );
};

export default Sidebar;
