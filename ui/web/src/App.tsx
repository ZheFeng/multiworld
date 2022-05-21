import React, { FC } from 'react';
import { BrowserRouter } from "react-router-dom";
import Parse from "parse";

import AppRoutes from './AppRoutes';



const initailize = () => {
  Parse.initialize("multiworld-app-id");
  Parse.serverURL = 'http://localhost:4040/parse';
  Parse.User.enableUnsafeCurrentUser();
}



const App: FC = () => {
  initailize();
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;