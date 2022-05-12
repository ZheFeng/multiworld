import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Parse from "parse";

import './index.css';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";


function RequireAuth({ children }: { children?: JSX.Element }) {
  const currentUser = Parse.User.current();

  if (!currentUser) {
    const location = useLocation();
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
function RequireUnAuth({ children }: { children?: JSX.Element }) {
  const currentUser = Parse.User.current();

  if (currentUser) {
    const location = useLocation();
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

const appInitailize = () => {
  Parse.initialize("multiworld-app-id");
  Parse.serverURL = 'http://localhost:4040/parse';
  Parse.User.enableUnsafeCurrentUser();
}

const AppRoutes: FC = () => (
  <Routes>
    <Route path="/*" element={<RequireAuth><Home /></RequireAuth>} />
    <Route path="/profile/*" element={<RequireAuth><Profile /></RequireAuth>} />
    <Route path="login" element={<RequireUnAuth><Login /></RequireUnAuth>} />
    <Route path="signup" element={<RequireUnAuth><SignUp /></RequireUnAuth>} />
  </Routes>
)

const App: FC = () => {
  appInitailize();
  return <AppRoutes />;
}

// init ========================================

function start(rootId: string) {
  const rootDom = document.getElementById(rootId);
  const root = createRoot(rootDom);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

(window as any).start = start;
