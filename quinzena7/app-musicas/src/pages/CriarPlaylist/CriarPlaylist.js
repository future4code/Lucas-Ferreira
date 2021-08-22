import React from 'react'
import axios from 'axios'
import {ContainerCriarPlay, ContainerBotao, Botao, Input, BotaoIrParaLista} from './styled'

class CriarPlaylist extends React.Component {
    
    state = {
        inputPlaylist : ''
    }

    onChangeInputValue = (e) =>{
        this.setState({inputPlaylist: e.target.value})
    }

    criarPlaylist = async () =>{
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {name: this.state.inputPlaylist}

        try {
            const response = await axios.post(url, body,{headers: {Authorization: 'lucas-ferreira-johnson'}})
            this.setState({inputPlaylist: ''})
            alert('Playlist cadastrada com sucesso')

        } catch (err) {
            if(err.response.data.message === 'There already is a playlist with a similiar name.'){
                alert('Já existe uma lista de reprodução com um nome semelhante. Por favor tente com um nome diferente!')
            }
           
        }
    }


    render() {
        return(
            <ContainerCriarPlay>
                <h1>Crie suas melhores playlists aqui :)
                    <br/></h1>
                    <h3>Digite abaixo o nome da sua playlist!</h3>
                    <Input 
                    value={this.state.inputPlaylist}
                    onChange={this.onChangeInputValue}
                    ></Input>
                    <ContainerBotao>
                    <Botao onClick = {this.criarPlaylist}>Criar Playlist</Botao>
                    <BotaoIrParaLista onClick={()=> this.props.mudarTela('visualizarPlay')}>Ir para Lista de Playlists</BotaoIrParaLista>
                    </ContainerBotao>
                   
            </ContainerCriarPlay>
            )
    }
}

export default CriarPlaylist