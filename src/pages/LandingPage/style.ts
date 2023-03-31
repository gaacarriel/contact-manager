import styled from "styled-components";

export const DivLandingPage = styled.div`
    header {
        background-color: #4c6ef5;
        height: 4rem;

        display: flex;
        justify-content: center;
        align-items: center;

        p {
            color: white;
            font-size: 1.5rem;
        }
    }

    main {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 6rem;

        p {
            text-align: center;
            font-size: 1.2rem;
            margin-top: 4rem;
        }

        button {
            width: 50%;
            height: 43px;
            font-size: 1.4em;
            border-radius: 8px;
            border: none;
            background: #4c6ef5;
            color: white;
            transition: 0.3s;
            cursor: pointer;

            &:hover {
                background-color: #364fc7;
                transition: 0.3s;
            }
        }
    }
`;
