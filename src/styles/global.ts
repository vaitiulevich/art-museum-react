import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: ${(props) => props.theme.typography.fontFamily.general};
   }
   #root{
    margin:0 auto;
    padding: 0;
   }
   body{
    background-color: ${(props) => props.theme.colors.fill};
    color: ${(props) => props.theme.colors.fontColor};
   }
   img{
    height: 100%;
    width: auto;
   }
   a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.fontColor};
   }
`;
export default GlobalStyle;
