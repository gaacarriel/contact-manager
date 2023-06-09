import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input";
import { IUserLoginForm } from "../../contexts/@types";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../schemas/login.schema";

export const FormLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserLoginForm>({ resolver: yupResolver(schemaLogin) });

    const { loginUser } = useContext(UserContext);

    const submit: SubmitHandler<IUserLoginForm> = (formData) => {
        loginUser(formData);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Seu email"
                type="email"
                register={register("email")}
                error={errors.email}
            />
            <Input
                label="Sua senha"
                type="password"
                register={register("password")}
                error={errors.password}
            />
            <button type="submit">Fazer login</button>
        </form>
    );
};
