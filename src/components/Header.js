import styled from "styled-components";
import Navbar from "./Navbar";
import skyImage from "../images/bg-sky.png";

const HeaderContainer = styled.div`
  height: 100vh;
  background-image: url(${skyImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// const HeroContainer = styled.div`

//   display: flex;
//   justify-content: center;
// `;

const HeadingContainer = styled.div`
  color: #e4e4e4;
  font-size: 1.5rem;
  padding-bottom: 8em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = () => {
  return (
    <>
      <Navbar />
      <HeaderContainer>
        {/* <HeroContainer> */}
        <HeadingContainer>
          <h1>hal fulcher</h1>
          <h3>SOFTWARE ENGINEER</h3>
        </HeadingContainer>
        {/* </HeroContainer> */}
      </HeaderContainer>
    </>
  );
};

export default Header;
