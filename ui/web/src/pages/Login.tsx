import React, { FC, Fragment } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Parse from "parse";

import PublicLayout from "../layouts/PublicLayout";
import LoginForm from "../components/LoginForm";

type LoginProps = {
    email: string;
    password: string;
}

const submitLogin = async ({ email, password }: LoginProps) => {
    try {
        await Parse.User.logIn(email, password);
        // Hooray! Let them use the app now.
    } catch (error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
    }
}


const Login: FC = () => {
    const navigate = useNavigate();
    return (
        <PublicLayout>
            <Fragment>
                <LoginForm onFinish={async (loginProps) => {
                    await submitLogin(loginProps);
                    navigate("/");
                }}/>
                <Link to="/signup">Don't have an account? SignUp</Link>
            </Fragment>
        </PublicLayout>
    );
}


export default Login;