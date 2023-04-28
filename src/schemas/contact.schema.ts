import * as yup from "yup";

export const schemaUpdateContact = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup
        .string()
        .notRequired()
        .email("Insira um email válido"),
    phone: yup.string().notRequired(),
});

export const schemaRegisterContact = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup
        .string()
        .required("Email obrigatório")
        .email("Insira um email válido"),
    phone: yup.string().required("Telefone obrigatório"),
});
