import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SearchOutlined,
  GithubFilled,
  GiftOutlined,
  MessageOutlined,
  SettingOutlined,
  BellOutlined,
  DashboardOutlined,
  LoginOutlined,
  ProfileOutlined,
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  ChromeOutlined,
  QuestionOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Input, Layout, Menu, MenuProps, Space, theme, } from 'antd';

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, },
  } = theme.useToken();

  // notification items
  const items: MenuProps['items'] = [
    {
      label: <h4>Notification</h4>,
      key: '0',
    },
    {
      icon: <GiftOutlined style={{ fontSize: '16px', color: 'rgb(82, 196, 26)', borderRadius: '50%', padding: '7px', backgroundColor: 'rgb(246, 255, 237)' }} />,
      label: <a >It's Cristina danny's birthday today. 3:00 AM<br /> 2 min ago</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      icon: <MessageOutlined style={{ fontSize: '16px', color: 'rgb(22, 119, 255)', borderRadius: '50%', padding: '7px', backgroundColor: 'rgb(230, 244, 255' }} />,
      label: <a>Aida Burg commented your post. 6:00 PM<br /> 5 August</a>,
      key: '2',
    },
    {
      type: 'divider',
    },
    {
      icon: <SettingOutlined style={{ fontSize: '16px', color: 'rgb(255, 77, 79)', borderRadius: '50%', padding: '7px', backgroundColor: 'rgb(255, 241, 240)' }} />,
      label: <a >Your profile is complete 60%. 2:45 PM<br /> 7 hours ago</a>,
      key: '3',
    },
    {
      type: 'divider',
    },
    {
      icon: <span style={{ fontSize: '16px', color: 'rgb(22, 119, 255)', borderRadius: '50%', padding: '7px', backgroundColor: 'rgb(230, 244, 255', }}>C</span>,
      label: <a >Christina Danny invited to join Meeting. 9:10 PM<br /> Daily scrum meeting time</a>,
      key: '4',
    },
    {
      label: <h4 style={{ color: 'rgb(22, 119, 255', textAlign: 'center' }}>View All</h4>,
      key: '5',
    },
  ];

  return (
    <Layout >
      {/* side bar  */}
      <Sider trigger={null} collapsible width={260} collapsedWidth={0} collapsed={collapsed} theme='light' style={{
        position: 'sticky', // Makes it sticky
        height: '100vh',  // Full viewport height
        left: 0,          // Align it to the left
        top: 0,           // Align it to the top
        // zIndex: 1000,     // Ensure it's on top of other content if necessary
      }} >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}

          items={[
            {
              label: 'Navigation',
              type: 'group',
            },
            {
              key: '1',
              icon: <a href='/dashboard'><DashboardOutlined /></a>,
              label: 'Dashboard',
            },
            {
              label: 'Authentication',
              type: 'group',
            },
            {
              key: '2',
              icon: <a href='/login'><LoginOutlined /></a>,
              label: 'Login',
            },
            {
              key: '3',
              icon: <a href='/'><ProfileOutlined /></a>,
              label: 'Register',
            },
            {
              label: 'Utilities',
              type: 'group',
            },
            {
              key: '4',
              icon: <FontSizeOutlined />,
              label: 'Typography',
            },
            {
              key: '5',
              icon: <BgColorsOutlined />,
              label: 'Color',
            },
            {
              key: '6',
              icon: <BarcodeOutlined />,
              label: 'Shadow',
            },
            {
              label: 'Support',
              type: 'group',
            },
            {
              key: '7',
              icon: <ChromeOutlined />,
              label: 'Sample Page',
            },
            {
              key: '8',
              icon: <QuestionOutlined />,
              label: 'Documentation',
            },
          ]}
        />
      </Sider>
      <Layout>

        {/* top navbar */}
        <Header style={{ padding: 0, background: colorBgContainer, position: 'sticky', top: 0, borderBottom: '1px solid rgb(240, 240, 240)' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 36,
              height: 36,
              marginLeft: '10px',
              marginRight: '10px',
              backgroundColor: 'rgb(240, 240, 240)',
            }}
          />

          {/* search bar */}
          <Space.Compact size="large" style={{ width: '22%' }}>
            <Input addonBefore={<SearchOutlined />} placeholder="Ctrl + K" />
          </Space.Compact>

          {/* github-notification-user */}
          <span style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px', marginTop: '-70px' }}>
            <a href='https://github.com/codedthemes/mantis-free-react-admin-template' target='_blank'>
              <Space>
                <GithubFilled style={{ color: 'black', fontSize: '17px', padding: '9px', backgroundColor: 'rgb(245, 245, 245)', borderRadius: '5px', marginRight: '6px' }} />
              </Space>
            </a>
            <Dropdown menu={{ items }} trigger={['click']} placement='bottomRight'>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <BellOutlined style={{ color: 'black', fontSize: '17px', padding: '9px', backgroundColor: 'rgb(245, 245, 245)', borderRadius: '5px', marginRight: '8px' }} />
                </Space>
              </a>
            </Dropdown>
            <Button >
              <Avatar size="small" icon={<UserOutlined />} />
              User
            </Button>
          </span>
        </Header>

        {/* main content */}
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            backgroundColor: 'rgb(250, 250, 251)',
          }}
        >
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
          <h3>content</h3><br />
        </Content>
      </Layout>
    </Layout >
  );
};

export default Dashboard;