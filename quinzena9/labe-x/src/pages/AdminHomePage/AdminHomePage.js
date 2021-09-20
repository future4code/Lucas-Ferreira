import React, {useEffect} from 'react'
import { useHistory} from "react-router-dom";
import useProtectedPage  from '../../hooks/useProtectedPage';
import { goToCreateTripPage, goToHomePage, goToTripDetailsPage, goToLoginPage } from '../../router/Coordinator'
import {ContainerAdminHomePage, ContainerButton, ButtonBack, ButtonSubmit, ButtonLogout, ListItem, P, ButtonRemove, ContainerListItem, H1} from './styled'
import Header from "../../components/Header";
import axios from 'axios'



export function AdminHomePage (props){
    useProtectedPage()

    const history = useHistory()
    console.log('history', history)

   useEffect(() => {
        props.getTrips()
   }, []);

   const deleteTrip = (id) =>{
       const token = localStorage.getItem('token')
       axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-veras-johnson/trips/${id}`, {
        headers:
        { auth: token }
       }).then((response) => {

           props.getTrips()

       })

   }

   const Logout = () => {
       localStorage.removeItem('token')
       goToLoginPage(history)

   }

   const Trips = props.trips.map((item) => {
    return  <ListItem key={item.id}>
    <P onClick={()=> goToTripDetailsPage(history,item.id)}>{item.name}</P>
    <ButtonRemove onClick={()=> deleteTrip(item.id)}>Excluir</ButtonRemove>
    </ListItem>
   })


    return(
        <>
        <Header/>
        <ContainerAdminHomePage>
            <H1>Painel Administrativo</H1>
            <ContainerButton>
                <ButtonBack onClick={()=> goToHomePage(history)}>Voltar</ButtonBack>
                <ButtonSubmit onClick={()=> goToCreateTripPage(history)}>Criar viagem</ButtonSubmit>
                <ButtonLogout onClick={Logout}>Logout</ButtonLogout>
            </ContainerButton>
             {props.isLoading && <p>Carregando...</p>}
             {!props.isLoading && props.error && <p>Ocorreu um erro.</p>}
             {!props.isLoading && props.trips && props.trips.length > 0 && 
             <ContainerListItem>{Trips}</ContainerListItem>}
             {!props.isLoading && props.trips && props.trips.length === 0 && <p>Não há dados, adicione uma viagem...</p>}
        </ContainerAdminHomePage>
        </>
    )
}