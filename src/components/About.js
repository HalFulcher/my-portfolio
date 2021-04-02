import styled from "styled-components";
import profileImg from "../images/profile-photo.png";

const AboutContainer = styled.div`
  background-color: rgba(225, 225, 225, 0.8);
  box-sizing: border-box;
  padding: 8em 7em;
  width: 100%;
  margin: auto;
  display: flex;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 8em 3em;
  }
`;

const Heading = styled.h1`
  font-family: "Major Mono Display", monospace;
`;

const AboutText = styled.div`
  margin: auto;
  text-align: center;
`;

const About = () => {
  return (
    <div id="About">
      <AboutContainer>
        <Heading>hi there...</Heading>
        <AboutText>
          <h3>
            Nice to meet you. I'm Hal, a personable software engineer and
            graduate of Manchester Codes Software Engineer FastTrack, an
            intensive six month course covering full stack development. Below
            you'll find some examples of my work - please{" "}
            <a href="#Contacts">get in touch</a> if you like what you see!
          </h3>
        </AboutText>
      </AboutContainer>
    </div>
  );
};

export default About;
