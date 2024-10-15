
import React from 'react';
import { Button, Form, Input, notification } from 'antd';
import { User, useSignupUserMutation } from '../Slice/api';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Dashboard/Logo';

// placeholder width
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
// submit button
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

const SignUp: React.FC = () => {

  const navigate = useNavigate();

  const [form] = Form.useForm();
  const [signupUser] = useSignupUserMutation();

  const onFinish = async (values: User) => {
    try {
      const signupuser = await signupUser({
        firstname: values.firstname,
        lastname: values.lastname,
        company: values.company,
        email: values.email,
        password: values.password,
      }).unwrap();

      if(signupuser){
        notification.success({
          message: 'Signup Successful',
          description: 'Your account has been created!',
        });
        navigate('/login');
        form.resetFields();
      }

    } catch (error) {
      notification.error({
        message: 'Signup Failed',
        description: 'An error occurred while creating your account.',
      });
    }
  };

  return (
    // whole page div
    <div className='main-div'>

    {/* logo div */}
      <Logo/>

      {/* form div */}
      <div className='form-main'>
        <div className='signup-inner-div' >
          <div className='signup-name' >
            <h2>Sign up</h2>
          </div>
          <div className='accont-div'>
            <Link className='account'  to="/login">Already have an account?</Link>
          </div>
        </div>
        <Form
          {...formItemLayout}
          className='form'
          form={form}
          name="register"
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <div style={{ display: 'flex' }}>
            <Form.Item
              name="firstname"
              label="First Name"
              style={{ marginRight: '18px' }}
              rules={[{ required: true, message: 'Please input your First Name!', whitespace: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="lastname"
              label="Last Name"
              rules={[{ required: true, message: 'Please input your Last Name!', whitespace: true }]}
            >
              <Input />
            </Form.Item>
          </div>

          <Form.Item
            name="company"
            label="Company"
            rules={[{ required: false, }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email Address"
            rules={[{ required: true, message: 'Please input a valid email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your password!', min: 3 }]}
          >
            <Input.Password />
          </Form.Item >

          <Form.Item >
            <p style={{ fontSize: '13px' }}>
              By Signing up, you agree to our <a href=""> Terms of Service</a> and <a href="">  Privacy Policy </a>
            </p>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" block style={{ marginLeft: '-145px', width: '135%' }}>
              Create Account
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
