import Modal from "react-modal";
import { useContext, useState } from "react";
import { IUser, IContactCreate } from "../../contexts/@types";
import { ContainerDashPage } from "./style";
import { UserContext } from "../../contexts/UserContext";
import { ContactsContext } from "../../contexts/ConcatsContext";
import { ListContact } from "../../components/ListContact";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegisterContact } from "../../schemas/contactSChema";
import { ModalContext } from "../../contexts/ModalContext";

Modal.setAppElement("#root");

export const DashboardPage = () => {
    const user: IUser = JSON.parse(localStorage.getItem("@USER") as string);

    const { logoutUser } = useContext(UserContext);
    const { contacts, createContact } = useContext(ContactsContext);
    const { modalCreateIsOpen, openModalCreate, closeModalCreate } =
        useContext(ModalContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IContactCreate>({
        resolver: yupResolver(schemaRegisterContact),
    });

    const submit = (formData: IContactCreate) => {
        createContact(formData);
    };

    return (
        <ContainerDashPage>
            <header>
                <h1>Olá, {user.name}</h1>
                <button onClick={logoutUser}>Sair</button>
            </header>

            <main>
                <p>Seus contatos</p>
                <ul>
                    <button onClick={openModalCreate}>Criar</button>
                    {contacts.length > 0 ? (
                        contacts.map((contact) => (
                            <ListContact
                                id={contact.id}
                                name={contact.name}
                                email={contact.email}
                                phone={contact.phone}
                            />
                        ))
                    ) : (
                        <p>Parece que você ainda não tem contatos criados</p>
                    )}
                </ul>
                <Modal
                    isOpen={modalCreateIsOpen}
                    onRequestClose={closeModalCreate}
                    contentLabel="Criar contato"
                    overlayClassName="modal-overlay"
                    className="modal-update-contact"
                >
                    <h2>Criar novo contato</h2>
                    <form onSubmit={handleSubmit(submit)}>
                        <Input
                            type="text"
                            label="Qual o nome do contato?"
                            register={register("name")}
                            error={errors.name}
                        ></Input>
                        <Input
                            type="text"
                            label="Qual o email do contato?"
                            register={register("email")}
                            error={errors.email}
                        ></Input>
                        <Input
                            type="text"
                            label="Número de telefone"
                            register={register("phone")}
                            error={errors.phone}
                        ></Input>
                        <button type="submit">Criar</button>
                    </form>
                </Modal>
            </main>
        </ContainerDashPage>
    );
};
