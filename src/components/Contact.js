import styled from "styled-components";

const ContactInfo = styled.div`
  background: #e4e4e4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6em;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const Contact = () => {
  return (
    <>
      <ContactInfo>
        <h1>contact</h1>
        <h1>
          <a href="mailto:hallam.fulcher@gmail.com">hallam.fulcher@gmail.com</a>
        </h1>
      </ContactInfo>
    </>
  );
};

export default Contact;
