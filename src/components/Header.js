import styled from "styled-components";
import Navbar from "./Navbar";
import nightSky from "../images/night-sky.jpg";
import profileImg from "../images/profile-photo.png";

const HeaderContainer = styled.div`
  height: 100vh;
  // background-image: url(${nightSky});

  // background-size: cover;
  // background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d26f4e;
  padding: 0.2em;
`;

const HeroImage = styled.img`
  height: 12em;
  width: 12em;
  object-fit: contain;
  border-radius: 50%;
  padding: 1em;
`;

const HeadingContainer = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-family: "Major Mono Display", monospace;
`;

const Header = () => {
  return (
    <>
      <Navbar />
      <HeaderContainer>
        <HeadingContainer>
          <h1>hal fulcher</h1>
          <HeroImage img src={profileImg} alt="profile-photo" />

          <h3>SOFTWARE ENGINEER</h3>
        </HeadingContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
