import RegisterModalStyle from "./styles";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthContext";
import { AiOutlineCloseCircle } from "react-icons/ai";

function RegisterModal() {

  const { registerUser, setOpenModalregister } = useContext(AuthContext)

  const { register, handleSubmit } = useForm()

  return (
    <RegisterModalStyle>
      <div>
        <figure onClick={()=> setOpenModalregister(false)}>
            <AiOutlineCloseCircle />
        </figure>
        <h2>Registre-se Grátis</h2>
        <form onSubmit={handleSubmit(registerUser)}>
        <label>
          <h4>Informe sue nome completo</h4>
          <input type="text" id="name" {...register("name")} placeholder="nome completo" required/>
        </label>
        <label>
          <h4>Insira seu email</h4>
          <input type="text" id="email" {...register("email")} placeholder="exemplo@gmail.com" required/>
        </label>
        <label>
          <h4>Digite seu telefone</h4>
          <input type="tel" id="phone" {...register("phone")} placeholder="exemplo@gmail.com" required/>
        </label>
        <label>
          <h4>Escolha uma senha</h4>
          <input type="password" id="password" {...register("password")} placeholder="Senhaforte@1234" required/>
        </label>
        <button>Cadastrar</button>
        </form>
      </div>
    </RegisterModalStyle>
  );
}

export default RegisterModal;
