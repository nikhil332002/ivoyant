
import React, { useState } from 'react';
import { Button, Checkbox, Flex, Form, Input, notification } from 'antd';
import { useLazyLoginUserQuery } from '../Slice/api';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Login.css'
import Logo from '../Dashboard/Logo';

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
      <Logo/>

      <div className='form-main'>
      <div className='login-inner-div' >
          <div className='login-name' >
              <h2>Login</h2>
          </div>
          <div className='login-account' >
              <Link className='login-account-name'  to="/">Don't have an account?</Link>
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
          <Button className='login-button' type="primary" htmlType="submit" loading={loading} block >
            Login
          </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
