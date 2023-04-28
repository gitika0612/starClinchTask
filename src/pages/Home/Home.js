import React, { useState, useEffect } from "react";
import About from "../../Components/About/About";
import Gallery from "../../Components/Gallery/Gallery";
import Accordian from "../../Components/Accordian/Accordian";
import SimilarArtist from "../../Components/SimilarArtist/Artist";
import styled from "styled-components";
import "./home.css";

const MainDiv = styled.div`
  width: 100%;
  padding-right: 10rem;
  padding-left: 10rem;
  margin-right: auto;
  margin-left: auto;
  @media only screen and (max-width: 600px) {
    width: 100%;
  padding-right: 5rem;
  padding-left: 5rem;
  margin-right: auto;
  margin-left: auto;
  }
`;

const PopUp = styled.div`
  position: fixed;
  top: 20%;
  left: 90%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 600px) {
    left: 50%;
    top: 22%
  }
`;

const Home = () => {
  const [time, setTime] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((previousTime) => previousTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (time >= 45) {
      setShowPopup(true);
    }
  }, [time]);

  const handleSubmit = (event) => {
    // event.preventDefault();
    setShowPopup(false);
  };
  return (
    <>
      {showPopup && (
        <PopUp>
          <>
            <form onSubmit={handleSubmit}>
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <input type="submit" value="Submit" />
            </form>
          </>
        </PopUp>
      )}
      <MainDiv>
        <About />
        <Gallery />
        <Accordian />
        <SimilarArtist />
      </MainDiv>
    </>
  );
};

export default Home;
