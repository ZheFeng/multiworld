import React, { FC, Fragment } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Parse from "parse";

import PublicLayout from "../layouts/PublicLayout";
import SignUpForm from "../components/SignUpForm";
import { randomString } from "../util";

type SignUpProps = {
    email: string;
    password: string;
}

async function submitSignUp({ email, password }: SignUpProps) {
    const user = new Parse.User();
    user.set("username", `${randomString(10)}-${Date.now()}`);
    user.set("password", password);
    user.set("email", email);
    try {
        await user.signUp();
        // Hooray! Let them use the app now.
    } catch (error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
    }
}

const SignUp: FC = () => {
    const navigate = useNavigate();
    return (
        <PublicLayout>
            <Fragment>
                <SignUpForm onFinish={async (signUpProps) => {
                    await submitSignUp(signUpProps);
                    navigate("/");
                }}/>
                <Link to="/login">Already signed up? go Login</Link>
            </Fragment>
        </PublicLayout>
    );
}

export default SignUp;