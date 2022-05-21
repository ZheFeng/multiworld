import React, { FC } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Parse from "parse";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import { RootState } from "./store";

type AuthWrapperProps = { children?: JSX.Element, needAuth: boolean };


const AuthWrapper: FC<AuthWrapperProps> = ({ children, needAuth}) => {
    const authed = useSelector((state: RootState) => state.user.authed)
    const location = useLocation();
  
    if (!needAuth && authed) {
      return <Navigate to="/" replace />;
    }

    if (needAuth && !authed) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
}

const AppRoutes: FC = () => (
    <Routes>
      <Route path="/*" element={<AuthWrapper needAuth={true}><Home /></AuthWrapper>} />
      <Route path="/profile/*" element={<AuthWrapper needAuth={true}><Profile /></AuthWrapper>} />
      <Route path="login" element={<AuthWrapper needAuth={false}><Login /></AuthWrapper>} />
      <Route path="signup" element={<AuthWrapper needAuth={false}><SignUp /></AuthWrapper>} />
    </Routes>
  )


export default AppRoutes;