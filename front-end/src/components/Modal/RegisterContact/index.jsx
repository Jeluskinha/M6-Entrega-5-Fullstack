import RegisterModalStyle from "./styles";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthContext";
import { AiOutlineCloseCircle } from "react-icons/ai";

function RegisterContactModal() {

  const { registerContact, setOpenModalregister } = useContext(AuthContext)

  const { register, handleSubmit } = useForm()

  return (
    <RegisterModalStyle>
      <div>
        <figure onClick={()=> setOpenModalregister(false)}>
            <AiOutlineCloseCircle />
        </figure>
        <h2>Cadastrar novo contato</h2>
        <form onSubmit={handleSubmit(registerContact)}>
        <label>
          <h4>nome do contato</h4>
          <input type="text" id="name" {...register("name")} placeholder="nome completo"/>
        </label>
        <label>
          <h4>Informe o email</h4>
          <input type="text" id="email" {...register("email")} placeholder="exemplo@gmail.com"/>
        </label>
        <label>
          <h4>Insira o telefone telefone</h4>
          <input type="tel" id="phone" {...register("phone")} placeholder="exemplo@gmail.com"/>
        </label>
        <button>Cadastrar</button>
        </form>
      </div>
    </RegisterModalStyle>
  );
}

export default RegisterContactModal;
