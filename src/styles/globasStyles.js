import { createGlobalStyle } from "styled-components";


const MyGlobalStyle = createGlobalStyle`
        @font-face {
        font-family: 'SF Pro Rounded';
        src: url('/fonts/SF-Pro-Rounded.woff2') format('woff2'),
             url('/fonts/SF-Pro-Rounded.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'SF Pro Rounded', Helvetica, sans-serif;
        font-weight: normal; // corrigido aqui
        font-style: normal;
    }
    
    body{
        background-color: #000000ff;
    }
    html, body {
        max-width: 100vw;
        overflow-x: hidden;
    }

    #home{
        scroll-margin-top: 90px; // ajuste conforme a altura real do seu header
    }
    #about{
        scroll-margin-top: 90px;
    
    }
    #skills{
        scroll-margin-top: 1rem;
    
    }
     #projects{
        scroll-margin-top: 90px;
    
    }
`;

export default MyGlobalStyle;