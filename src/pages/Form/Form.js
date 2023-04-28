import React from "react";
import styled from "styled-components";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Form.css";

const Maindiv = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
const Dp = styled.img`
  width: 100%;
  max-width: 350px;
  height: 350px
  height: 100px;
  // object-fit: cover;
  border-radius: 12px;
`;
const FormBox = styled.form`
  width: 65%;
  margin-bottom: 2rem;
  border: none;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;
const Flex = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
const Flex1 = styled.div`
  // display: flex;
  // gap: 10px;
  // align-items: center;
  width: 100%;
  margin-top: 3rem;
`;

const Price = styled.div`
  padding: 25px 25px ;
  border: 1px solid #ededed;
  background-color: #f8f8f8;
  border-radius: 5px;
  margin-bottom: 30px;
  height: fit-content;
  width: 35%;
  margin-top: 3rem;

`;
const PriceBtn = styled.button`
  background-color: #ff214f;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  border: none;
  padding: 2%;
  width: 100%;
  transition: 0.2s ease-in;
  &:hover {
    background: #0054a6;
  }
`;

const Title = styled.div`
  // position: relative;
  margin-top: 20px;
`;
const Form = () => {
  const [phone, setPhone] = React.useState("");

  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };
  return (
    <Maindiv>
      <FormBox>
        <Flex1
          style={{
            placeContent: "center",
          }}
        >
          <Dp
            src="https://imgmedia.lbb.in/media/2019/11/5ddfa90e741fe976b696c002_1574938894436.jpg"
            alt="arijit"
          />

          <h3 style={{ margin: 0, fontSize: "1.8rem" }}>Arijit Singh</h3>
          <Title>
          <h5
            style={{
              marginBottom: "0.5rem",
              fontWeight: 500,
              lineHeight: 1.2,
              fontSize: "1.25rem",
            }}
          >
            Get best price as per your requirenment
          </h5>
        </Title>
        </Flex1>
        <Flex>
          <Column>
            <label>What's the occasion?</label>

            <select>
              <option>one</option>
              <option>two</option>
              <option>three</option>
              <option>four</option>
            </select>
          </Column>
          <Column>
            <label>Event Date</label>
            <input type="date" />
          </Column>
        </Flex>
        <Flex>
          <Column>
            <label>Venue Address</label>

            <input placeholder="" />
          </Column>
        </Flex>
        <Flex>
          <Column>
            <label>Budget</label>
            <input type="number" />
          </Column>
          <Column>
            <label>How many people will attend?</label>
            <input type="number" />
          </Column>
        </Flex>
        <Flex>
          <Column>
            <label>Full Name</label>

            <input />
          </Column>
        </Flex>
        <Flex>
          <Column>
            <label>Email Address (No Spam!)</label>
            <input />
          </Column>
          <Column>
            <label>Mobile Number</label>
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={handleChange}
              style={{ width: "100%" }}
              inputStyle={{ width: "100%" }}
            />
          </Column>
        </Flex>
        <Flex>
          <Column>
            <label>Tell us more (we love to listen)</label>
            <textarea></textarea>
          </Column>
        </Flex>
        <Flex>
          <select style={{ padding: "2%" }}>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Send more options in my budget</label>
        </Flex>
        <hr />
      </FormBox>

      <Price>
        <Flex style={{ placeContent: "end", marginBottom: "5px" }}>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <span>Send Quotes on Whatsapp</span>
        </Flex>
        <PriceBtn>Show Best Price</PriceBtn>
      </Price>
    </Maindiv>
  );
};

export default Form;
