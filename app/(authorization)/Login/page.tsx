import LoginPage from "@/components/Authorization/LoginPage";
import "./../../../styles/Login/login.scss";
import React from "react";

const Login = () => {
  return <LoginPage />;
};

export const revalidate = 60;

export default Login;
