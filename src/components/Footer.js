import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { grey } from "@material-ui/core/colors";

const FooterContainer = styled.div`
  background: #7192be;
  display: flex;
  padding-top: 4em;
  padding-bottom: 2em;
  justify-content: center;
`;

const SocialIcon = styled.a`
  padding-top: 1em;
  color: black;
  margin: 10px;
  font-size: 12px;
  text-decoration: none;

  :hover {
    cursor: pointer;
    background-color: #f2f2f2;
    padding: 0.2em;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContainer id="Contacts">
        <SocialIcon>
          <a href="https://github.com/HalFulcher">
            <GitHubIcon />
          </a>
        </SocialIcon>
        <SocialIcon>
          <a href="https://www.linkedin.com/in/hal-fulcher-8408b4145/">
            <LinkedInIcon />
          </a>
        </SocialIcon>
      </FooterContainer>
    </>
  );
};

export default Footer;
