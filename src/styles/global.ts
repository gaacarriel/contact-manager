import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(--color-blue);
    }

    :root{
        --color-grape-0: #f8f0fc;
        --color-grape-2: ##e599f7;
        --color-grape-3: ##cc5de8;
        --color-white: #FBFEFF;
    }

    h1, h2, h3, h4, h5, h6, p, span, li{
    font-family: 'Roboto', sans-serif;
}
`;
