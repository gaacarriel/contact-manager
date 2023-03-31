import styled from "styled-components";

export const MainRegisterPage = styled.main`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        fieldset {
            border: none;

            div > input {
                border-radius: 9px;
                border: 1px solid  #4c6ef5;
                transition: 0.3s;

                &:hover {
                    transition: 0.3s;
                    border 1px solid #364fc7;
                }
            }
        }

        button {
            width: 60%;
            height: 35px;
            background: #4c6ef5;
            color: white;
            border: none;
            border-radius: 8px;
            transition: 0.3s;
            cursor: pointer;

            &:hover {
                background-color: #364fc7;
                transition: 0.3s;
            }
        }
    }
`;
