import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #000000;
    --color-primary: #04C35C;
    --color-secondary: #2B6CB0;
    --color-gray300:#1A202C;
    --color-gray200:#F7FAFC;
    --color-gray100:##FFFFFF;
    --color-success: #3FE864;
    --color-negative: #E83F5B;
    --color-warning: #FFCD07;
    
    --weight1: 700;
    --weight2: 600;
    --weight3: 500;
    --weight4: 400;

    --font-size0: 26px;
    --font-size1: 24px;
    --font-size2: 22px;
    --font-size3: 20px;
    --font-size4: 18px;
    --font-size5: 16px;
    --font-size6: 14px;
    --font-size7: 12px;
    --font-size8: 10px;
    --font-size9: 9px;

    --radius1: 16px;
    --radius2: 8px;
    --radius3: 4px;
  }  
  * {
    margin:0;
    padding: 0;
    outline:0;
    list-style: none;
    box-sizing: border-box;
  }

  body,html{
    width: 100%;
    min-height: 100vh;
  }

  a{
    color: unset;
    text-decoration: none;
    cursor: pointer;
  }

  body {
    background-color: white;
  }
  
  button {
    cursor: pointer;
  }
`;
