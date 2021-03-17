import styled from "styled-components";
import Navbar from "./Navbar";
import skyImage from "../images/bg-sky.png";

const HeaderContainer = styled.div`
  height: 100vh;
  // center moon
  // play around with vw padding
  background-image: url(${skyImage});

  background-size: cover;
  background-position: center;
`;

const HeroContainer = styled.div`
  padding: 16em 0 1em 0;
  display: flex;
  justify-content: center;
`;

const HeadingContainer = styled.div`
  color: #e4e4e4;
  font-size: 1.5rem;
`;

const Header = () => {
  return (
    <>
      <Navbar />
      <HeaderContainer>
        <HeroContainer>
          <HeadingContainer>
            <h1>hal fulcher</h1>
            <h3>WEB DEVELOPER</h3>
          </HeadingContainer>
        </HeroContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
