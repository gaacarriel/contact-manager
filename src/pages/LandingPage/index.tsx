import { useNavigate } from "react-router-dom";
import { DivLandingPage } from "./style";

export const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <DivLandingPage>
            <header>
                <p className="">Gerenciador de contatos</p>
            </header>
            <main>
                <p>
                    Este site foi feito pensando na sua autonomia em gerenciar
                    seus contatos, cadastre-se para experimentar!
                </p>

                <button type="button" onClick={() => navigate("/register")}>
                    Cadastre-se
                </button>
            </main>
        </DivLandingPage>
    );
};
