import { Link } from "react-router-dom";
import { FormRegister } from "../../components/FormRegister";
import { MainRegisterPage } from "./style";

export const RegisterPage = () => {
    return (
        <MainRegisterPage>
            <Link to={"/"}>Voltar</Link>
            <Link to={"/login"}>Ja sou cadastrado</Link>
            <FormRegister />
        </MainRegisterPage>
    );
};
