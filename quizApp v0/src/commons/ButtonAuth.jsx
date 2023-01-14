import React from "react";
import styled from "styled-components";
const Button = styled.button`
  position: absolute;
  width: 426px;
  height: 64px;
  border: none;
  background: #8692a6;
  border-radius: 30px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 28px;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
const ButtonComponent = ({ title, onClick }) => {
  return <Button onClick={onClick}>{title}</Button>;
};

export default ButtonComponent;
