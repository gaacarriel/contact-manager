import { createContext } from "react";
import { IDefaultContextProps, IModalContext } from "./@types";
import { useState } from "react";

export const ModalContext = createContext({} as IModalContext);

export const ModalProvider = ({ children }: IDefaultContextProps) => {
    const [modalUserIsOpen, setModalUserIsOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);

    const openModalUpdate = () => {
        setModalIsOpen(true);
    };

    const closeModalUpdate = () => {
        setModalIsOpen(false);
    };

    const openModalCreate = () => {
        setModalCreateIsOpen(true);
    };

    const closeModalCreate = () => {
        setModalCreateIsOpen(false);
    };

    const openModalUser = () => {
        setModalUserIsOpen(true);
    };

    const closeModalUser = () => {
        setModalUserIsOpen(false);
    };

    return (
        <ModalContext.Provider
            value={{
                modalIsOpen,
                openModalUpdate,
                closeModalUpdate,
                setModalCreateIsOpen,
                modalCreateIsOpen,
                openModalCreate,
                closeModalCreate,
                modalUserIsOpen,
                openModalUser,
                closeModalUser,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
