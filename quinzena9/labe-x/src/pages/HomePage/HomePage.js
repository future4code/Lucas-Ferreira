import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ContainerHome = styled.div`
max-height: 100vh;
max-width: 100vw;

`
const Header = styled.header`
width: 100%;
height: 50px;
background-color: white;
text-align: center;
padding-top: 4px;
color: rgba(102, 51, 153, 1);;
`

const ContainerBackImage = styled.div`
background-image: url('https://cdn.pixabay.com/photo/2020/09/10/03/02/mountains-5559099_960_720.png');
background-size: cover;
background-position: center;
height: 80vh;
display: grid;
grid-template-columns: 1fr 1fr;


`


const ButtonPublic = styled.button`
background-color: Transparent;
box-shadow: 0 20px 20px -15px rgba(102, 51, 153, 1);
border: none;
cursor: pointer;
color: white;
padding: 15px 30px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: rgba(213, 184, 255, 1);
}
:active{
    background-color: transparent;
}


`

const ButtonPrivate = styled.button`
background-color: rgba(102, 51, 153, 1);
border: 1px solid #0c0c0c;
box-shadow: 0 0 2em rgba(102, 51, 153, 1);
cursor: pointer;
color: white;
padding: 15px 35px;
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


export function HomePage(){
    const history = useHistory()

    const GoToTripsPage = () => {
        history.push('/trips/list')
    }

    const GoToLogin = () => {
        history.push('/login')
    }


    return (
        <>
        <ContainerHome>
        <Header><h1>LabeX</h1></Header>  
        <ContainerBackImage>
        <ButtonPublic onClick={GoToTripsPage}>Viagens <br/> Planetárias :)</ButtonPublic>
        <ButtonPrivate onClick={GoToLogin}>Àrea Adm</ButtonPrivate>
        </ContainerBackImage>
        </ContainerHome>
        </>
    )
}

