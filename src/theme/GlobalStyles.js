import { createGlobalStyle } from "styled-components";
import Satoshi from "./satoshi";

const GlobalStyles = createGlobalStyle`
    // Font
    ${Satoshi}
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        // cursor: none;
        background: ${({ theme }) => theme.color.bgColor};
        font-family: 'Satoshi-Variable', Helvetica, 'Arial Narrow Bold', sans-serif;
        overflow: hidden;
        border-inline: 4px solid hsl(0, 0%, 15%);
        color: ${({ theme }) => theme.color.grey};
    }
    
    ul {
        list-style-type: none;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyles;
