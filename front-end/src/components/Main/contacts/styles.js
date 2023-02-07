import styled from "styled-components";

const ContactsStyle = styled.li`
  margin: 5px;
  height: 220px;
  min-width: 24%;
  background-color: var(--Purple);
  color: var(--fontColor-1);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h3{
    text-align: center;
  }

  button{
    align-self: center;
    width: fit-content;
    padding: 5px 10px;
    border-radius: 8px;
    background-color: var(--fontColor-1);
    color: black;
  }
`;

export default ContactsStyle;
