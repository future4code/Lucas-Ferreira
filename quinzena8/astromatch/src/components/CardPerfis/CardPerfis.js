import React from 'react';
import styled from 'styled-components'

const ContainerCard = styled.div`
height: 600px;
width: 365px;
background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
border: 1px solid black;
margin: 0 auto;
display: flex;
flex-direction: column;

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
const BotaoHome = styled.button`
padding: 10px 20px;
background-color: #6F00FF;
border: none;
border-radius: 4px;
color: white;
box-shadow: 0 0 1em gray;
cursor: pointer;
:hover{background-color: darkblue; color: white;}
`

const ContainerFoto = styled.div`
height: 10%;
width: 99%;
margin: 8px auto;
padding: 4px 8px;
display: flex;
align-items: center;
box-sizing: border-box;
font-weight: bold;

`
const P = styled.p`
margin-left: 5px;
`

const Img = styled.img`
margin-right: 4px;
width: 40px;
border-radius: 50%;
`


export default function CardPerfis (props) {

    return (
        <>
        <ContainerCard>
            <HeaderCard>
            <P0>Astromacth</P0>
            <BotaoHome onClick = {props.mudarParaCardPrincipal}>Home</BotaoHome>
            </HeaderCard>
            {props.perfisCurtidos.map((cadaPerfil) =>{
                return <> <ContainerFoto>
                <Img src={cadaPerfil.photo}/>
                <P>{cadaPerfil.name}</P>
            </ContainerFoto>
            </>
            })}
           
            
        </ContainerCard>
        </>
    )
}