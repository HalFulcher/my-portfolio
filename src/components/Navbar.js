import styled from "styled-components";

const NavContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  // background-color: rgba(225, 225, 225, 0.8);
  background-color: #7192be;
`;

const NavLink = styled.a`
  // color: ${({ theme }) => theme.text}
  color: black;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  font-family: "Syne Mono", monospace;
  color: #f2f2f2;
  :hover {
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavLink href="#About">About</NavLink>
      <NavLink href="#Projects">Projects</NavLink>
      <NavLink href="#Contacts">Contact</NavLink>
    </NavContainer>
  );
};

export default Navbar;
