import React, { FC, Fragment } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;


type MainLayoutProps = { children?: JSX.Element };

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const topbarItems: MenuProps['items'] = [
  getItem(<Link to="/">Home</Link>, 'home'),
  getItem(<Link to="/profile">Profile</Link>, 'profile'),
];


const items: MenuProps['items'] = [
  getItem(<Link to="/">Home</Link>, 'home'),
  getItem(<Link to="/profile">Profile</Link>, 'profile'),
];
const background = { background: "white" };

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider theme='light'>
      <Menu
        style={{height: '100%'}}
        defaultSelectedKeys={['home']}
        mode="inline"
        items={items}
      />
    </Sider>
    <Layout style={background}>
      <Header style={{ ...background, padding: 0 }}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={topbarItems}
        />
      </Header>
      <Content style={{ margin: '0 16px', padding: 24, minHeight: 360 }}>{ children }</Content>
      <Footer style={{ ...background, textAlign: 'center' }}>Multi World ©2022 Created by Zhe Feng</Footer>
    </Layout>
  </Layout>
)




export default MainLayout;