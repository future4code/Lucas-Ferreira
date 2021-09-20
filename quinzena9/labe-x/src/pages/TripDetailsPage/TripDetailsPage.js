import React, { useState, useEffect } from 'react'
import {Container, ContainerTripDetailsPage, 
DetailsPage, P, ContainerPendingCandidates, ContainerButton, ButtonReprove, ButtonAprove,  ButtonBack, ContainerH1, H1} from './styled'
import Header from "../../components/Header";
import { useHistory, useParams } from "react-router-dom";
import useProtectedPage from '../../hooks/useProtectedPage';
import axios from 'axios'
import { goToAdminHomePage } from '../../router/Coordinator'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export function TripDetailsPage(props) {
    const [trip, setTrip] = useState({})

    useProtectedPage()

    const history = useHistory()
    console.log('history', history)
    const params = useParams()
    console.log('Params', params)
    const MySwal = withReactContent(Swal)

    const GetTripDetail = () =>{
        const token = localStorage.getItem('token')
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-veras-johnson/trip/${params.id}`,
            {
                headers:
                    { auth: token }
            }
        ).then((response) => {
            setTrip(response.data.trip)
        }).catch((error) => {
            MySwal.fire(
                'Desculpe, algo de errado aconteceu, atualize a página!',
                '',
                'error'
                 )
        })
    }

    useEffect(() => {
        GetTripDetail()
   
    }, []);

    const Aprove = (id, approve) => {
        const token = localStorage.getItem('token')
        const body = {
            approve: approve
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-veras-johnson/trips/${params.id}/candidates/${id}/decide`,body,
        {headers: {
            auth: token
        }})
        .then((response) =>{
            MySwal.fire('Candidato aprovado com sucesso! :)')
            GetTripDetail()

        }).catch((error)=>{
            MySwal.fire(
                'Desculpe, algo de errado aconteceu, tente novamente!',
                '',
                'error'
                 )
           
        })

       
    }

    const Reprove = (id, approve) => {
        const token = localStorage.getItem('token')
        const body = {
            approve: approve
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-veras-johnson/trips/${params.id}/candidates/${id}/decide`,body,
        {headers: {
            auth: token
        }})
        .then((response) =>{
            MySwal.fire('O Candidato foi reprovado!',
            '',
            'success')
            GetTripDetail()
             

        }).catch((error)=>{
            MySwal.fire('Desculpe, algo de errado aconteceu, tente novamente!',
            '',
            'error')
        })

        
      
    }

    const candidate = trip.candidates && trip.candidates.map((item) => {
        return <ContainerPendingCandidates key={item.name}>
        <P><b>Nome:</b>&nbsp;{item.name}</P>
        <P><b>Profissão:</b>&nbsp;{item.profession}</P>
        <P><b>Idade:</b>&nbsp;{item.age} anos</P>
        <P><b>País:</b>&nbsp;{item.country}</P>

        <ContainerButton>
            <ButtonReprove onClick={()=> Reprove(item.id, false)}>Reprovar</ButtonReprove>
            <ButtonAprove onClick={()=> Aprove(item.id, true)}>Aprovar</ButtonAprove>
        </ContainerButton>
        
        </ContainerPendingCandidates>
        })  
    
    const approvedCandidates = trip.approved && trip.approved.map((item)=>{
        return <p>{item.name}</p>
    })

    return (
        <Container>
        <Header/>
         {trip.name ? 
         <ContainerTripDetailsPage>
            <DetailsPage>
                 <div>
                    <h1>{trip.name}</h1>
                </div>

                  <div>
                    <P><b>Nome:</b>&nbsp;{trip.name}</P>
                    <P><b>Descrição:</b>&nbsp;{trip.description}</P>
                    <P><b>Planeta:</b>&nbsp;{trip.planet}</P>
                    <P><b>Duração:</b>&nbsp;{trip.durationInDays} dias</P>
                    <P><b>Data:</b>&nbsp;{trip.date}</P>
                </div>


                <ContainerH1>
                    <H1>Candidatos Pendentes</H1>
                    {candidate && candidate.length > 0 ? candidate : <p>Não há candidatos pendentes.</p>}
                </ContainerH1>
                
                <ContainerH1>
                    <h1>Candidatos Aprovados</h1>   
                </ContainerH1>

                <div>
                {approvedCandidates && approvedCandidates.length > 0 ? approvedCandidates : <p>Não há candidatos aprovados.</p>}
                </div>

                
            </DetailsPage>
            <ButtonBack onClick={() => goToAdminHomePage(history)}>Voltar</ButtonBack>
        </ContainerTripDetailsPage>
          : <h1>Carregando...</h1>
         }
            
        </Container>
    )
}