import { GiftOutlined, MessageOutlined, SettingOutlined } from "@ant-design/icons";
import { MenuProps } from "antd"


export const items: MenuProps['items'] = [
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

