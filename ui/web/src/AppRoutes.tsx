import React, { FC } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Parse from "parse";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";

function RequireUnAuth({ children }: { children?: JSX.Element }) {
    const currentUser = Parse.User.current();
  
    if (currentUser) {
      const location = useLocation();
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  
    return children;
  }

function RequireAuth({ children }: { children?: JSX.Element }) {
    const currentUser = Parse.User.current();

    if (!currentUser) {
      const location = useLocation();
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }

const AppRoutes: FC = () => (
    <Routes>
      <Route path="/*" element={<RequireAuth><Home /></RequireAuth>} />
      <Route path="/profile/*" element={<RequireAuth><Profile /></RequireAuth>} />
      <Route path="login" element={<RequireUnAuth><Login /></RequireUnAuth>} />
      <Route path="signup" element={<RequireUnAuth><SignUp /></RequireUnAuth>} />
    </Routes>
  )


export default AppRoutes;