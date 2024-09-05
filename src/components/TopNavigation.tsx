import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'one',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Home
      </a>
    ),
  },
  {
    key: 'two',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        About Us
      </a>
    ),
  },
  {
    key: 'three',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Careers
      </a>
    ),
  },
  {
    key: 'four',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Contact Us
      </a>
    ),
  },
];

const TopNavigation: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default TopNavigation;