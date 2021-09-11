import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


const ContainerAdminHomePage = styled.div`
background-color: rgba(232, 236, 241, 1);
background-size: cover;
background-position: center;
max-width: 100vw;
min-height: 100vh;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ContainerButton = styled.div`
margin: 15px 0px;
display: grid;
grid-template-columns: 100px 100px 100px;
gap: 10px;
justify-content: center;

`
const ButtonBack = styled.button`
background-color: white;
border: 1px solid gray;
color:  rgba(165, 55, 253, 1);
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
padding: 5px 5px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: rgba(165, 55, 253, 1);
    color: white;
}
:active{
    background-color: white;
}
`
const ButtonSubmit = styled.button`
background-color: rgba(3, 201, 169, 1);
border: 1px solid #0c0c0c;
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
color: white;
padding: 5px 0px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: #0c0c0c;

}
:active{
    background-color: rgba(102, 51, 153, 1);
}
`

const ButtonLogout = styled.button`
background-color: rgba(102, 51, 153, 1);
border: 1px solid #0c0c0c;
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
color: white;
padding: 5px 0px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: #0c0c0c;

}
:active{
    background-color: rgba(102, 51, 153, 1);
}

`

const ListItem = styled.button`
display: flex;
justify-content: space-around;
align-items: center;
background-color: white;
border-radius: 4px;
box-shadow: 5px 5px 5px rgba(102, 51, 153, 1);
width: 50%;
height: 100px;
margin: 15px auto;
cursor: pointer;
:hover{
    background-color: rgba(213, 184, 255, 1);
    border: 0.1rem solid rgba(213, 184, 255, 1);
    color: white;
}
:active{
    background-color: rgba(102, 51, 153, 1);
    color: white;
}
`
const P = styled.p`
text-align: left;
padding: 6px;
font-size: 20px;
color: rgba(102, 51, 153, 1);
`

const ButtonRemove = styled.button`
padding: 10px 20px;
background-color: #0c0c0c;
border-radius: 4px;
border: 1px solid black;
color: white;
cursor: pointer;
:hover{
    background-color: rgba(3, 201, 169, 1);
    border: 0.1rem solid black;
    color: black;
}
:active{
    background-color: rgba(102, 51, 153, 1);
    color: white;
}
`


export function AdminHomePage (){
    const history = useHistory()

    const GoToLoginPage = () => {
        history.push('/login')
    }

    const GoToCreatetripPage = () => {
        history.push('/admin/trips/create')
    }

    const Logout = () => {
        history.push('/login')
    }

    const GoToTripDetailPage = () => {
        history.push('/trips/:id')
    }




    return(
        <>
        <ContainerAdminHomePage>
            <h1>Painel Administrativo</h1>
            <ContainerButton>
                <ButtonBack onClick={GoToLoginPage}>Voltar</ButtonBack>
                <ButtonSubmit onClick={GoToCreatetripPage }>Criar viagem</ButtonSubmit>
                <ButtonLogout onClick={Logout}>Logout</ButtonLogout>
            </ContainerButton>
            <ListItem>
                    <P onClick={GoToTripDetailPage}>Viagem para Marte</P>
                    <ButtonRemove>Excluir</ButtonRemove>
                </ListItem>
            <ListItem>
                    <P onClick={GoToTripDetailPage}>Viagem para Marte</P>
                    <ButtonRemove>Excluir</ButtonRemove>
            </ListItem>
        </ContainerAdminHomePage>
        </>
    )
}