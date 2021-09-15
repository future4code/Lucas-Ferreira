import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ContainerListTripPage = styled.div`
background-image: url('https://cdn.pixabay.com/photo/2020/09/10/03/02/mountains-5559099_960_720.png');
background-size: cover;
background-position: center;
max-width: 100vw;
min-height: 100vh;
background-color: #0c0c0c;
text-align: center;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;

`

const ContainerButtons = styled.div`
margin: 15px 0px;
display: grid;
grid-template-columns: 150px 150px;
gap: 10px;

`

const ButtonReturn = styled.button`
background-color: Transparent;
border: 1px solid gray;
box-shadow: 0 20px 20px -15px rgba(102, 51, 153, 1);
cursor: pointer;
color: white;
padding: 15px 10px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: rgba(213, 184, 255, 1);
}
:active{
    background-color: transparent;
}


`


const ButtonRegister = styled.button`
background-color: rgba(102, 51, 153, 1);
border: 1px solid #0c0c0c;
box-shadow: 0 0 2em rgba(102, 51, 153, 1);
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

const ListItem = styled.div`
background-color: white;
border-radius: 4px;
box-shadow: 5px 5px 5px rgba(102, 51, 153, 1);
width: 70%;
margin: 15px auto;
`

const P = styled.p`
text-align: left;
margin-left: 8px;
padding: 7px;
font-size: 20px;
color: rgba(102, 51, 153, 1);
`
const H1 = styled.h1`
color: white;
`

export function ListTripsPage(props){
    const history = useHistory()

    const GoToHomePage = () => {
        history.push('/')
    }

    const GoToApplicationFormPage = () => {
        history.push('/trips/application')
    }

    console.log(props.trips)


    return (
        <>
         <ContainerListTripPage>
             <ContainerButtons>
             <ButtonReturn onClick={GoToHomePage}>Home</ButtonReturn>
             <ButtonRegister onClick={GoToApplicationFormPage}>Increver-se</ButtonRegister>
             </ContainerButtons>
             <H1>Lista de Viagens</H1>
             {props.trips.map((item)=>{
                 return  <ListItem key={item.id}>
                 <P><b>Nome:</b>&nbsp;{item.name}</P>
                 <P><b>Descrição:</b>&nbsp; {item.description}</P>
                 <P><b>Planeta:</b>&nbsp; {item.planet}</P>
                 <P><b>Duração:</b>&nbsp; {item.durationInDays} dias</P>
                 <P><b>Data:</b>&nbsp; {item.date}</P>
                 </ListItem>
             })}
         </ContainerListTripPage>
      
        </>
    )
}