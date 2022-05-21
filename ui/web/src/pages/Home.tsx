import React, { FC } from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from "react-router-dom";
import Parse from "parse";


import { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/slices/counterSlice'

import MainLayout from "../layouts/MainLayout";
import { logout } from '../store/slices/userSlice';

const { Title, Paragraph } = Typography;

const submitLogout = async () => {
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

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <MainLayout>
        <div>
            <Title>Multi World: Home</Title>
            <Paragraph>{currentUser.getEmail()}</Paragraph>
            <Button type="primary" onClick={async () => {
                await submitLogout();
                dispatch(logout())
                navigate("/login");
            }}>Logout</Button>

          <div>
            <Title>{count}</Title> 
            <Button type="primary"
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </Button>
            <Button type="primary"
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </Button>
          </div>
        </div>
    </MainLayout>
  );
}

export default Home;