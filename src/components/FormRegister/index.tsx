import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input";
import { IUserRegisterForm } from "../../contexts/@types";
import { UserContext } from "../../contexts/UserContext";
import { schemaRegister } from "../../schemas/register.schema";

export const FormRegister = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserRegisterForm>({ resolver: yupResolver(schemaRegister) });

    const { registerUser } = useContext(UserContext);

    const submit: SubmitHandler<IUserRegisterForm> = (formData) => {
        registerUser(formData);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Seu nome"
                type="text"
                register={register("name")}
                error={errors.name}
            />
            <Input
                label="Seu email"
                type="email"
                register={register("email")}
                error={errors.email}
            />
            <Input
                label="Crie uma senha"
                type="password"
                register={register("password")}
                error={errors.password}
            />
            <Input
                label="Seu número de telefone"
                type="text"
                register={register("phone")}
                error={errors.phone}
            />
            <button type="submit">Cadastrar</button>
        </form>
    );
};
