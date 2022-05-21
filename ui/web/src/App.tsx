import React, { FC } from 'react';
import { BrowserRouter } from "react-router-dom";
import Parse from "parse";
import { Provider, useDispatch } from 'react-redux'

import AppRoutes from './AppRoutes';
import { store } from './store'
import { login } from './store/slices/userSlice';

const initailize = () => {
  Parse.initialize("multiworld-app-id");
  Parse.serverURL = 'http://localhost:4040/parse';
  Parse.User.enableUnsafeCurrentUser();
}

const App: FC = () => {
  initailize();
  const dispatch = useDispatch();

  const currentUser = Parse.User.current();
  if (currentUser) {
    dispatch(login())
  }

  return (
    <AppRoutes />
  );
}

export default App;