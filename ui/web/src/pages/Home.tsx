import React, { FC } from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from "react-router-dom";
import Parse from "parse";

import MainLayout from "../layouts/MainLayout";

const { Title, Paragraph } = Typography;

const logout = async () => {
  try {
      await Parse.User.logOut();
      // Hooray! Let them use the app now.
  } catch (error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
  }
}

const Home: FC = () => {
  const navigate = useNavigate();
  const currentUser = Parse.User.current();
  return (
    <MainLayout>
        <div>
            <Title>Multi World: Home</Title>
            <Paragraph>{currentUser.getEmail()}</Paragraph>
            <Button type="primary" onClick={async () => {
                await logout();
                navigate("/login");
            }}>Logout</Button>
        </div>
    </MainLayout>
  );
}

export default Home;