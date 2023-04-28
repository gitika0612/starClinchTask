import React, { useState } from "react";
import styled from "styled-components";
import Rating from "../../pages/Rating/Rating";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MainDiv = styled.div`
  border-radius: 10px;
  margin: 30px 0 20px;
  padding: 1rem;
  box-shadow: 0 3px 6px rgba(158, 158, 158, 0.16);
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  color: #212529;
  text-align: left;
  height: auto;
  line-height: 1.5;
  font-size: 14px;
  overflow: hidden;
`;
const MainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 14px 15px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  width: 100%;
`;

const ImageDiv = styled.div`
  width: 255px;
  margin-right: 20px;
`;
const LangImage = styled.div`
  width: 62px;
  margin: 0 auto 10px;
`;
const Title = styled.p`
  text-align: center;
  margin: 0;
  color: #333;
  font-size: 14px;
  font-weight: 500;
`;
const Performance = styled.div`
  background-color: #e3f8fa;
  text-align: center;
  padding: 10px 5px;
  border-radius: 10px;
  min-width: 24%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
`;
const Performing = styled.div`
  background-color: #ffe6e2;
  text-align: center;
  padding: 10px 5px;
  border-radius: 10px;
  min-width: 24%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
`;
const Duration = styled.div`
  background-color: #f5e6fe;
  text-align: center;
  padding: 10px 5px;
  border-radius: 10px;
  min-width: 24%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
`;
const Travel = styled.div`
  background-color: #fff1c0;
  text-align: center;
  padding: 10px 5px;
  border-radius: 10px;
  min-width: 24%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
