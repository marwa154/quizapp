import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
  position: absolute;
  width: 212px;
  height: 64px;
  left: 880px;
  bottom: 20px;
  border: none;
  margin-bottom: 20px;
  background: #8692a6;
  border-radius: 30px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 28px;
  color: #ffffff;
`;
const Button = ({name,onClick}) => {
  return (
    <div>
      <ButtonComponent onClick={onClick} >{name}</ButtonComponent>
    </div>
  )
}

export default Button
