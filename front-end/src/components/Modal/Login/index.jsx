import LoginModalStyle from "./styles";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthContext";
import { AiOutlineCloseCircle } from "react-icons/ai";

function LoginModal() {
  const { login, setOpenModalLogin } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  return (
    <LoginModalStyle>
      <div>
        <figure onClick={()=> setOpenModalLogin(false)}>
          <AiOutlineCloseCircle />
        </figure>
        <h2>Bem-vindo</h2>
        <form onSubmit={handleSubmit(login)}>
          <label>
            <h4>Insira seu email</h4>
            <input
              type="text"
              id="email"
              {...register("email")}
              placeholder="exemplo@gmail.com"
              required
            />
          </label>
          <label>
            <h4>Insira sua senha</h4>
            <input
              type="password"
              id="password"
              {...register("password")}
              placeholder="Senhaforte@1234"
              required
            />
          </label>
          <button>Logar</button>
        </form>
      </div>
    </LoginModalStyle>
  );
}

export default LoginModal;
