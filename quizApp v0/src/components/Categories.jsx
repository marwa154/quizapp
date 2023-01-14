import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import Button from "../commons/Button";
const Container = styled.div`
  position: absolute;
  width: 1150px;
  height: 845px;
  left: 329px;
  top: 133px;
  box-shadow: 0px 15px 40px 5px #ededed;
  border-radius: 30px;
`;
const CategoriesContainer = styled.div`
  width: 1100px;
  display: grid;
  text-align: left;
  grid-template-columns: repeat(4, 1fr);
`;

const Title1 = styled.p`
  position: absolute;
  left: 40px;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 33px;
  line-height: 50px;
  color: #696f79;
`;

const Title2 = styled.p`
  position: absolute;
  left: 40px;
  top: 65px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #696f79;
`;
const Categories = ({item}) => {
  return (
    <Container>

      <Title1>Select Topic</Title1>
      <Title2>Featured Category</Title2>
      
      <CategoriesContainer>
       
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
       
      </CategoriesContainer>
      
      <Button name={"More"}/>
    </Container>
  );
};

export default Categories;
