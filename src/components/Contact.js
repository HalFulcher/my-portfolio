import styled from "styled-components";

const ContactInfo = styled.div`
  background: #7192be;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8em;
  padding-bottom: 2em;
  font-family: "Major Mono Display", monospace;
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const Email = styled.div`
  font-family: "Syne Mono", monospace;
  font-size: 2rem;
  background-color: #f2f2f2;
  padding: 0.2em;
`;

const Contact = () => {
  return (
    <>
      <ContactInfo>
        <h1>contact</h1>
        <Email>
          <a href="mailto:hallam.fulcher@gmail.com">hallam.fulcher@gmail.com</a>
        </Email>
      </ContactInfo>
    </>
  );
};

export default Contact;
