
import React from "react"
import {  Flex } from 'antd';
import { FontSizeOutlined, GithubFilled, MediumCircleFilled } from "@ant-design/icons";


import { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: 'Home' },
  { key: '2', icon: <DesktopOutlined />, label: 'About Us' },
  { key: '3', icon: <ContainerOutlined />, label: 'Careers' },
  { key: '4', icon: <ContainerOutlined />, label: 'Contact Us' },
];


const Buttons:React.FC=()=>{
    const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
    return(
        <>
        <Flex>
        <div style={{ width: 256 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
        </div>
        </Flex>
        </>
    )
}
export default Buttons;