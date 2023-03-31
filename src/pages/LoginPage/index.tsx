import { Link } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";
import { MainLoginPage } from "./style";

export const LoginPage = () => {
    return (
        <MainLoginPage>
            <Link to={"/register"}>Voltar</Link>
            <FormLogin />
        </MainLoginPage>
    );
};
