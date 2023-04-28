import styled from "styled-components";

export const ContainerDashPage = styled.div`
    height: 100%;
    width: 70%;
    margin: 0 auto;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;

        button {
            padding: 5px 10px;
            background: gray;
            color: white;
            border: none;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
        }
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        margin-top: 4rem;

        > p {
            font-size: 2rem;
        }

        ul {
            position: relative;
            list-style: none;
            width: 70%;
            background: #364fc7;
            padding: 40px 20px 20px 20px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            gap: 5px;

            > button {
                border: none;
                position: absolute;
                top: 10px;
                right: 20px;
                top: 10px;
                padding: 4px;
                background: #748ffc;
                border-radius: 4px;
                cursor: pointer;
                font-weight: 700;
            }

            & > p {
                text-align: center;
                color: white;
                font-weight: 600;
            }
        }
    }
`;
