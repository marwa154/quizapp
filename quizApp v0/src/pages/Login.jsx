import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import RightSidePage from "../components/RightSidePage";
import LoginForm from "../components/LoginForm";

const BackIcon = styled.div`
  position: absolute;
  width: 41px;
  height: 24px;
  left: 748px;
  top: 72px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #8692a6;
`;
const Title = styled.h1`
  position: absolute;
  width: 335px;
  height: 45px;
  left: 844px;
  top: 194px;
  font-family: "Poppins";
  font-size: 30px;
`;
const Title1 = styled.p`
  position: absolute;
  width: 411px;
  height: 28px;
  left: 844px;
  top: 241px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #8692a6;
`;
const Hr = styled.hr`
  position: absolute;
  width: 427px;
  height: 0px;
  left: 843px;
  top: 300px;
  margin: 30px 0px;
  border: 0.5px solid #f5f5f5;
`;

const Login = () => {
  return (
    <div>
      <RightSidePage />
      <BackIcon>
        <FontAwesomeIcon icon={faChevronLeft} pull="left" />
        Back
      </BackIcon>
      <Title>Login to your Account</Title>
      <Title1>with your registered Email Address</Title1>
      <Hr />
      <LoginForm />
    </div>
  );
};

export default Login;
