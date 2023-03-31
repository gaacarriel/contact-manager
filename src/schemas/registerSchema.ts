import * as yup from "yup";

export const schemaRegister = yup.object().shape({
    name: yup.string().required("Insira o usuario"),
    email: yup
        .string()
        .required("Insira o Email")
        .email("Insira um email válido"),
    password: yup
        .string()
        .required("Cadastre a senha")
        .min(6, "Minimo 6 caracteres"),
        phone: yup.string().required("Insiria seu telone"),
});
