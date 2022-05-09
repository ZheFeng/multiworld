import React, { Component, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { Button, Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import './index.css';

const { Header, Footer, Sider, Content } = Layout;

function Profile() {
  return (
    <Fragment>
      <Header>Profile Header</Header>
      <Content>Profile</Content>
    </Fragment>
  );
}
function Home() {
  return (
    <Fragment>
      <Header>Home Header</Header>
      <Content>Home</Content>
    </Fragment>
  );
}

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
const items: MenuProps['items'] = [
  getItem(<Link to="/">Home</Link>, 'home'),
  getItem(<Link to="/profile">Profile</Link>, 'profile'),
];

class App extends Component {
  render() {
    return (
      <Layout>
        <Sider>
          <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['home']}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </Layout>
      </Layout>
    );
  }
}

// ========================================

function start(rootId: string) {
  const rootDom = document.getElementById(rootId);
  const root = createRoot(rootDom);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

(window as any).start = start;
