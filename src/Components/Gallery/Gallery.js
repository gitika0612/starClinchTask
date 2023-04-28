import React, { useState } from "react";
import styled from "styled-components";
import { image } from "../../pages/GalleryImages";
import Carousel from "../../pages/Corousel/Corousel";
import { Link } from "react-router-dom";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const GalleryContainer = styled.div`
  display: flex;
  margin: 40px 0 0;
`;
const GTag = styled.div`
  background-color: #fff;
  margin-bottom: 1rem;
  font-size: 14px;
  padding: 5px 10px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
`;
const GImage = styled.img`
  margin: 0 5px 0 0;
`;
const GHeading = styled.span`
  color: #000;
  font-weight: 500;
`;
const GalleryImgs = styled.div`
  margin: 10px 0 0;
`;
const Images = styled.div`
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  // padding: 20px 30px;
  // border-radius: 15px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    margin-left: 1.5rem
  }
`;
const Button = styled.div`
  height: 42px;
  width: auto;
  margin-bottom: 20px;
  margin-top: 50px;
  text-align: center;
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

const Gallery = () => {
  const [modal, setModal] = useState(-1);
  return (
    <>
      <GalleryContainer>
        <GTag>
          <GImage src="https://starclinch.com/static/mobile/images/profile/gallery_icon.svg" />
          <GHeading>Gallery</GHeading>
        </GTag>
      </GalleryContainer>
      <GalleryImgs>
        <Images>
          {image.map((ele, id) => {
            return (
              <>
                <img
                  className="content_image"
                  style={{
                    width: "200px",
                    height: "200px",
                    marginRight: "2rem",
                    marginTop: "1.5rem",
                    borderRadius: "6px",
                  }}
                  src={ele.image}
                  onClick={() => setModal(id)}
                />
              </>
            );
          })}
          {modal >= 0 && (
            <div
              style={{
                transform: "scale(1)",
                position: "fixed",
                backgroundColor: "rgba(0,0,0,.9)",
                zIndex: "99",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
              }}
            >
              <button
                style={{
                  right: "1%",
                  top: "10px",
                  position: "absolute",
                  color: "#000",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  padding: ".5rem",
                }}
                onClick={() => setModal(-1)}
              >
                x
              </button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "100%",
                  alignItems: "center",
                }}
              >
                {modal > 0 ? (
                  <button
                    style={{
                      backgroundColor: "#fff",
                      marginLeft: "2rem",
                    }}
                    onClick={() => setModal(modal - 1)}
                  >
                    {" "}
                    <NavigateBeforeIcon />{" "}
                  </button>
                ) : (
                  <div></div>
                )}
                <div
                  style={{
                    left: "50%",
                    top: "50%",
                    height: "78%",
                  }}
                >
                  <img
                    style={{
                      border: "10px solid #fff",
                      borderRadius: "10px",
                      maxWidth: " 100%",
                      maxHeight: "100%",
                    }}
                    src={image[modal]?.image}
                  />
                </div>
                {modal < image.length - 1 ? (
                                            <button
                                            style={{
                                              backgroundColor: "#fff",
                                              // marginLeft: "2rem",
                                            }}
                                                onClick={() => setModal(modal + 1)}
                                            >
                                                <NavigateNextIcon />
                                            </button>
                                        ) : (
                                            <div></div>
                                        )}
              </div>
            </div>
          )}
        </Images>
        <Button>
          <Link to="/quote">
            <Btn>See Price And Book</Btn>
          </Link>
        </Button>
      </GalleryImgs>
    </>
  );
};

export default Gallery;
