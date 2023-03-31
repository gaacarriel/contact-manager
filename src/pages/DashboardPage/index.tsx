import { useContext } from "react";
import { IUser } from "../../contexts/@types";
import { ContainerDashPage } from "./style";
import { UserContext } from "../../contexts/UserContext";

export const DashboardPage = () => {
    const user: IUser = JSON.parse(localStorage.getItem("@USER") as string);

    const { logoutUser, contacts } = useContext(UserContext);

    return (
        <ContainerDashPage>
            <header>
                <h1>Olá, {user.name}</h1>
                <span onClick={logoutUser}>Sair</span>
            </header>

            <main>
                <p>Seus contatos</p>
                {contacts.length === 0 ? (
                    <p>Parece que você ainda não tem contatos criados</p>
                ) : (
                    "po"
                )}
            </main>
        </ContainerDashPage>
    );
};
