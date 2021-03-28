import styled from "styled-components";
import profileImg from "../images/profile-photo.jpg";

const HeroImage = styled.img`
  height: 16em;
  width: 16em;
  object-fit: contain;
  border-radius: 50%;
`;

const AboutContainer = styled.div`
  background-color: rgba(225, 225, 225, 0.8);
  box-sizing: border-box;
  padding: 5em;
  width: 100%;
  margin: auto;
  display: flex;

  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 6em 5em;
    align-items: center;
  }
`;

const AboutText = styled.div`
  margin: auto;
  text-align: center;
  h4 {
    padding-left: 4em;

    @media (max-width: 768px) {
      padding: 0;
    }
  }
`;

const About = () => {
  return (
    <div id="About">
      <AboutContainer>
        <HeroImage img src={profileImg} alt="profile-photo" />
        <AboutText>
          <h1>hi there...</h1>
          <h4>
            Nice to meet you. I'm Hal, a personable software engineer and
            graduate of Manchester Codes Software Engineer FastTrack, an intense
            six month course covering full stack development. Below you'll find
            some examples of my work - please get in touch if you like what you
            see!
          </h4>
        </AboutText>
      </AboutContainer>
    </div>
  );
};

export default About;
