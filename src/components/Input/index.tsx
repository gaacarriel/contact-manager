import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { TextField } from "@mui/material";

interface IInputProps {
    label: string;
    type: "text" | "email" | "password";
    register: UseFormRegisterReturn<string>;
    error?: FieldError;
    value?: string;
}

export const Input = ({ label, type, register, error, value }: IInputProps) => {
    return (
        <fieldset className="input-default">
            <TextField label={label} type={type} {...register} placeholder={value}/>
            {error ? <p>{error.message}</p> : null}
        </fieldset>
    );
};
