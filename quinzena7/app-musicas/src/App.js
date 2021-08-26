import React from 'react'
import CriarPlaylist from './pages/CriarPlaylist/CriarPlaylist'
import VisualizarPlaylist from './pages/VisualizarPlaylist/VisualizarPlaylist'
import styled from 'styled-components'

const ContainerPai = styled.div`
background: #132235;
color: #00ff00;
min-height: 100vh;

`


class App extends React.Component {
  state = {
    paginaAtual: 'criarPlay',
  }
  mudarTela = (nomeTela) =>{
    this.setState({paginaAtual: nomeTela})
  }
  
  escolherPagina = () =>{
    switch(this.state.paginaAtual) {
      case 'criarPlay':
          return <CriarPlaylist mudarTela={this.mudarTela}/>
      case 'visualizarPlay':
          return <VisualizarPlaylist mudarTela={this.mudarTela} />
      default:
         return <CriarPlaylist mudarTela={this.mudarTela} />
    }

  }

  

  render() {
    console.log(this.state.playList)
    return (
      <ContainerPai>
        {this.escolherPagina()}
      </ContainerPai>
    );
  }
}



export default App;
