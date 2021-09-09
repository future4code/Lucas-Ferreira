import './App.css';
import styled from 'styled-components'
import CardPrincipal from './components/CardPrincipal/CardPrincipal';
import CardPerfis from './components/CardPerfis/CardPerfis';
import React, {useState,useEffect} from 'react';
import axios from 'axios';


const ContainerPaiApp = styled.div`
background-color: gray;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ContainerBotaoLimpar = styled.div`
margin-top: 30px;

`

const BotaoLimpar = styled.button`
padding: 10px 20px;
background-color: #6F00FF;
border: none;
border-radius: 4px;
color: white;
box-shadow: 0 0 1em gray;
cursor: pointer;
:hover{background-color: darkblue; color: white;}
`


function App() {

const [paginaAtual,setPaginaAtual] = useState('PaginaCardPrincipal')
const [perfil, setPerfil] = useState({})
const [perfisCurtidos, setPerfisCurtidos] = useState([])

const mostrarPerfil = () => {
  axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-veras/person').then((response) => {
    setPerfil(response.data.profile)
    })
}


const escolherPerfil = (Id,Choice) =>{

  const body = {id:Id, choice: Choice}

  axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-veras/choose-person', body).then((response)=>{
    mostrarPerfil()
  })
  
}

const rejeitarPerfil = (Id,Choice) =>{

  const body = {id:Id, choice: Choice}

  axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-veras/choose-person', body).then((response)=>{
    mostrarPerfil()
  })
  
}



const pegarPerfisCurtidos = async () => {

  try{
    setPaginaAtual('PaginaCardPerfis')
    const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-veras/matches')
      setPerfisCurtidos(response.data.matches)
     

  } catch(err) {
    alert(err.message)
  } 

}

useEffect(() => {
  mostrarPerfil()
}, []);




const EscolherPagina = () => {
  switch(paginaAtual){
    case 'PaginaCardPrincipal':
      return <CardPrincipal pegarPerfisCurtidos={pegarPerfisCurtidos} perfil={perfil} escolherPerfil={escolherPerfil} rejeitarPerfil={rejeitarPerfil}/>
    
    case 'PaginaCardPerfis':
      return <CardPerfis mudarParaCardPrincipal={mudarParaCardPrincipal} perfisCurtidos={perfisCurtidos} />
    
    default:
      return <CardPrincipal perfil={perfil} escolherPerfil={escolherPerfil} rejeitarPerfil={rejeitarPerfil}/>

  }
 
}



const mudarParaCardPrincipal = ()  => {
  setPaginaAtual('PaginaCardPrincipal')
}

const resetar = () =>{
  axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-veras/clear").then((response) => {
    pegarPerfisCurtidos()
  
    

  })
  
}

  return (
   
    <ContainerPaiApp>
      {EscolherPagina()}
     <ContainerBotaoLimpar>
       <BotaoLimpar onClick ={resetar}>LIMPAR</BotaoLimpar>
       </ContainerBotaoLimpar>
    </ContainerPaiApp>
  );
}

export default App;
