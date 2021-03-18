import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { grey } from "@material-ui/core/colors";

const FooterContainer = styled.div`
  background: #e4e4e4;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: black;
  margin: 10px;
  font-size: 12px;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.6em;
  background: #e4e4e4;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
          <a href="https://www.linkedin.com/in/hallam-fulcher-8408b4145/">
            <LinkedInIcon />
          </a>
        </SocialIcon>
      </FooterContainer>
      <Copyright>
        <p>Copyright 2021 Hal Fulcher</p>
      </Copyright>
    </>
  );
};

export default Footer;
