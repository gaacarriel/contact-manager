export interface IDefaultContextProps {
    children: React.ReactNode;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    phone: string;
    created_at: Date;
}

export interface IUserRegisterForm {
    name: string;
    email: string;
    password: string;
    phone: string;
}

export interface IUserLoginForm {
    email: string;
    password: string;
}

export interface IUserContext {
    user: IUser | null;
    registerUser: (formData: IUserRegisterForm) => Promise<void>;
    loginUser: (formData: IUserLoginForm) => Promise<void>;
    logoutUser: () => void;
    updateUser: (formData: IUserUpdate) => Promise<void>;
    deleteUser: () => Promise<void>;
}

// Contacts Types
export interface IContact {
    id: string;
    name: string;
    email: string;
    phone: string;
    user: IUser;
    created_at: Date;
}

export interface IContactCreate {
    name: string;
    email: string;
    phone: string;
}

export interface IContactUpdate {
    name?: string;
    email?: string;
    phone?: string;
}

export interface IUserUpdate {
    name?: string;
    email?: string;
    phone?: string;
}

export interface IContactsContext {
    contacts: IContact[] | [];
    createContact: (formData: IContactCreate) => Promise<void>;
    updateContact: (
        FormData: IContactUpdate,
        contactId: string
    ) => Promise<void>;
    deleteContact: (contactId: string) => Promise<void>;
}

// Modals Types
export interface IModalContext{
    modalIsOpen: boolean;
    openModalUpdate: () => void;
    closeModalUpdate: () => void;
    modalCreateIsOpen: boolean;
    openModalCreate: () => void;
    closeModalCreate: () => void;
    setModalCreateIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    modalUserIsOpen: boolean;
    openModalUser: () => void;
    closeModalUser: () => void;
}