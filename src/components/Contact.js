import styled from "styled-components";

const ContactInfo = styled.div`
  background: #e4e4e4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7em 0 6em 0;
  h3: ;
`;

const Contact = () => {
  return (
    <ContactInfo>
      <h1>contact</h1>
      <h3>Let's create your next experience together</h3>
      <h1>
        <a href="mailto:hallam.fulcher@gmail.com">hallam.fulcher@gmail.com</a>
      </h1>
    </ContactInfo>
  );
};

export default Contact;
