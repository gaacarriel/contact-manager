import { createContext } from "react";
import { IDefaultContextProps, IModalContext } from "./@types";
import { useState } from "react";

export const ModalContext = createContext({} as IModalContext);

export const ModalProvider = ({ children }: IDefaultContextProps) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false)

    const openModalUpdate = () => {
        setModalIsOpen(true);
    };

    const closeModalUpdate = () => {
        setModalIsOpen(false);
    };

    const openModalCreate = () => {
        setModalCreateIsOpen(true)
    }
    
    const closeModalCreate = () => {
        setModalCreateIsOpen(false)
    }

    return (
        <ModalContext.Provider
            value={{ modalIsOpen, openModalUpdate, closeModalUpdate, modalCreateIsOpen, openModalCreate, closeModalCreate }}
        >
            {children}
        </ModalContext.Provider>
    );
};
