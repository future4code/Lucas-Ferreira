import React from 'react'
import axios from 'axios'
import {Audio, ContainerMusicas, 
Musica, ContainerNomePlay, 
BotaoDeletar, ContainerCriarMusica, 
BotaoCriarMusica, InputCriarMusica, BotaoVoltar, ContainerBotao, ContainerPai} from './styled'

class PlaylistDetalhes extends React.Component {

   state = {
       inputNome: '',
       inputArtista: '',
       inputUrl: '',
       musicas: []

   }

   onChangeNome = (event) => {
    this.setState({inputNome: event.target.value})
    }   

    onChangeArtista = (event) => {
    this.setState({inputArtista: event.target.value})
    } 
    
    onChangeUrl = (event) => {
    this.setState({inputUrl: event.target.value})
    }

   componentDidMount() {
     this.pegarMusicas()

    }

    pegarMusicas = async () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListClicada}/tracks`

        try{
            const response = await axios.get(url,{headers: {Authorization: 'lucas-ferreira-johnson'}})
            this.setState({musicas: response.data.result.tracks})
            console.log(response.data)
            
    
        } catch(err){
            alert(err.response)
    }

   }
   
   
   adicionarMusica = async () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListClicada}/tracks`
    try{
     const result = await axios.post(url, 
     {name: this.state.inputNome, artist: this.state.inputArtista, url: this.state.inputUrl}, 
     {headers: {Authorization: 'lucas-ferreira-johnson'}})

     this.setState({inputNome: '', inputArtista: '', inputUrl: ''})
     this.pegarMusicas()

    }catch(err){
        alert(err.message)
    }
   

}

deletarMusica = async (idMusica) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListClicada}/tracks/${idMusica}`

    try{
        const response = await axios.delete(url,{
            headers: {Authorization: 'lucas-ferreira-johnson'}
        })
        
        this.pegarMusicas()
    
    } catch(err){
        alert(err.response)

    }
  
 }
   
 
    render() {
      
        return(
            <ContainerPai>
            <h1>Olhe suas playlists com mais detalhes!
            <br/></h1>
            <h3>Se você ainda não possuir músicas, vamos adicionar algumas, dar play e curtir? <br/> :) </h3>
            <ContainerMusicas>
            <ContainerNomePlay>
            {this.props.nomePlaylist}
            </ContainerNomePlay>
            {this.state.musicas.map((item) =>{
                return <Musica>
                 <div>
                 {item.name} 
                 </div>
                 <Audio src={item.url} controls= 'controls'></Audio>
                 <div>
                 <BotaoDeletar onClick = {() => this.deletarMusica(item.id)}>Deletar</BotaoDeletar>
                 </div>
                </Musica>
            })}
            </ContainerMusicas>
             <ContainerCriarMusica>
            <InputCriarMusica placeholder ='Nome da musica' value = {this.state.inputNome} onChange={this.onChangeNome}></InputCriarMusica>
            <InputCriarMusica placeholder ='Artista/Banda' value = {this.state.inputArtista} onChange={this.onChangeArtista}></InputCriarMusica>
            <InputCriarMusica placeholder ='Url da Música' value = {this.state.inputUrl} onChange={this.onChangeUrl}></InputCriarMusica>
            </ContainerCriarMusica>
            <ContainerBotao>
            <BotaoCriarMusica onClick = {this.adicionarMusica}>Criar Musica</BotaoCriarMusica>
            <BotaoVoltar onClick={this.props.vaiParaTelaVisualizarPlay}>Voltar</BotaoVoltar>
            </ContainerBotao>     
    </ContainerPai>
            )
    }
}

export default PlaylistDetalhes