import React from "react";
import { ContainerListTripPage, ContainerButtons, ButtonReturn, ButtonRegister, ListItem, P, H1, Message, ContainerListItem } from './styled'
import { useHistory } from "react-router-dom";
import { goToHomePage, goToApplicationFormPage } from '../../router/Coordinator'



export function ListTripsPage(props) {
    const history = useHistory()


    const Trips = props.trips.map((item) => {
        return <ListItem key={item.id}>
            <P><b>Nome:</b>&nbsp;{item.name}</P>
            <P><b>Descrição:</b>&nbsp; {item.description}</P>
            <P><b>Planeta:</b>&nbsp; {item.planet}</P>
            <P><b>Duração:</b>&nbsp; {item.durationInDays} dias</P>
            <P><b>Data:</b>&nbsp; {item.date}</P>
        </ListItem>
    })

    return (
        <>
            <ContainerListTripPage>
                <ContainerButtons>
                    <ButtonReturn onClick={() => goToHomePage(history)}>Home</ButtonReturn>
                    <ButtonRegister onClick={() => goToApplicationFormPage(history)}>Increver-se</ButtonRegister>
                </ContainerButtons>
                <H1>Lista de Viagens</H1>
                {props.isLoading && <Message>Carregando...</Message>}
                {!props.isLoading && props.error && <Message>Ocorreu um erro!</Message>}
                {!props.isLoading && props.trips && props.trips.length > 0 && 
                <ContainerListItem>{Trips}</ContainerListItem>}
                {!props.isLoading && props.trips && props.trips.length === 0 && <Message>Desculpe, por enquanto ainda não temos viagens disponíveis :( </Message>}
            </ContainerListTripPage>


        </>
    )
}