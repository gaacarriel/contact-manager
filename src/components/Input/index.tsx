import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { TextField } from "@mui/material";

interface IInputProps {
    label: string;
    type: "text" | "email" | "password";
    register: UseFormRegisterReturn<string>;
    error?: FieldError;
    value?: string;
    defaultValue?: string;
}

export const Input = ({ label, type, register, error, value, defaultValue }: IInputProps) => {
    return (
        <fieldset className="input-default">
            <TextField label={label} type={type} {...register} placeholder={value} defaultValue={defaultValue}/>
            {error ? <p>{error.message}</p> : null}
        </fieldset>
    );
};
