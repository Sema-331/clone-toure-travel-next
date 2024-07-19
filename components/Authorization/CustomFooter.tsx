import Image from "next/image";
import React, { memo } from "react";
import ImageOptions from "./ImageOptions";
import facebook from "./.././../public/images/Vector.png";
import google from "./.././../public/images/flat-color-icons_google.png";
import apple from "./.././../public/images/ant-design_apple-filled.png";
import Btn from "./Btn";
import { signIn } from "next-auth/react";
import Link from "next/link";
import BtnNoFill from "../BtnNoFill/BtnNoFill";

interface IntCustomfooter {
  btn_content: string;
  intructions_create_account?: string;
  sign?: string;
  login_with?: string;
  block_options: boolean;
  checked?: boolean;
}

const CustomFooter = memo(
  ({
    btn_content,
    intructions_create_account,
    login_with,
    block_options,
    sign,
  }: IntCustomfooter) => {
    console.log("gklf");
    const loginGitHub = () => {
      signIn("github", { callbackUrl: "http://localhost:3000/FindFly" });
    };
    const loginWithGoogle = () => {
      signIn("google", { callbackUrl: "http://localhost:3000/FindFly" });
    };
    return (
      <>
        <Btn checked={true} btn_content={btn_content} />
        {intructions_create_account ? (
          <p className="login__instructions-create-account">
            {intructions_create_account}
            <Link href={sign === "Sign up" ? "/SignUp" : "/Login"}>
              <span className="login__btn-sign">{sign}</span>
            </Link>
          </p>
        ) : null}
        {login_with ? (
          <div className="login__block-options-login-with">
            <hr />
            <p className="login__login-with">{login_with}</p>
          </div>
        ) : null}
        {block_options ? (
          <div className="login__block-options-log">
            <BtnNoFill
              onclick={loginWithGoogle}
              className="login__block-facebook"
            >
              <Image src={facebook} alt="image_options-login" />
            </BtnNoFill>
            <BtnNoFill
              onclick={loginWithGoogle}
              className="login__block-google"
            >
              <Image src={google} alt="image_options-login" />
            </BtnNoFill>
            <BtnNoFill onclick={loginGitHub} className="login__block-apple">
              <Image src={apple} alt="image_options-login" />
            </BtnNoFill>
            {/* <button onClick={loginWithGoogle} className="login__block-facebook">
            <Image src={facebook} alt="image_options-login" />
          </button> */}
            {/* <button onClick={loginWithGoogle} className="login__block-google">
            <Image src={google} alt="image_options-login" />
          </button>
          <button onClick={loginGitHub} className="login__block-apple">
            <Image src={apple} alt="image_options-login" />
          </button> */}
          </div>
        ) : null}
      </>
    );
  }
);

export default CustomFooter;
