import React from 'react';
import styled from 'styled-components'

const BigCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

    div{
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
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

function CardGrande(props) {
    return (
        <BigCard>
            <Img src={ props.imagem } />
            <div>
                <Nome>{ props.nome }</Nome>
                <p>{ props.descricao }</p>
            </div>
        </BigCard>
    )
}

export default CardGrande;