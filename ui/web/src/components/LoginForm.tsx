import React, { FC, Fragment } from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

type LoginFormProps = {
    onFinish: (values: { email: string, password: string}) => void;
}
const Login: FC<LoginFormProps> = ({ onFinish }) => {
  return (
    <Fragment>
        <Title>Login</Title>
        <Form onFinish={onFinish}>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    </Fragment>
  );
};

export default Login;