import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const HeaderContainer = styled.div`
background-color: white;
text-align: center;
padding-top: 4px;
height: 70px;
width: 100%;
margin-bottom: 10px;

`
const ImageLogo = styled.img`
height: 100%;
`

const Header = () =>{
    return( 
        <>
         <HeaderContainer>
            <ImageLogo src={logo}></ImageLogo>  
        </HeaderContainer>
        </>
    )
}

export default Header