import styled from 'styled-components'


export const ContainerPai = styled.div`
width: 90vw;
margin:0px;
padding: 0px;
box-sizing:border-box;

`

export const Audio = styled.audio`
 height: 30px;
 max-width: 120%;
 margin-right: 10px;
 margin-bottom: 10px;
 margin-top: 10px;
`

export const ContainerMusicas = styled.div`
border: 1px solid white;
border-radius: 3px;
padding: 20px;

`
export const ContainerNomePlay = styled.div`
padding-bottom: 25px;

`

export const Musica = styled.div`
border: 1px solid white;
margin-top: 5px;
margin-right: auto;
margin-left: auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 2px;
justify-content: center;
cursor: pointer;
width: 100%;
align-items: center;

`
export const BotaoDeletar = styled.button`
cursor: pointer;
background-color: red;
color: white;
border: none;
margin-left: 16px;
padding: 8px 12px;
border-radius: 4px;
:hover{ background-color: darkred; color: white;}
`

export const ContainerCriarMusica = styled.div`
margin-top: 8px;
display: grid;
gap: 10px;
grid-template-rows: 50px 50px 50px;

`

export const BotaoCriarMusica = styled.button`
cursor: pointer;
background-color:  #4ee44e;
color: black;
border: none;
padding: 8px 30px;
border-radius: 4px;
box-shadow: 0 0 1em  gray;
:hover{ background-color: white; color: black; box-shadow: 0 0 1em  darkgray;};
`


export const InputCriarMusica = styled.input`
border: none;
padding: 0px 10px;
border-radius: 3px;
margin: 0 auto;
width: 80%;

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

export const ContainerBotao = styled.div`
margin-top: 40px;
display: grid;
grid-template-columns: 150px 100px;
gap: 20px;
justify-content: center;
font-weight: bold;
margin-bottom: 10px;
`