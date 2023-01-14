import React, { useState } from "react";
import styled from "styled-components";
import Input from "../commons/Input";
import ButtonComponent from "../commons/ButtonAuth";

const Form = styled.form`
  position: absolute;
  width: 783px;
  height: 650px;
  left: 844px;
  top: 329px;
`;

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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
        label={"Your name*"}
        placeholder={"Enter your name"}
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        label={"Password*"}
        placeholder={"Password"}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ButtonComponent title={"Register"} />
    </Form>
  );
};

export default RegisterForm;
