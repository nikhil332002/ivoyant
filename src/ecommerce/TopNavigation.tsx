import { Button, Dropdown, Flex, Layout, Space, Typography } from "antd";
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
    {
      label: <a >Kannada</a>,
      key: '0',
    },
    {
      label: <a >Hindi</a>,
      key: '1',
    },
  ];
const TopNavigation = () => {
    return (
        <Layout style={{ margin: 0, padding: 0, height: '48px', alignItems: 'center',backgroundColor:'black' }} >
            <Flex style={{ height: '48px',}} align="center">
                <Typography style={{color:"white"}}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</Typography>
                <Button type="link"  style={{color:'white'}}>
                    ShopNow
                </Button>
                <Dropdown menu={{ items }} trigger={['click']} >
                    <a style={{color:'white',justifyContent:'right',alignItems:'right'}}>
                        <Space>
                            English
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </Flex>


        </Layout>
    )
}
export default TopNavigation;