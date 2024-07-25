import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
   }
   #root{
    margin:0 auto;
    padding: 0;
   }
   body{
    background-color: #FAFAFA;
    color: #393939;
   }
   img{
    height: 100%;
    width: auto;
   }
   a{
    text-decoration: none;
    color: #393939;
   }
`;
export default GlobalStyle;
