import styled from 'styled-components'


export const ContainerPlayVisualizar = styled.div`
display: grid;
gap: 10px;
text-align: center;
justify-content:center;
align-items:center;
margin: 0 auto;
padding: 0;
box-sizing: border-box;
max-width: 350px;
`

export const ContainerBotao = styled.div`
margin-top: 40px;
display: grid;
justify-content: center;
font-weight: bold;
`


export const ContainerLista = styled.div`
margin-top: 5px;
border: 1px solid black;
padding: 5px;
display: grid;
grid-template-columns: 15% 30%;
justify-content: space-between;
align-items: center;
cursor: pointer;
max-width: 100%;
background-color: white;
border-radius: 4px;
color: black;
`

export const BotaoDeletar = styled.button`
cursor: pointer;
background-color: red;
color: white;
border: none;
padding: 8px 30px;
border-radius: 4px;
:hover{ background-color: darkred; color: white;}
`

export const BotaoVoltar = styled.button`
cursor: pointer;
background-color:  darkblue;
color: white;
border: none;
padding: 8px 30px;
border-radius: 4px;
text-align: center;
:hover{ background-color: white; color: black; box-shadow: 0 0 1em  darkgray;}
`

