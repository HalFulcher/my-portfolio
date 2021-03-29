import styled from "styled-components";
import profileImg from "../images/profile-photo.png";

const AboutContainer = styled.div`
  background-color: #7192be;
  box-sizing: border-box;
  padding: 8em 7em;
  width: 100%;
  margin: auto;
  display: flex;

  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 8em 4em;
    align-items: center;
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
        <AboutText>
          <Heading>hi there...</Heading>
          <h3>
            Nice to meet you. I'm Hal, a personable software engineer and
            graduate of Manchester Codes Software Engineer FastTrack, an
            intensive six month course covering full stack development. Below
            you'll find some examples of my work - please get in touch if you
            like what you see!
          </h3>
        </AboutText>
      </AboutContainer>
    </div>
  );
};

export default About;
