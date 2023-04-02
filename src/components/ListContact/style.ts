import styled from "styled-components";

export const ListBody = styled.div`
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2px 5px;

        background: #748ffc;
        border-radius: 4px;

        .div {
            display: flex;
            gap: 5px;

            button {
                padding: 5px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
        }
    }
`;
