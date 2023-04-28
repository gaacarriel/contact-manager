import { createContext, useContext, useEffect, useState } from "react";
import {
    IDefaultContextProps,
    IContact,
    IContactCreate,
    IContactUpdate,
    IContactsContext,
} from "./@types";
import { api } from "../services/api";
import { ModalContext } from "./ModalContext";

export const ContactsContext = createContext({} as IContactsContext);

export const ContactsProvider = ({ children }: IDefaultContextProps) => {
    const [contacts, setContacts] = useState<IContact[] | []>([]);
    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.authorization = `Bearer ${token}`;

    const { closeModalCreate } = useContext(ModalContext);

    useEffect(() => {
        if (token) {
            const getContacts = async () => {
                try {
                    const response = await api.get("/contacts");
                    setContacts(response.data);
                } catch (error) {
                    console.log(error);
                }
            };

            getContacts();
        }
    }, []);

    const createContact = async (formData: IContactCreate) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            const response = await api.post("/contacts", formData, {
                headers: { auth: token },
            });
            setContacts([...contacts, response.data]);
            closeModalCreate();
        } catch (error) {
            console.log(error);
        }
    };

    const updateContact = async (
        formData: IContactUpdate,
        contactId: string
    ) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            const response = await api.patch(
                `contacts/${contactId}`,
                formData,
                {
                    headers: { auth: token },
                }
            );
            const newContacts = contacts.filter(
                (contact) => contact.id !== contactId
            );
            setContacts([response.data, ...newContacts]);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteContact = async (contactId: string) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            await api.delete(`/contacts/${contactId}`, {
                headers: { auth: token },
            });
            const newContacts = contacts.filter(
                (contact) => contact.id !== contactId
            );
            setContacts(newContacts);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ContactsContext.Provider
            value={{ contacts, createContact, updateContact, deleteContact }}
        >
            {children}
        </ContactsContext.Provider>
    );
};
