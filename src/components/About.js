import styled from "styled-components";

const HeroImage = styled.img`
  height: 16em;
  width: 16em;
  object-fit: contain;
  border-radius: 50%;
  padding: 0 0 0 3em;
`;

const AboutContainer = styled.div`
  background-color: rgba(225, 225, 225, 0.8);
  box-sizing: border-box;
  padding: 10em 6em;
  width: 100%;
  margin: auto;
  display: flex;
  text-align: center;
  align-items: center;

  // media query here for mobile version, change flex-direction to row.

  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10em 2em;
    align-items: center;
  }
`;

const AboutText = styled.div`
  margin: auto;
  text-align: center;
  padding: 0em 2em 0em 4em;
`;

const About = () => {
  return (
    <div id="About">
      <AboutContainer>
        <HeroImage src="/profile-photo.jpg" alt="profile-photo" />
        <AboutText>
          <h1>hi there...</h1>
          <h4>
            Nice to meet you. I'm Hal, a personable frontend developer with 1+
            year's experience building websites and applications. Below you'll
            find examples of my work - please get in touch if you like what you
            see! THIS NEEDS TO BE LONGER / match CV bio?
          </h4>
        </AboutText>
      </AboutContainer>
    </div>
  );
};

export default About;
