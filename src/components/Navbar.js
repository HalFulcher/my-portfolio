import styled from "styled-components";

const NavContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const NavLink = styled.a`
  // color: ${({ theme }) => theme.text}
  color: black;
  margin: 10px;
  font-size: 14px;
  text-decoration: none;

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
