import React from "react";
import styled from "styled-components";
const Container = styled.div`
  position: absolute;
  width: 660px;
  height: 1024px;
  left: -3px;
  top: 0px;
  background: linear-gradient(
      rgba(134, 146, 166, 0.8),
      rgba(134, 146, 166, 0.8)
    ),
    url("https://s3-alpha-sig.figma.com/img/8259/e1c3/78ca4acaee1f01741f187f8340c6acdc?Expires=1674432000&Signature=GOBYERPLqmrZWxrAfimkpRUhbhg8OkdUyGoctRRYTJSBop58PLi~ekAJOVhBm1WHIkFlmzfGrc4scgwg2Gamg04M9rXtfwGU5xyjDz956Biuwl3UieuJVfNZWCJBGzcZOgkg3kpzN0E9hGsZV7GbvmMIhVM6xhgWRVHrMThg009zAI76PIQeSPTpzfA2EI0pzNFqSxCNvUuVc0XFJeJF1CMWakLMouEgq4s5ei~Nd8q~nWRf6Asx6acD8PhhU975pUHa3IJQ9NIVblVV1Aso0sCKzEI90iy6XIbPseFNdXlYh-wKucVyQ4iEZqHUyKMCkQX8gS3QuknzAS5U16hngQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
      no-repeat center;
  background-size: 660px 1024px;
  background-repeat: no-repeat;
`;

const TextContainer = styled.div`
  width: 323.5px;
  height: 451px;
  left: 253px;
  top: 269px;
`;

const Txt1 = styled.div`
  position: absolute;
  width: 28px;
  height: 117px;
  left: 253px;
  top: 269px;

  font-family: "Gayathri";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 117px;
  color: #00daf7;
`;

const Txt2 = styled.div`
  position: absolute;
  width: 297px;
  height: 304px;
  left: 267px;
  top: 308px;

  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  line-height: 38px;
  color: #ffffff;
`;

const Txt3 = styled.div`
  position: absolute;
  width: 103px;
  height: 27px;
  left: 267px;
  top: 626px;

  font-family: "Poppins";
  font-weight: 500;
  font-size: 17px;
  line-height: 27px;
  color: #ffffff;
`;

const Vector = styled.img`
  position: absolute;
  width: 33.5px;
  height: 33px;
  left: 576.5px;
  top: 687px;
`;

const RightSidePage = () => {
  return (
    <Container>
      <TextContainer>
        <Txt1>“</Txt1>
        <Txt2>
          Those people who develop the ability to continuously acquire new and
          better forms of knowledge that they can apply to their work and to
          their lives will be the movers and shakers in our society for the
          indefinite future
        </Txt2>
        <Txt3>Brian Tracy</Txt3>
        <Vector src="/assets/Vector1.png" />
      </TextContainer>
    </Container>
  );
};

export default RightSidePage;
