import { createContext, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import {
    IDefaultContextProps,
    IUser,
    IUserContext,
    IUserLoginForm,
    IUserRegisterForm,
} from "./@types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultContextProps) => {
    const [user, setUser] = useState<IUser | null>(null);

    const navigate = useNavigate();

    const registerUser = async (formData: IUserRegisterForm) => {
        try {
            await api.post("/users", formData);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    const loginUser = async (formData: IUserLoginForm) => {
        try {
            const response: any = await api.post("/login", formData);
            localStorage.setItem("@TOKEN", response.data.token);
            localStorage.setItem("@USER", JSON.stringify(response.data.user));
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    };

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USER");
        navigate("/");
    };

    return (
        <UserContext.Provider
            value={{ user, registerUser, loginUser, logoutUser }}
        >
            {children}
        </UserContext.Provider>
    );
};
