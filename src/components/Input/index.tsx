import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { TextField } from "@mui/material";

interface IInputProps {
    label: string;
    type: "text" | "email" | "password";
    register: UseFormRegisterReturn<string>;
    error?: FieldError;
}

export const Input = ({ label, type, register, error }: IInputProps) => {
    return (
        <fieldset>
            <TextField label={label} type={type} {...register} />
            {error ? <p>{error.message}</p> : null}
        </fieldset>
    );
};
