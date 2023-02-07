import HeaderStyle from "./styles";
import logo from "../../assets/logo.png";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Header() {
  const { userInfo, getUserInfo, token, logout, setOpenModalLogin, setOpenModalregister, setOpenModalregisterContact } =
    useContext(AuthContext);

  useEffect(() => {
    getUserInfo();
  }, [token]);

  return (
    <HeaderStyle>
      <figure>
        <img src={logo} alt="" />
      </figure>

      {!token ? (
        <div>
          <button onClick={() => setOpenModalLogin(true)}>Login</button>
          <button onClick={() => setOpenModalregister(true)}>Cadastrar</button>
        </div>
      ) : (
        <>
        <div>
          <button onClick={() => setOpenModalregisterContact(true)}>Cadastrar Contato</button>
        </div>
        <div>
          <h2>{userInfo?.name}</h2>
          <button onClick={() => logout()}>Sair</button>
        </div>
        </>
      )}
    </HeaderStyle>
  );
}

export default Header;
