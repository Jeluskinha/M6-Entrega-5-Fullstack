import Header from "./components/Header";
import MainStyle from "./globalStyle/appStyle";
import Main from "./components/Main";
import LoginModal from "./components/Modal/Login";
import RegisterModal from "./components/Modal/Register";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import RegisterContactModal from "./components/Modal/RegisterContact";

function App() {

  const { openModalLogin, openModalregister, openModalregisterContact } = useContext(AuthContext)

  return (
    <>
      {openModalLogin && <LoginModal/>}
      {openModalregister && <RegisterModal />}
      {openModalregisterContact && <RegisterContactModal/>}
      <Header/>
      <MainStyle>
        <Main/>
      </MainStyle>
    </>
  );
}

export default App;
