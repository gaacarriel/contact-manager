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

export interface IUserContext{
    user: IUser | null;
    registerUser: (formData: IUserRegisterForm) => Promise<void>;
    loginUser: (formData: IUserLoginForm) => Promise<void>;
    logoutUser: () => void;
    contacts: IUser[] | [];
}