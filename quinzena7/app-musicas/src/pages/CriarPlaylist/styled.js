import styled from "styled-components";

export const ContainerCriarPlay = styled.div`
display: grid;
gap: 10px;
text-align: center;
justify-content:center;
align-items:center;


`
export const ContainerBotao = styled.div`
display: grid;
grid-template-columns: 30% 35%;
gap: 50px;
justify-content:center;
margin-top: 25px;

`
export const Botao = styled.button`
cursor: pointer;
background-color:  #4ee44e;
color: black;
border: none;
padding: 10px;
border-radius: 4px;
box-shadow: 0 0 1em  gray;

:hover{ background-color: white; color: black; box-shadow: 0 0 1em  darkgray;}

`

export const BotaoIrParaLista = styled.button`
cursor: pointer;
background-color:  darkblue;
color: white;
border: none;
padding: 10px;
border-radius: 4px;
text-align: center;
:hover{ background-color: white; color: black; box-shadow: 0 0 1em  darkgray;}
`

export const Input = styled.input`
border: none;
padding: 10px;
border-radius: 3px;
width: 80%;
margin: 0 auto;
`