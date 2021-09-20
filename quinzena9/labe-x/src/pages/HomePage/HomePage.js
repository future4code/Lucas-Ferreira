import React from "react";
import {ContainerHome, ContainerBackImage, ButtonPublic, ButtonPrivate} from './styled'
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import {goToListTripsPage, goToLoginPage} from '../../router/Coordinator'





export function HomePage(){
    const history = useHistory()

    return (
        <>
        <ContainerHome>
            <Header />
        <ContainerBackImage>
        <ButtonPublic onClick={()=> goToListTripsPage(history)}> Viagens <br/> Planetárias :)</ButtonPublic>
        <ButtonPrivate onClick={()=> goToLoginPage(history)}> Àrea Adm</ButtonPrivate>
        </ContainerBackImage>
        </ContainerHome>
        </>
    )
}

