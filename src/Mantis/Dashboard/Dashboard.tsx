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
import { Avatar, Button, Col, Divider, Dropdown, Flex, Input, Layout, Menu, MenuProps, Row, Space, theme, } from 'antd';
import Unique_visitors_chart from '../charts/Unique_visitor_chart';
import Income_overview_chart from '../charts/Income_overview_chart';
import { Table } from "antd";
import {dataSource} from '../Data_json/table.json'
import Analytics_report_chart from '../charts/Analytics_report_chart';


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


  // table
  const columns = [
    {
      title: 'TRACKING NO.',
      dataIndex: 'track',
      key: 'track',
    },
    {
      title: 'PRODUCT NAME',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'TOTAL ORDER',
      dataIndex: 'order',
      key: 'order',
    },
    {
        title: 'STATUS',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'TOTAL AMOUNT',
        dataIndex: 'amount',
        key: 'amount',
    },
  ];

  return (
    <Layout >
      {/* side bar  */}
      <Sider trigger={null} collapsible width={260} collapsedWidth={0} collapsed={collapsed} theme='light' style={{
        position: 'sticky',
        height: '100vh',
        left: 0,
        top: 0,

      }} >

        <div className="mantis-container-dash">
          <div className="logo-dash">
            <svg className='logo-svg-dash' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="#0066FF">
              <path d="M480 776 240 536l240-240 240 240-240 240Zm0 280L0 576l480-480 480 480-480 480Z" />
            </svg>
          </div>
          <h1 className="mantis-name-dash">Mantis</h1>
          <span className="version-badge-dash">v1.3.0</span>
        </div>

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
        <Header style={{ padding: 0, background: colorBgContainer, position: 'sticky', top: 0, borderBottom: '1px solid rgb(240, 240, 240)',zIndex:'10' }}>



          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 38,
              height: 38,
              marginLeft: '10px',
              marginRight: '10px',
              backgroundColor: 'rgb(245, 245, 245)',
            }}
          />

          {/* search bar */}
          <Space.Compact size="large" style={{ width: '22%' }}>
            <Input addonBefore={<SearchOutlined
            />} placeholder="Ctrl + K" />
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
          <h3>Dashboard</h3>
          <Row justify="space-between">
            <Col span={5} className="four-box">
              <p>Total Page Views</p>
              <h2>4,42,236</h2><span>59.3%</span>
              <p>You made an extra <a>35,000</a> this year</p>
            </Col>
            <Col span={5} className="four-box">
            <p>Total Users</p>
              <h2>78,250</h2><span>70.5%</span>
              <p>You made an extra <a>8,900</a> this year</p>
            </Col>
            <Col span={5} className="four-box">
              <p>Total Order</p>
              <h2>18,800</h2><span>27.4%</span>
              <p>You made an extra <a>1,943</a> this year</p>
            </Col>
            <Col span={5} className="four-box">
              <p>Total Sales</p>
              <h2>$35,078</h2><span>27.4%</span>
              <p>You made an extra <a>$20,395</a> this year</p>
            </Col>
          </Row>

          <div style={{ display: 'flex', width: '100%',height:'36%' }}>
            <div style={{ width: '80%', height: '95%', marginTop: '30px' }}>
              <h3 style={{ marginBottom: '20px' }}>Unique Visitors</h3>
              <Unique_visitors_chart />
            </div>
            <div style={{ width: '45%', height: '95%', marginTop: '30px' }}>
              <h3 style={{ marginBottom: '20px',marginLeft:'20px' }}>Income Overview</h3>
              <Income_overview_chart />
            </div>
          </div>
        
        <div style={{ display: 'flex', width: '100%', height:'36%'}}>
          <div style={{ width: '80%', height: '10%', marginTop: '30px', }}>
            <h3 style={{ marginBottom: '20px',marginLeft:'20px' }}>Recent Orders</h3>
            <Table dataSource={dataSource} columns={columns} size='middle' style={{border:'1px solid black'}}/>
          </div>
          <div style={{ width: '45%', height: '75%', marginTop: '30px' }}>
            <h3 style={{ marginBottom: '20px',marginLeft:'20px' }}>Analytics Report</h3>
            <Analytics_report_chart/>
          </div>
        </div>
          
        </Content>
    

      </Layout>
    </Layout >
  );
};

export default Dashboard;