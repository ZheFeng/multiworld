import React, { FC } from 'react';
import { Layout, Row, Col } from 'antd';

const { Header, Footer, Content } = Layout;

type PublicLayoutProps = { children?: JSX.Element };

const background = { background: "white" };

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => (
    <Layout>
        <Header>Header</Header>
        <Content style={{ padding: 50, minHeight: 360, ...background}}>
            <Row>
                <Col span={8} offset={8}>{ children }</Col>
            </Row>
        </Content>
        <Footer style={{ textAlign: 'center', ...background }}>Multi World ©2022 Created by Zhe Feng</Footer>
    </Layout>
);

export default PublicLayout;