import React, {useState,useEffect} from 'react'
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useProtectedPage  from '../../customHooks/useProtectedPage';
import axios from 'axios'


const ContainerTripDetailsPage = styled.div`
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
const DetailsPage = styled.div`
width: 80%;
height: 70vh;
display: grid;
align-items: center;
color: black;
justify-content: center;
`
const P = styled.p`
text-align: left;
padding: 6px;
font-size: 20px;
color: rgba(102, 51, 153, 1);
`
const ContainerPendingCandidates = styled.div`
background-color: white;
border-radius: 4px;
box-shadow: 5px 5px 5px rgba(102, 51, 153, 1);
width: 100%;
height: 230 px;
margin: 15px auto;
padding: 20px;
`

const ContainerButton = styled.div`
margin: 15px 0px;
display: grid;
grid-template-columns: 100px 100px;
gap: 80px;
justify-content: center;

`
const ButtonReprove = styled.button`
background-color: white;
border: 1px solid gray;
color:  rgba(165, 55, 253, 1);
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
padding: 5px 5px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: #0c0c0c;
    color: white;

}
:active{
    background-color: white;
}
`
const ButtonAprove = styled.button`
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

const ButtonBack = styled.button`
background-color: white;
border: 1px solid gray;
color:  rgba(165, 55, 253, 1);
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
width: 100px;
margin-top: 100px;
padding: 15px 10px;
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

export function TripDetailsPage (props){
    const[trip, setTrip] = useState({})
    
    useProtectedPage()

    const history = useHistory()

    const GoToAdminHomePage = () => {
        history.push('/admin/trips/list')
    }

    useEffect(() => {
      const token = localStorage.getItem('token')
      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-veras-ferreira/trip/${props.idTrips}`, 
      {headers:
        {auth:token} }
    ).then((response)=>{
          console.log('Detalhes, deu certo', response.data)
      }).catch((error) =>{
          console.log('deu erro', error.response)
      })
    },[]);
   
    console.log(props.idTrips)

    return(
        <>
       
        <ContainerTripDetailsPage>
             <DetailsPage>
                 <div>
                     <h1>Marte</h1>
                 </div>

                 <div>
                 <P><b>Nome:</b> Lucas</P>
                 <P><b>Descrição:</b> Vamos para a Marte conhecer a terra vermelha!</P>
                 <P><b>Planeta:</b> Marte</P>
                 <P><b>Duração:</b> 50</P>
                 <P><b>Data:</b> 2021-09-30</P>
                 </div>

                 <div>
                     <h1>Candidatos Pendentes</h1>
                 </div>

                 <ContainerPendingCandidates>
                 <P><b>Nome:</b> Lucas</P>
                 <P><b>Profissão:</b> Desenvolvedor</P>
                 <P><b>Idade:</b> 26</P>
                 <P><b>País:</b> Brasil </P>
                 <ContainerButton>
                 <ButtonReprove>Reprovar</ButtonReprove>
                 <ButtonAprove>Aprovar</ButtonAprove>
                 </ContainerButton>
                 
                 </ContainerPendingCandidates>

                 <div>
                     <h1>Candidatos Aprovados</h1>
                 </div>

                 <div>
                     <p>Jéssika</p>
                 </div>
             </DetailsPage>
             <ButtonBack onClick={GoToAdminHomePage}>Voltar</ButtonBack>
        </ContainerTripDetailsPage>
        </>
    )
}