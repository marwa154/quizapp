import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTable,
  faHeadset,
  faBell,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Container = styled.div`
  position: absolute;
  width: 300px;
  height: 800px;
`;
const Button = styled.button`
  position: absolute;
  width: 271px;
  height: 64px;
  left: 20px;
  top: 0px;
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
const Wrapper = styled.div`
  position: absolute;
  left: 70px;
  top: 70px;
`;
const TextItem = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  color: #696f79;
`;
const LogOutButton = styled.button`
  position: absolute;
  font-family: "Poppins";
  font-style: normal;
  background:white;
  border:none;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  top: 660px;
  display: flex;
  align-items: center;
  color: #696f79;
`;
const SideBar = () => {
  return (
    <Container>
       <Link to="/quizCategories">
      <Button>
       
        <FontAwesomeIcon icon={faTable} style={{ padding: " 0 15px" }} />
        Dashboard
      </Button>
      </Link> 
      <Wrapper>
        <TextItem>
          <FontAwesomeIcon icon={faHeadset} style={{ padding: " 0 15px" }} />
          Support
        </TextItem>
        <TextItem>
          <FontAwesomeIcon icon={faBell} style={{ padding: " 0 15px" }} />
          Notification
        </TextItem>
        <LogOutButton>
          <FontAwesomeIcon
            icon={faRightFromBracket}
            style={{ padding: " 0 15px" }}
          />
          Log Out
        </LogOutButton>
      </Wrapper>
    </Container>
  );
};

export default SideBar;
