import React from 'react'
import axios from 'axios'
import {ContainerPlayVisualizar, ContainerBotao, ContainerLista, BotaoDeletar, BotaoVoltar} from './styled'
import PlaylistDetalhes from '../PlaylistDetalhes/PlaylistDetalhes'

class VisualizarPlaylist extends React.Component {
    state = {
        playlist : [],
        playlistmusicas: [],
        playListClicada: '',
        nomePlaylist: '',
        paginaAtual: 'visualizarPlay'

    }


    vaiParaTelaVisualizarPlay = () =>{
        this.setState({paginaAtual: 'visualizarPlay', playListClicada: '', })
      }

    componentDidMount =() =>{
        this.pegarPlaylist()
    }

    pegarPlaylist = async () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        try{
            const response = await axios.get(url,{headers: {Authorization: 'lucas-ferreira-johnson'}})
            this.setState({playlist: response.data.result.list})

        } catch(err){
            alert(err.response)

        }

        
        
    }

    irParaPaginaDetalhes = (idPlaylist, nomeDaPlaylist) => {
        this.setState({paginaAtual: 'detalhesPlay', playListClicada: idPlaylist, nomePlaylist: nomeDaPlaylist })
    }

    deletarPlaylist = async (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        try{
            const response = await axios.delete(url,{
                headers: {Authorization: 'lucas-ferreira-johnson'}
            })
    
            this.pegarPlaylist()
        
        } catch(err){
            alert(err.response)

        }
      
     }

     

    render() {
        const PlayList = this.state.playlist.map((item) => {
            return <div key={item.id}>
                       <ContainerLista>
                          <div onClick = {() => this.irParaPaginaDetalhes(item.id, item.name)}>{item.name}</div>
                          <div>
                          <BotaoDeletar onClick={() => this.deletarPlaylist(item.id)}>Deletar</BotaoDeletar>
                            </div> 
                       </ContainerLista>
                  </div>
        })
        
        return(
            <ContainerPlayVisualizar>
                {this.state.paginaAtual === 'visualizarPlay'  ? <>
                <h1>Veja suas melhores playlists aqui :)
                    <br/></h1>
                    {PlayList}
                    <ContainerBotao>
                    <BotaoVoltar onClick={()=> this.props.mudarTela('criarPlay')}>Voltar</BotaoVoltar>
                    </ContainerBotao>
            
                </>: <PlaylistDetalhes nomePlaylist={this.state.nomePlaylist} playListClicada={this.state.playListClicada} adicionarMusica={this.adicionarMusica} vaiParaTelaVisualizarPlay={this.vaiParaTelaVisualizarPlay}/>}
                
            </ContainerPlayVisualizar>
            )
    }
}

export default VisualizarPlaylist