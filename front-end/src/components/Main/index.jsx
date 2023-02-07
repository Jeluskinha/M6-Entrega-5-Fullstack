import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import MainStyle from "./styles";

import background from '../../assets/background.gif'
import Contacts from "./contacts";

function Main() {
  const { token,  getAllContacts, userListContacts } = useContext(AuthContext);

  useEffect(() => {
    getAllContacts()
  }, [token]);

  return (
    <MainStyle token={token}>
      {token ? (
        <ul>
          {userListContacts?.map((client) => <Contacts key={client.id} id={client.id} name={client.name} email={client.email} phone={client.phone}/>)}
        </ul>
      ) : (
        <figure>
          <img src={background} alt="" />
        </figure>
      )}
    </MainStyle>
  );
}

export default Main;
