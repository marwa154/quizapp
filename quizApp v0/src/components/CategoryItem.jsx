import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  position: relative;
  width:250px;
  height: 172px;
  left: 25px;
  top: 130px;
  align-items: center;
  box-shadow: 0px 15px 40px 5px #ededed;
  border-radius: 30px;
  cursor: pointer;
  margin: 13px 0px;
 

 
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
`;

const Info = styled.div`
  position: absolute;
  top: 60px;
  left: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Poppins";
  font-style: normal;
`;
const Title = styled.h3`
  color: white;
`;

const CategoryItem = ({ item }) => {
  return (
    
      <Container>
        <Link to={`/quizCategories/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
        </Info>
        </Link>
      </Container>
    
  );
};

export default CategoryItem;
