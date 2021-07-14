import React from 'react';
import './App.css';
import video1 from './image/image1.jpg'
import video2 from './image/image2.jpg';
import video3 from './image/image3.jpg';
import video4 from './image/image4.jpg';
import video5 from './image/image5.jpg';
import video6 from './image/image6.jpg';
import video7 from './image/image7.jpg';
import video8 from './image/image8.jpg';


function App() {

   const titulo = "Título do vídeo"


   function reproduzVideo () {
     alert("O vídeo está sendo reproduzido")
   }



  return (
    <div>
      <div className="tela-inteira">
        <header>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr/>
                    <li className="botoes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src={video1} alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src={video2} alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src={video3} alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src={video4} alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src={video5} alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src={video6} alt=""/> 
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src={video7} alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src={video8} alt=""/>
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
    
    </div>
  );
}

export default App;
