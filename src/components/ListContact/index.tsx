import { useContext, useState } from "react";
import { ListBody } from "./style";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { IContactUpdate, IModalContext } from "../../contexts/@types";
import { ContactsContext } from "../../contexts/ConcatsContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaUpdateContact } from "../../schemas/contactSChema";
import { ModalContext } from "../../contexts/ModalContext";

interface IListContactsProps {
    id: string;
    name: string;
    email: string;
    phone: string;
}

Modal.setAppElement("#root");

export const ListContact = ({ id, name, email, phone }: IListContactsProps) => {
    const { updateContact, deleteContact } = useContext(ContactsContext);
    const { modalIsOpen, openModalUpdate, closeModalUpdate } =
        useContext(ModalContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IContactUpdate>({
        resolver: yupResolver(schemaUpdateContact),
    });

    const submit = (formData: IContactUpdate) => {
        if (formData.name === "") {
            delete formData.name;
        }
        if (formData.email === "") {
            delete formData.email;
        }
        if (formData.phone === "") {
            delete formData.phone;
        }
        updateContact(formData, id);
    };

    return (
        <ListBody>
            <li key={id}>
                <div>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
                <div className="div">
                    <button onClick={openModalUpdate}>Editar</button>
                    <button onClick={() => deleteContact(id)}>Excluir</button>
                </div>
            </li>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModalUpdate}
                contentLabel="Editar contato"
                overlayClassName="modal-overlay"
                className="modal-update-contact"
            >
                <h2>Editar contato</h2>
                <form onSubmit={handleSubmit(submit)}>
                    <Input
                        type="text"
                        label="Nome"
                        register={register("name")}
                        error={errors.name}
                        value={name}
                    ></Input>
                    <Input
                        type="text"
                        label="Email"
                        register={register("email")}
                        error={errors.email}
                        value={email}
                    ></Input>
                    <Input
                        type="text"
                        label="Telefone"
                        register={register("phone")}
                        error={errors.phone}
                        value={phone}
                    ></Input>
                    <button type="submit">Editar</button>
                </form>
            </Modal>
        </ListBody>
    );
};
