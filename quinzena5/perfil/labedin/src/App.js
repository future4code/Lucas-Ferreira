import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/60482900?v=4" 
          nome="Lucas Veras" 
          descricao="Oi, eu sou o Lucas. Sou técnico em informática, formado em Análise e Desenvolvimento de Sistemas e aluno da Labenu. Adoro codar e ver as coisas funcionando na tela como resultado do meu esforço."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno></CardPequeno>

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.khomp.com/wp-content/uploads/2017/01/AlmaViva700x400.png" 
          nome="Alma Viva" 
          descricao="Operador BackOffice e atendimento." 
        />
        
        <CardGrande 
          imagem="https://mir-s3-cdn-cf.behance.net/projects/404/25003e100932447.Y3JvcCwxMTM2LDg4OSwxODAsMA.png" 
          nome="Hospital da Polícia Miliar" 
          descricao="Técnico em informática." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
