import React, { FC, Fragment } from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

type SignUpFormProps = {
    onFinish: (values: { email: string, password: string}) => void;
}
const SignUp: FC<SignUpFormProps> = ({ onFinish }) => {
  return (
    <Fragment>
        <Title>SignUp</Title>
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

export default SignUp;