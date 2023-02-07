import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import ContactsStyle from "./styles";

function Contacts({id, name, email, phone}) {

  const { deleteContact } = useContext(AuthContext);

  return (
    <ContactsStyle>
      <h3>{name}</h3>
      <h3>{email}</h3>
      <h3>{phone}</h3>
      <button onClick={()=> deleteContact(id)}>Deletar contato</button>
    </ContactsStyle>
  );
}

export default Contacts;
