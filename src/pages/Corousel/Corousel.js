import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import "./corousel.css";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  color: #fff;
  font-size: 4em;
  overflow: hidden;
`;
const Img = styled.img`
width: 180px;
height: 180px;
@media(max-width:500px){
  width: 150px;
  height: 150px;
`;
const Name = styled.h4`
  color: #333;
  font-size: 14px;
  margin: 0 0 3px;
  font-weight: 700;
`;
const Place = styled.p`
  margin: 0;
  color: #333;
  font-size: 14px;
`;
const Corousel = ({ data }) => {
  return (
    <>
      <Carousel breakPoints={breakPoints}>
        {data?.map((ele) => {
          return (
            <>
              <div style={{ display: "column" }}>
              <Image>
                <Img src={ele.image} />
              </Image>
                <div style={{ textAlign: "center" }}>
                  <Name>{ele.name}</Name>
                  <Place>{ele.place}</Place>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>
    </>
  );
};

export default Corousel;
