import styled from "styled-components";

export const Main = styled.div `
    text-align: center;
    background-color: #222;
    width: 52vw;
    min-height: 60vh;
    border-radius:3px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(15px + 2vmin);
    color: chartreuse;
    margin-top:100px;

    button{
        border: none;
        width:20vw;
        height: 5vh;
        border-radius: 2px;
        background-color: chartreuse;
        color: #222;
        margin-bottom: 25px;
        :hover{
            color:#222;
            background-color: #7ece2f;
            border:none;
            cursor:pointer;
            
        }
        
    }
   
`
export const Img = styled.img`
    height: 20vh;
    border: 1px solid white;
    border-radius: 5px;

`