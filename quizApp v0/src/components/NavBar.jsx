import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";


const Container = styled.div`
  height: 125px;
  width:1440px;
`;
const SearchContainer = styled.div`
  position: absolute;
  width: 356px;
  height: 64px;
  left: 320px;
  top: 38px;
  box-shadow: 0px 15px 40px 5px #ededed;
  border: none;
  border-radius: 30px;
`;

const SearchInput = styled.input`
  position: absolute;
  width: 250px;
  height: 40px;
  left: 60px;
  top: 13px;
  border: none;
  outline: none;
  ::placeholder {
    width: 75px;
    height: 29px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 28px;
    color: #696f79;
  }
`;
const SearchIcon = styled.div`
  position: absolute;
  width: 75px;
  height: 29px;
  left: 25px;
  top: 23px;
`;

const Logo = styled.h1`
  position: absolute;
  width: 153px;
  height: 45px;
  left: 55px;
  top: 25px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 45px;
  color: #696f79;
`;
const ButtonStart = styled.button`
  position: absolute;
  width: 212px;
  height: 64px;
  left: 863px;
  top: 38px;
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
const Profile = styled.div`
  position: absolute;
  width: 212px;
  height: 64px;
  left: 1211px;
  top: 28px;
  display: flex;
  flex-wrap: nowrap;
`;
const TextName = styled.p`
  width: 105px;
  height: 29px;
  font-family: "Poppins";
  font-size: 19px;
  line-height: 28px;
  display: flex;

  color: #696f79;
`;
const ImgProfile = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 15px;
`;
const Navbar = () => {
  return (
    <div>
      <Container>
       
          <Logo>Quiz Time</Logo>

          <SearchContainer>
            <SearchInput placeholder="Search..." />
            <SearchIcon>
              <FontAwesomeIcon icon={faMagnifyingGlass} pull="left" />
            </SearchIcon>
          </SearchContainer>

          <ButtonStart>Start Quiz</ButtonStart>

          <Profile>
            <ImgProfile src="/assets/Ellipse.png" />
            <TextName>marwa</TextName>
          </Profile>
        
      </Container>

    </div>
   
  );
};

export default Navbar;
