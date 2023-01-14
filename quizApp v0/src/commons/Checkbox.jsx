import React from "react";
import Checkbox from "@mui/material/Checkbox";
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

const CheckboxComponent = () => {
  return (
    <Label>
      <Checkbox defaultChecked size="small" />
      Remember my password
    </Label>
  );
};

export default CheckboxComponent;
