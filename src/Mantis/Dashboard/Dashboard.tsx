import React, { useState } from 'react';
import '../css/Dashboard.css'
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
  AntDesignOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Col, Divider, Dropdown, Flex, Input, Layout, Menu, MenuProps, Row, Space, theme, Tooltip, } from 'antd';
import Unique_visitors_chart from '../charts/Unique_visitor_chart';
import Income_overview_chart from '../charts/Income_overview_chart';
import { Table } from "antd";
import {dataSource} from '../Data_json/table.json'
import Analytics_report_chart from '../charts/Analytics_report_chart';
import Sales_report_chart from '../charts/Sales_report_chart';


const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: {colorBgContainer},
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


  // table contents
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

      {/* logo */}
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

          // side bar items
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
        <Header className='dashboard' style={{background:colorBgContainer}}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className='collapse-button'
          />

          {/* search bar */}
          <Space.Compact size="large" className='searchbar'>
            <Input addonBefore={<SearchOutlined
            />} placeholder="Ctrl + K" />
          </Space.Compact>

          {/* github-notification-user */}
          <span className='github-notification-user' >
            <a href='https://github.com/codedthemes/mantis-free-react-admin-template' target='_blank'>
              <Space>
                <GithubFilled className='github-icon' />
              </Space>
            </a>
            <Dropdown menu={{ items }} trigger={['click']} placement='bottomRight'>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <BellOutlined className='bell-icon' />
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
          {/* dashbord boxes */}
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

          {/* unique chart and income overview chart */}
          <div className='unique-income-chart' >
            <div className='unique-chart' >
              <h3 className='unique-chart-name' >Unique Visitors</h3>
              <Unique_visitors_chart />
            </div>
            <div className='income-chart' >
              <h3 className='income-chart-name' >Income Overview</h3>
              <Income_overview_chart />
            </div>
          </div>
        
        {/* tabel and Analytics_report_chart */}
        <div className='tabel-analytics-chart' >
          <div className='table-div' >
            <h3 className='recent-order' >Recent Orders</h3>
            <Table className='table-tag' dataSource={dataSource} columns={columns} size='middle' pagination={false}/>
          </div>
          <div className='analytics-chart' >
            <h3 className='analytics-name' >Analytics Report</h3>
            <Flex vertical style={{marginLeft:'20px',}}>
            <Button>company Finance Growth <span/> 123</Button>
            <Button>company Expenses Ratio <span/> 123</Button>
            <Button>Business Risk Cases <span/> 123</Button>
            </Flex>
            <Analytics_report_chart/>
          </div>
        </div>

          {/* sales report chart */}
        <div className='last-section' >
            <div className='sales-chart' >
              <h3 className='unique-visitors'>Unique Visitors</h3>
              <Sales_report_chart/>
            </div>
            <div className='transaction-div' >
              <h3 className='transaction-name' >Transaction History</h3>
              <Flex className='transaction-help-div' vertical >
                <Row style={{marginLeft:'18px',paddingTop:'14px'}}>
                  <span style={{marginRight:'10px'}}>
                    <GiftOutlined className='gift-icon'/>
                  </span>
                  <span style={{marginRight:'80px'}}>
                    <p>Order #002434</p>
                    <p>Today, 2:00 AM</p>
                  </span>
                  <span>
                    <p>+ $1,430</p>
                    <p>78%</p>
                  </span>
                </Row>
                <Divider/>
                <Row style={{marginLeft:'18px'}}>
                  <span style={{marginRight:'10px'}}>
                  <MessageOutlined className='msg-icon' />
                  </span>
                  <span style={{marginRight:'63px'}}>
                    <p>Order #984947</p>
                    <p>5 August, 1:45 PM</p>
                  </span>
                  <span>
                    <p>+ $302</p>
                    <p>8%</p>
                  </span>
                </Row>
                <Divider/>
                <Row style={{marginLeft:'18px'}}>
                  <span style={{marginRight:'10px'}}>
                  <SettingOutlined className='setting-icon' />
                  </span>
                  <span style={{marginRight:'82px',paddingBottom:'14px'}}>
                    <p>Order #988784</p>
                    <p>7 hours ago</p>
                  </span>
                  <span>
                    <p>+ $682</p>
                    <p>16%</p>
                  </span>
                </Row>
              </Flex>

              <div className='help-support' >
                <h3>Help & Support Chat</h3>
                <p>Typical replay within 5 min</p>
                <Avatar.Group style={{marginBottom:'10px'}}>
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                  <a href="https://ant.design">
                    <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                  </a>
                  <Tooltip title="Ant User" placement="top">
                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                  </Tooltip>
                  <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                </Avatar.Group>
                <Button type='primary' block>Need Help?</Button>
              </div>
            </div>
        </div>          
        </Content>
      </Layout>
    </Layout >
  );
};

export default Dashboard;