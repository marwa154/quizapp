import React, { useState ,useEffect} from "react";
import styled from "styled-components";
import Button from "../commons/Button";
import { useLocation } from "react-router-dom";
import { getQuestionsCat, questions} from "../data";
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
const Title1_2 = styled.p`
position: absolute;
  width: 500px;
  height: 50px;
  left: 850px;
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
const QuestionContainer = styled.p`
  width: 503px;
  height: 280px;
  margin-top: -300px;
  float: right;
  flex: 1;
  padding: -10px 10px;
`;
const Title3 = styled.p`
  height: 50px;
  margin-top: 0px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 34px;
  color: #696f79;
`;
const TextQuestion = styled.p`
  margin: -10px 0px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #696f79;
`;
const AnswerContainer = styled.div`
  width: 1032px;
  height: 400px;
  display: 1;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0px;
`;
const Ul = styled.ul`
  display: 1;
  justify-content: space-between;
  margin: -20px -50px;
  list-style-type: none;
  padding-bottom: 10px;
`;
const Li = styled.li`
  padding-bottom: 25px;
`;
const Radio = styled.input``;
const TextAnswer = styled.label`
  padding: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #696f79;
`;
const Quiz = () => {
  const location = useLocation();
  const category= decodeURIComponent(location.pathname.split("/")[3]);
 const [currentQuestion,setCurrentQuestion]=useState(0);
 const [questionscat,setQuestions]=useState(['']);

 const [selectedValue, setSelectedValue] = useState('');


 const handleChange = event => {
  setSelectedValue(event.target.value);
};
 const handelanswer=()=>{
  console.log("hi")
 }
 const handelNext=()=>{
  const nextQuestion=currentQuestion+1;
  setCurrentQuestion(nextQuestion)
 }

 useEffect(() => {
  const getQuestionsCategory = async () => {
    try {
      const res = await getQuestionsCat(category);
      setQuestions(res);
    
    } catch (err) {
     
    }
  };
  getQuestionsCategory();
}, [category]);

console.log( questionscat[currentQuestion].incorrectAnswers)
  return (
    <Container>
      <Title1>{category} Quiz</Title1>
      <Title1_2>Timer: 29:09Mins</Title1_2>
      <Title2>Answer the question below</Title2>
      
      <Div>
        <ImgContainer>
          <Image src="https://cdn.images.express.co.uk/img/dynamic/106/590x/King-Richard-III-1542764.webp?r=1640866145468" />
        </ImgContainer>
        <QuestionContainer>
          <Title3>Question {currentQuestion+1}/{questionscat.length}</Title3>
          <TextQuestion>
           {questionscat[currentQuestion].question}
          </TextQuestion>
        </QuestionContainer>
        <AnswerContainer>
          <Title3>Choose answer</Title3>
          <Ul>
          {/* lorsque je veut parcourir incorrectAnswers dans questionscat donner 
          moi l'erreur undefined   */}
               
            {/* { questionscat[currentQuestion].incorrectAnswers.map((ans)=>{
              return <Li > <Radio type="radio" 
              value={ans}
              checked={selectedValue ===ans}
              onChange={handleChange} /> <TextAnswer>{ans}</TextAnswer></Li>        
            })}  */}
            
              <Li > <Radio type="radio" 
               value={questions[currentQuestion].correctAnswer}
              checked={selectedValue === questions[currentQuestion].correctAnswer}
              onChange={handleChange} /> <TextAnswer>{questionscat[currentQuestion].correctAnswer}</TextAnswer></Li>        
            
          </Ul>
        </AnswerContainer>
      
      </Div>
       {currentQuestion+1===questionscat.length   ? (<Button name={"Submit"} onClick={handelanswer}/>) : (
            <Button name={"Next"} onClick={handelNext}/>
           )}

      
      
    </Container>
  );
};

export default Quiz;
