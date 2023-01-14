import React,{useEffect, useState,useContext} from "react";
import styled from "styled-components";
import Button from "../commons/Button";
import { getCategory,getQuestions} from "../data";
import { Link, useLocation } from "react-router-dom";
//import { GlobalContext } from "./context/GlobalState";

const Container = styled.div`
  position: absolute;
  width: 1150px;
  height: 845px;
  left: 329px;
  top: 133px;
  box-shadow: 0px 15px 40px 5px #ededed;
  border-radius: 30px;
`;
const Title1 = styled.p`
  position: absolute;
  width: 500px;
  height: 50px;
  left: 45px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 50px;
  color: #696f79;
`;

const Title2 = styled.p`
  position: relative;
  width: 900px;
  height: 30px;
  margin: 80px 45px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #696f79;
`;
const Div = styled.div`
  position: absolute;
  width: 1050px;
  height: 700px;
  left: 40px;
  top: 133px;
`;
const ImgContainer = styled.div`
  width: 503px;
  height: 296px;
  flex: 1;
  border-radius: 30px;
  box-shadow: 0px 15px 40px 5px #ededed;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
`;
const InfoContainer = styled.p`
  width: 503px;
  height: 280px;
  margin-top: -300px;
  float: right;
  flex: 1;
  padding: -10px 10px;
`;
const TextInfo = styled.p`
  margin: -30px 170px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #696f79;
`;
const DescContainer = styled.div`
  width: 1032px;
  height: 400px;
  display: 1;
  align-items: center;
  margin: 30px 0px;
`;

const Title3 = styled.h3`
  height: 50px;
  margin-top: 0px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 34px;
  color: #696f79;
`;
const TextDesc = styled.p`
  margin-top: -20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #696f79;
`;

const CategoryQuizDetails = () => {
 
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  let category= decodeURIComponent(cat);
  const [categories, setCat] = useState({});

  useEffect(() => {
    const getCat = async () => { 
      try {
        const data = await getCategory(category);

        setCat(data);
      } catch {}
    };
    getCat();
  }, [category]);
  
  return (
    <Container>
     
      <Title1>{category} Quiz</Title1>
      <Title2>Read the following instructions</Title2>

      <Div>
        <ImgContainer>
          <Image src={categories.img} />
        </ImgContainer>
        <InfoContainer>
          <Title3>
            Date: <TextInfo>12/01/2023</TextInfo>
          </Title3>
          <Title3>
            Time Limit: <TextInfo>30min</TextInfo>{" "}
          </Title3>
          <Title3>
            Attempts: <TextInfo>Once</TextInfo>
          </Title3>
          <Title3>
            Points: <TextInfo>200 Points</TextInfo>
          </Title3>
        </InfoContainer>
        <DescContainer>
          <Title3>Instructions</Title3>
          <TextDesc>
            This quiz consists of 5 multiple-choice questions. To be successful
            with the quizzes, it's important to conversant with the topics. Keep
            the following in mind:
            <br />
            <br /> Timing - You need to complete each of your attempts in one
            sitting, as you are allotted 30 minutes to each attempt. Answers -
            You may review your answer-choices and compare them to the correct
            answers after your final attempt.
            <br />
            <br />
            To start,click the "Start" button. When finished, click the "Submit
            " button.
          </TextDesc>
        </DescContainer>
      </Div>
      <Link to={`/quizCategories/quiz/${category}`}>
      <Button name={"Start"}  />
      </Link>
    </Container>
  );
};

export default CategoryQuizDetails;
