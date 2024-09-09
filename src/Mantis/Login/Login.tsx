
import React, { useState } from 'react';
import { Button, Checkbox, Flex, Form, Input, notification } from 'antd';
import logo from '../assets/logo.jpg';
import { useLazyLoginUserQuery } from '../Slice/api';
import { Link, useNavigate } from 'react-router-dom';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 15 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 22 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const Login: React.FC = () => {

  const navigate = useNavigate();

  const [form] = Form.useForm();
  const [loginUser] = useLazyLoginUserQuery();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: { email: string; password: string }) => {

    try {
      setLoading(true)
      const response = await loginUser({
        email: values.email,
        password: values.password,
      }).unwrap();

      // console.log(response[0].firstname);
      

      if (response && response.length >0) {
        notification.success({
          message: 'Login Successful',
          description: 'Welcome back!',
        });
        setLoading(false);
        navigate('/dashboard');
      } else {
        notification.error({
          message: 'Login Failed',
          description: 'Invalid email or password',
        });
        setLoading(false)
      }
    } catch (error) {
      notification.error({
        message: 'Login Failed',
        description: 'An error occurred while logging in.',
      });
      setLoading(false)
    } 
  };

  return (
    <div className='main-div'>
      <div className="mantis-container">
    <div className="logo">
        
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="#0066FF">
            <path d="M480 776 240 536l240-240 240 240-240 240Zm0 280L0 576l480-480 480 480-480 480Z"/>
        </svg>
    </div>
    <h1 className="mantis-name">Mantis</h1>
    <span className="version-badge">v1.3.0</span>
</div>

      <div className='form-main'>
      <div style={{ display: 'flex',marginTop:'30px',marginBottom:'30px' }}>
                     <div style={{ marginLeft: '28px', fontFamily: '"Public Sans", sans-serif' }}>
                         <h2>Login</h2>
                     </div>
                     <div style={{ margin: 'auto', marginRight: '32px', }}>
                         <Link style={{color:'blue',textDecoration:'none'}} to="/">Don't have an account?</Link>
                     </div>
                 </div>
        <Form
          {...formItemLayout}
          form={form}
          className='form'
          name="login"
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please input a valid email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
                         <Flex justify="space-between" align="center">
                             <Form.Item name="remember" valuePropName="checked" noStyle>
                                 <Checkbox>Keep me sign in</Checkbox>
                             </Form.Item >
                             <a href="" style={{color:'black'}}>Forgot password?</a>
                         </Flex>
                     </Form.Item>

          <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" loading={loading} block style={{ marginLeft: '-145px', width: '135%' }}>
            Login
          </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
