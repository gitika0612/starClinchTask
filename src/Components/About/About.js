import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 60%;
  grid-column-gap: 5%;
  align-items: center;
  margin-top: 1rem;
  @media only screen and (max-width: 600px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const AboutImage = styled.div`
  width: 100%;
  height: 340px;
  @media only screen and (max-width: 600px) {
   height: 240px;
   width: 100%;
  }
`;
const Image = styled.img`
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0/0.2);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const AboutInfo = styled.div``;
const Info = styled.div`
  margin-bottom: 25px;
`;
const Heading = styled.h2`
  font-size: 24px;
  color: #343a40;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  @media only screen and (max-width: 600px){
    font-size: 22px;
    margin-top: .5rem
  }
`;
const Type = styled.h3`
  font-size: 16px;
  color: #6c757d;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
`;
const Place = styled.h4`
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
`;
const Button = styled.div`
  height: 42px;
  width: auto;
  margin-bottom: 20px;
`;
const Btn = styled.button`
  background-color: #ff214f;
  display: inline-block;
  border-radius: 15px;
  padding: 8px 60px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  border: 2px solid #ff214f;
  color: #fff;
  transition: 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
    border: 2px solid red;
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
    padding: 6px 55px
  }
`;
const AboutPara = styled.p`
@media only screen and (max-width: 600px) {
  font-size: 14px
}
`;
const Breadcrumbs = styled.div`
  margin-top: 0.5rem;
  @media only screen and (max-width: 600px) {
    margin-left: 1.1rem;
  }
`;
const BDiv = styled.div`
  //  display: block;
`;
const BOl = styled.ol`
  background-color: transparent;
  padding: 0;
  border-radius: 0;
  list-style: none;
  display: flex;
`;
const Bli = styled.li`
  margin-right: 1rem;
`;
const AboutRating = styled.div`
margin-top: 1rem;
`
const About = () => {
  return (
    <>
      <Breadcrumbs>
        <BDiv>
          <BOl>
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#000",
                opacity: ".6",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              <Bli>Home</Bli>
            </a>
            <a href=""  style={{
                textDecoration: "none",
                color: "#000",
                opacity: ".6",
                fontSize: "14px",
                fontWeight: 600,
              }}>
              <Bli>Singer</Bli>
            </a>
            <Bli style={{ color: "#000",
                opacity: ".6",
                fontSize: "14px",
                fontWeight: 600,}}>Arijit Singh</Bli>
          </BOl>
        </BDiv>
      </Breadcrumbs>
      <AboutContainer>
        <AboutImage>
          <Image
            src="https://imgmedia.lbb.in/media/2019/11/5ddfa90e741fe976b696c002_1574938894436.jpg"
            alt="arijit"
          />
        </AboutImage>
        <AboutInfo>
          <Info>
            <Heading>Arijit Singh</Heading>
            <Type>(SINGER) 
            </Type>
            <Place>Mumbai, Mahrashtra</Place>
          </Info>
          <Button>
          <Link to='/quote'>
            <Btn>See Price And Book</Btn>
          </Link>
          </Button>
          <AboutPara>
            Renowned for his super hits, Arijit Singh is now the talk of the
            town because of his golden voice and stellar performances!
          </AboutPara>
          <AboutRating>
          <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
          </AboutRating>
        </AboutInfo>
      </AboutContainer>
    </>
  );
};

export default About;
