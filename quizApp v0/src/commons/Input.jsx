import React from "react";
import styled from "styled-components";

const Label = styled.label`
  width: 240px;
  height: 24px;
  margin: 29px 0px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #696f79;
`;

const InputStyle = styled.input`
  width: 426px;
  height: 64px;
  background: #ffffff;
  box-shadow: 0px 15px 40px 5px #ededed;
  border: none;
  border-radius: 30px;
  ::placeholder {
    width: 141px;
    height: 21px;
    padding: 43px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    align-items: center;
    color: #8692a6;
  }
`;

const Input = ({ type, label, value, placeholder, onChange }) => {
  return (
    <div>
      <Label> {label} </Label>
      <InputStyle
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
