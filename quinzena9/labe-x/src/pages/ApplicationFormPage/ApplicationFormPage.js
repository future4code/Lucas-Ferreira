import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ContainerApplicationFormPage = styled.div`
background-color: #c0c0c0;
background-size: cover;
background-position: center;
max-width: 100vw;
min-height: 100vh;
background-color: #0c0c0c;
text-align: center;
display: flex;
justify-content: center;
align-items: center;

`
const ContainerForm = styled.form`
width: 80%;
height: 600px;
display: grid;
align-items: center;
color: rgba(165, 55, 253, 1);

`

const Select = styled.select`
width: 60%;
margin: 0 auto;
border-radius: 4px;
border: 1px solid white;
background-color:rgba(102, 51, 153, 1); 
height: 50px;
color: lightgrey;
padding-left: 10px;
cursor: pointer;
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
font-weight: bold;

`
const Input = styled.input`
width: 60%;
margin: 0 auto;
border-radius: 4px;
border: 1px solid white;
background-color:rgba(102, 51, 153, 1); 
height: 50px;
color: white;
padding-left: 10px;
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
::placeholder{
  color: lightgrey;
  opacity: 1;
}
`
const ContainerButton = styled.div`
margin: 15px 0px;
display: grid;
grid-template-columns: 150px 150px;
gap: 10px;
justify-content: center;

`

const P = styled.p`
text-align: left;
padding: 6px;
font-size: 20px;
color: rgba(102, 51, 153, 1);
`

const ButtonBack = styled.button`
background-color: white;
border: 1px solid gray;
color:  rgba(165, 55, 253, 1);
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
padding: 15px 10px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: transparent;
    color: white;
}
:active{
    background-color: white;
}

`

const ButtonSubmit = styled.button`
background-color: rgba(102, 51, 153, 1);
border: 1px solid #0c0c0c;
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
color: white;
padding: 15px 10px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: rgba(213, 184, 255, 1);
    border: 0.1rem solid rgba(213, 184, 255, 1);
}
:active{
    background-color: rgba(102, 51, 153, 1)
}
`

export function ApplicationFormPage(){
    const history = useHistory()

    const GoToListTripsPage = () => {
        history.push('/trips/list')
    }

    return (
        <>
         <ContainerApplicationFormPage>
            <ContainerForm>
            <h1>Inscreva-se para uma viagem Interstellar!</h1>
                <Select>
                    <option  disabled selected >Escolha uma viagem</option>
                    <option>Escolha uma viagem</option>
                    <option>Escolha uma viagem</option>
                </Select>
                <Input placeholder='Digite o seu nome'/>
                <Input placeholder='Digite sua idade'/>
                <Input placeholder='Digite sua profissão'/>
                <Select>
                    <option  disabled selected >Escolha um país</option>
                    <option>Brasil</option>
                    <option>EUA</option>
                </Select>
                <ContainerButton>
                <ButtonBack onClick={GoToListTripsPage}>Voltar</ButtonBack>
                <ButtonSubmit>Enviar</ButtonSubmit>
                </ContainerButton>
                
            </ContainerForm>
        
            
         </ContainerApplicationFormPage>
      
        </>
    )
}