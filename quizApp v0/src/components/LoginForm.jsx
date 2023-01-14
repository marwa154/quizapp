import React, { useState } from "react";
import styled from "styled-components";
import Input from "../commons/Input";
import CheckboxComponent from "../commons/Checkbox";
import ButtonComponent from "../commons/ButtonAuth";

const Form = styled.form`
  position: absolute;
  width: 783px;
  height: 650px;
  left: 844px;
  top: 329px;
`;

const ButtonGoogle = styled.button`
  position: absolute;
  width: 426px;
  height: 64px;
  top: 500px;

  border: none;
  background: #ffffff;
  box-shadow: 0px 15px 40px 5px #ededed;
  border-radius: 30px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  align-items: center;
  text-align: center;
`;

const HrOr = styled.hr`
  position: absolute;
  width: 350px;
  height: 0px;
  left: 15px;
  top: 500px;
  margin: -25px 0px;
  border: 0.5px solid #f5f5f5;
`;
const Logo = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 43px;
  top: 21px;
`;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form>
      <Input
        label={"Email address*"}
        placeholder={"Enter email address"}
        type={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        label={"Enter password*"}
        placeholder={"Password"}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <CheckboxComponent />
      <ButtonComponent title={"Login"} />
      <HrOr />
      <ButtonGoogle>
        <Logo src="https://img.icons8.com/color/512/google-logo.png"></Logo>
        Login with Google
      </ButtonGoogle>
    </Form>
  );
};

export default LoginForm;
