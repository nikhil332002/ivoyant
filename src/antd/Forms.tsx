import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean; // Updated type to boolean
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Forms: React.FC = () => { 
    const [form] = Form.useForm();
//   const [data, setData] = useState<FieldType>({});
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log(values);
    // setData((prevValues) => ({ ...prevValues, ...values }));
    console.log('form',form.getFieldsValue());
    console.log(form.getFieldValue('username'));
    
  };

   
  
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600,transform:'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        eye-invisible={true}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        wrapperCol={{ offset: 8, span: 16 }}
      >
      <Input type='checkbox' onChange={handleChange}/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          disabled={!checked} // Disable button if checkbox is not checked
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Forms;
