import React from 'react';
import styled from 'styled-components'

const LittleCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    

    div{
    padding: 30px;
    border: 1px solid black;
    margin-bottom: 5px;
   
    }
`
const Img = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const Nome = styled.h4`
    margin-bottom: 15px;
  
`


function CardPequeno() {
    return (
        <LittleCard>
            <div>
            <b>Email:</b><a href="mailto:veraslucas669@gmail.com"> veraslucas669@gmail.com</a>
            </div>
            <div>
            <b>Email:</b> Rua dos bobos, Numero: 0, Teresina-PI.
            </div>
        </LittleCard>
    )
}

export default CardPequeno;