`;

const Accordian = () => {
  const [performance, setPerformance] = useState();
  const [language, setLanguage] = useState();
  const [faq, setFaq] = useState();
  const [review, setReview] = useState();

  return (
    <>
      <MainDiv>
        <Div onClick={() => setPerformance(!performance)}>
          <Div1>
            <img
              style={{ margin: "0 15px 0 0" }}
              src="https://stcdn.starclinch.in/mobile/images/profile/Performance_Details.svg"
            />
            <div>Performance Details</div>
          </Div1>
          <KeyboardArrowDownIcon  style={faq ? { transform: "rotate(180deg)" } : {}} />
        </Div>
        {performance && (
          <>
            <Content>
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "14px 15px",
                  display: "flex",
                }}
              >
                <MainBox style={{ justifyContent: "space-between" }}>
                  <Performance>
                    <div style={{ minHeight: "60px" }}>
                      <img src="https://stcdn.starclinch.in/mobile/images/profile/offstage_members_new.svg" />
                    </div>
                    <div>
                      <b>
                        <h3
                          style={{
                            fontSize: "22px",
                            color: "#26c6da",
                            margin: "0 0 3px",
                          }}
                        >
                          4
                        </h3>
                        <p
                          style={{
                            paddingBottom: "5%",
                            color: "#26c6da",
                            fontWeight: "300",
                            margin: "0",
                            fontSize: "16px",
                          }}
                        >
                          Off Stage Members
                        </p>
                      </b>
                    </div>
                  </Performance>

                  <Performing>
                    <div style={{ minHeight: "60px" }}>
                      <img src="https://stcdn.starclinch.in/mobile/images/profile/performing_members_new.svg" />
                    </div>
                    <h3 style={{ color: "#F36", margin: "0 0 3px" }}>1</h3>
                    <p
                      style={{
                        paddingBottom: "5%",
                        color: "#F36",
                        fontWeight: "300",
                        margin: "0",
                        fontSize: "16px",
                      }}
                    >
                      Performing Members
                    </p>
                  </Performing>
                  <Duration>
                    <div style={{ minHeight: "60px" }}>
                      <img src="https://stcdn.starclinch.in/mobile/images/profile/performance_min_duration_new.svg" />
                    </div>
                    <h3 style={{ color: "#be63f9", margin: "0 0 3px" }}>
                      60 - 120 Min
                    </h3>
                    <p
                      style={{
                        paddingBottom: "5%",
                        color: "#be63f9",
                        fontWeight: "300",
                        margin: "0",
                        fontSize: "16px",
                      }}
                    >
                      Performance Duration
                    </p>
                  </Duration>
                  <Travel>
                    <div style={{ minHeight: "60px" }}>
                      <img src="https://stcdn.starclinch.in/mobile/images/profile/can_travel_new.svg" />
                    </div>
                    <div style={{ color: "#ffb148", margin: "0 0 3px" }}>
                      Can Travel
                    </div>
                    <div
                      style={{
                        paddingBottom: "5%",
                        color: "#ffb148",
                        fontWeight: "300",
                        margin: "0",
                        fontSize: "16px",
                      }}
                    >
                      Nationwide
                    </div>
                  </Travel>
                </MainBox>
              </div>
            </Content>
          </>
        )}
      </MainDiv>

      <MainDiv>
        <Div onClick={() => setLanguage(!language)}>
          <Div1 style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ margin: "0 15px 0 0" }}
              src="https://stcdn.starclinch.in/mobile/images/profile/performance_language_v2.svg"
            />
            <div>Performace Language</div>
          </Div1>
          <KeyboardArrowDownIcon  style={faq ? { transform: "rotate(180deg)" } : {}} />
        </Div>
        {language && (
          <Content>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "14px 15px",
                display: "flex",
              }}
            >
              <MainBox>
                <ImageDiv>
                  <LangImage>
                    <img
                      style={{ width: "100%" }}
                      src="https://starclinch.com/static/mobile/images/language_icons/Hindi.svg"
                    />
                  </LangImage>
                  <Title>Hindi</Title>
                </ImageDiv>
              </MainBox>
            </div>
          </Content>
        )}
      </MainDiv>

      <MainDiv>
        <Div onClick={() => setReview(!review)}>
          <Div1 style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ margin: "0 15px 0 0", width: "32px", height: "32px" }}
              src="https://starclinch.com/static/mobile/images/profile/review_icon.svg"
            />
            <div>Review</div>
          </Div1>
          <KeyboardArrowDownIcon  style={faq ? { transform: "rotate(180deg)" } : {}} />
        </Div>
        {review && (
          <>
            <Content>
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "14px 15px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    height: "auto",
                    padding: "20px 15px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginRight: "-15px",
                      marginLeft: "-15px",
                      width: "100%",
                    }}
                  >
                    <div style={{ width: "90%" }}>
                      <div style={{ textAlign: "center", margin: "0 0 40px" }}>
                        <h5
                          style={{
                            color: "#191818",
                            fontSize: "22px",
                            margin: "0",
                          }}
                        >
                          0 reviews
                        </h5>
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: "30px",
                            fontWeight: "400",
                            lineHeight: "1.2",
                            color: "#000",
                            margin: "0 0 20px",
                          }}
                        >
                          Post a review
                        </h3>
                      </div>
                      <div>
                        <Rating />
                      </div>
                      <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                        <textarea
                          style={{
                            height: "auto",
                            width: "100%",
                            lineHeight: "1.5",
                            borderRadius: "0.25rem",
                            boxShadow: "0 3px 28px rgba(0,0,0,.16)",
                            border: "0",
                            color: "#191818",
                            resize: "none",
                            fontSize: "20px",
                          }}
                        ></textarea>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <input
                          style={{
                            backgroundColor: "#0a3fff",
                            color: "#fff",
                            fontSize: "14px",
                            fontWeight: "600",
                            padding: "8px 25px",
                          }}
                          Type="button"
                          value="POST"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Content>
          </>
        )}
      </MainDiv>

      <MainDiv>
        <Div onClick={() => setFaq(!faq)}>
          <Div1 style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ margin: "0 15px 0 0", width: "32px", height: "32px" }}
              src="https://stcdn.starclinch.in/mobile/images/profile/biography_icon.svg"
            />
            <div>FAQ</div>
          </Div1>
          <KeyboardArrowDownIcon  style={faq ? { transform: "rotate(180deg)" } : {}} />
        </Div>
        {faq && (
          <>
            <Content>
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "14px 15px",
                  display: "flex",
                }}
              >
                <MainBox>
                  <div>
                    <div>
                      <h4>Q. HOW TO BOOK ARIJIT SINGH ?</h4>
                      <p style={{ fontSize: "15px" }}>
                        Fill out a booking request form for Arijit Singh, or
                        call our office at (1800 567 789) to discuss your
                        upcoming event. One of our experienced agents will be
                        happy to help you get pricing information and check
                        availability for Arijit Singh or any other celebrity of
                        your choice.{" "}
                      </p>
                    </div>
                    <div style={{ marginTop: "1.5rem" }}>
                      <h4>Q. WHAT IS ARIJIT'S SINGH BOOKING PRICE?</h4>
                      <p style={{ fontSize: "15px" }}>
                        {" "}
                        The Arijit Singh booking fee depends on different
                        factors like the date, location, and market activity.
                        Booking Agent Info provides price estimates for booking
                        Arijit Singh, and you would need to contact Arijit
                        Singh's agent to get the official pricing.{" "}
                      </p>
                    </div>
                  </div>
                </MainBox>
              </div>
            </Content>
          </>
        )}
      </MainDiv>
    </>
  );
};

export default Accordian;
