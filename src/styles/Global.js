import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }
    body {
        background: #fff;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
    }
a{
    text-decoration: none;
    color: inherit;
}
h1 {
    font-size: 46px;
}
    li {
        list-style: none;
    }
    .wrapper {
        min-height: 90vh;
        display: flex;
        max-width: 90%;
        margin: auto;
        flex-direction: column;
    }
    @media(min-width: 768px) {
        .scrolledlink {
        color: white;
    }
    .navlink {
        color: black;
    }
    }
    .form-error {
     color: red;
  }
`;
export default GlobalStyles;
