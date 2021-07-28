import React from 'react';
import styled from 'styled-components'
import {Etapa1} from './pages/Etapa1'
import {Etapa2} from './pages/Etapa2'
import {Etapa3} from './pages/Etapa3'
import {Final} from './pages/Final'


// const ContainerPaiApp = styled.div`
//     width: 400px;
//     margin: 0 auto;
  
    

// `






export class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () =>{

    switch(this.state.etapa){
      case 1: 
      return <Etapa1/>;
      break;
      case 2: return <Etapa2/>;
      break;
      case 3: return <Etapa3/>;
      break;
      case 4: return <Final/>;

    }
    
  }

  irParaProximaEtapa = () =>{
    var valorAtual = this.state.etapa
    this.setState({
      etapa: valorAtual += 1
    } )

  }


  render(){
  

    return (
      <div>
        {this.renderizaEtapa()}
        <button onClick={this.irParaProximaEtapa}>Prosseguir</button>
      </div>
    );

  }
  
}

export default App;
