import React, { FC, Fragment } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { Link, useResolvedPath, useMatch } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;


type MainLayoutProps = { children?: JSX.Element };
type NavData = { to: string, key: string, label: string };
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
  getItem(<Link to="/">Home</Link>, 'home', false),
  getItem(<Link to="/profile">Profile</Link>, 'profile', false),
];

const background = { background: "white" };

const items: NavData[] = [
    { to: "/", key: "home", label: "Home" },
    { to: "/profile", key: "profile", label: "Profile" },
]

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    
    const selectedKeys = []
    
    items.forEach(item => {
        const resolved = useResolvedPath(item.to);
        const match = useMatch({ path: resolved.pathname, end: true });
        if (match) {
            selectedKeys.push(item.key);
        }
    });

    const navLinks: MenuProps['items'] = items.map(item => getItem(<Link to={item.to}>{item.label}</Link>, item.key, item.isActive));
    
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider theme='light'>
            <Menu
                style={{height: '100%'}}
                defaultSelectedKeys={['home']}
                mode="inline"
                items={navLinks}
                selectedKeys={selectedKeys}
            />
            </Sider>
            <Layout style={background}>
            <Header style={{ ...background, padding: 0 }}>
                <Menu
                mode="horizontal"
                defaultSelectedKeys={['home']}
                items={topbarItems}
                selectedKeys={selectedKeys}
                />
            </Header>
            <Content style={{ margin: '0 16px', padding: 24, minHeight: 360 }}>{ children }</Content>
            <Footer style={{ ...background, textAlign: 'center' }}>Multi World ©2022 Created by Zhe Feng</Footer>
            </Layout>
        </Layout>
    )
}




export default MainLayout;