const { createGlobalStyle } = require("styled-components");

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }
    :root{
        --lightBlue: #809FFF;
        --mediumBlue: #4F7BFF;
        --blue: #4169E1;
        --darkBlue: #002BAD;
        --white: #F9F9F9;
        --lightGrey: #D9DEED;
        --grey: #CDCDCD;
        --mediumGrey: #979797;
        --darkGrey: #404040;
        --black: #111111;
        --mediumGreen: #00DF31;
        --green: #00AF27;
        --orange: #FF1818;
        --mediumOrange: #E84500;
    }

    body, header, main, footer, section, div{
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    } 
    header{
        min-height: 70px;

        align-items: center;
        justify-content: center;
        
        background-color: var(--blue);
    }

    button{
        cursor: pointer;

        background-color: var(--blue);
        color: white;

        padding: 8px 15px;

        border: 1px solid var(--blue);
        border-radius: 7px;

        transition: .3s;
    }
    input{
        width: 90%;

        background-color: var();
        color: var(--greyText);
        
        padding: 5px;
        
        border: 1px solid var(--darkGrey);
        border-radius: 5px;

        ::placeholder{
            padding-left: 10px;
            color: var(--greyText); 
            font-weight: 600;
        }
    }
    select {
        width: 150px;

        color: var(--greyText);
        background-color: var(--greyInput);
        
        padding: 5px;
        
        border: 2px solid var(--darkGrey);
        border-radius: 7px;
    }
    img{
        height: 70px;
        border-radius: 7px;
    }
    h1{
        color: white;
    }
    h2{
        color: var(--blue);
    }
    h3, h4{
        color: var(--black);
    }
    p{
        color: var(--greyText);
    }
    span{
        color: var(--green);
    }


    //Tipography --------------------------
    h1{
        font-size: 28px;
        font-weight: 700;
    }
    h2{
        font-size: 22px;
        font-weight: 700;
    }
    h3{
        font-size: 16px;
        font-weight: 600;
    }
    h4{
        font-size: 14px;
        font-weight: 600;
    }
    p{
        font-size: 14px;
        font-weight: 400;
    }
    span{
        font-size: 14px;
        font-weight: 600;
    }
    button{
        font-size: 14px;
        font-weight: 600;
    }
    input{
        font-size: 14px;
        font-weight: 400;
    }
    select{
      font-weight: 600;
    }
    svg {
      font-size: 25px;
    }
`;
