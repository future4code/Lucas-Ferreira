import React from 'react';
import styled from 'styled-components'




const ContainerCard = styled.div`
height: 600px;
width: 365px;
background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
margin: 0 auto;
display: flex;
flex-direction: column;
border-radius: 4px; 

`
const HeaderCard = styled.div`
padding: 8px;
max-width: 100%;
border-bottom: 1px solid #6F00FF;
display: flex;
align-items: center;
justify-content: space-around;
`
const P0 = styled.p`
padding: 0 5px;
margin-left: 3px;
font-weight: bold;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
color: #6F00FF;
`
const BotaoPerfis = styled.button`
padding: 10px;
background-color: #6F00FF;
border: none;
border-radius: 4px;
color: white;
box-shadow: 0 0 1em gray;
cursor: pointer;
:hover{background-color: darkblue; color: white;}
`

const ContainerFoto = styled.div`
height: 70%;
width: 95%;
margin: 8px auto;
border-radius: 4px;
box-shadow: 0 0 1em gray;
background-size: 100%;

`
const P1 = styled.p`
padding: 0 5px;
margin-left: 3px;
font-weight: bold;
`


const P2 = styled.p`
padding: 0 5px;
margin-left: 3px;
`



const Img = styled.img`
width: 100%;
height: 70%;

`

const ContainerBotao = styled.div`
padding: 40px 8px;
display: flex;
align-items: center;
justify-content: space-around;
`
const BotaoMatch = styled.button`
padding: 10px 20px;
background-color: #00ff00;
border: none;
border-radius: 4px;
color: black;
box-shadow: 0 0 1em gray;
cursor: pointer;
:hover{background-color: darkgreen; color: white;}
`

const BotaoRejeitar = styled.button`
padding: 10px 20px;
background-color: red;
border: none;
border-radius: 4px;
color: black;
box-shadow: 0 0 1em gray;
cursor: pointer;
:hover{background-color: darkred; color: white;}
`

export default function CardPrincipal (props) {
 
  
    return (
        <>
        <ContainerCard>
            <HeaderCard>
            <P0>Astromacth</P0>
            <BotaoPerfis onClick = {props.pegarPerfisCurtidos}>Perfis Curtidos</BotaoPerfis>
            </HeaderCard>
            <ContainerFoto>
                <Img src={props.perfil.photo}/>
                <P1>{props.perfil.name}</P1>
                <P2>{props.perfil.bio}</P2>
            </ContainerFoto>
            <ContainerBotao>
            <BotaoRejeitar onClick = {() => props.rejeitarPerfil(props.perfil.id, false)}>Rejeitar</BotaoRejeitar>
            <BotaoMatch onClick = {() => props.escolherPerfil(props.perfil.id, true)}>Gostei</BotaoMatch>
            </ContainerBotao>
        </ContainerCard>
        
        </>
    )
}