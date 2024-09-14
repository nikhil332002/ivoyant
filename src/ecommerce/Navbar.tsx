import React, { useState } from 'react';
import { AppstoreOutlined, HeartOutlined, MailOutlined, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Flex, Layout, Menu, Typography } from 'antd';
import Search from 'antd/es/input/Search';
import Title from 'antd/es/typography/Title';
import { Cart, Heart } from '../Icons/Icons';


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'Contact',
    key: 'contact',
  },
  {
    label: 'About',
    key: 'about',
  },
  {
    label: 'Signup',
    key: 'signup',
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState('home');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (

<Flex justify='center'>
    <Flex align='center' gap="small" style={{marginLeft:'-30rem'}}>
        <Title level={3}>Exclusive</Title>
    </Flex>
    <Flex>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </Flex>
    <Flex align='center'>
        <Search placeholder="input search text" allowClear  style={{ width: 200 }} />
    </Flex>

    <Flex >
        {/* <HeartOutlined style={{fontSize:'30px'}}/> */}
        <Heart />
    </Flex>
    <Flex>
    {/* <ShoppingCartOutlined /> */}
    <Cart />
    </Flex>
</Flex>


)
};

export default Navbar;