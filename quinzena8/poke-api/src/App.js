import React, {useEffect, useState} from 'react';
import axios from 'axios'
import PokeCard from './components/PokeCard'
import styled from 'styled-components'


const ContainerPai = styled.div`
max-width:300px;
margin: 0 auto;
`

function App() {

  const[pokeList,setPokeList] = useState([])
  const[pokeName,setPokeName] = useState("")

  const changePokeName = (event) =>{
    setPokeName(event.target.value);
      
  }
   
  const pegaPokemon = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
      setPokeList(response.data.results);
    } catch (e) {
      console.log(e.response);
    }
  };

  
  useEffect(()=>{
    pegaPokemon()

  }, [])
  return (
    <ContainerPai>

      {/* evento onChange chama função toda vez que o usuário 
      escolhe um novo pokemon no dropdown */}
      <select onChange={changePokeName}>
       <option value={""}>Nenhum</option>
       {/* renderizando a lista de pokemons como opções do select */}
       {pokeList.map(pokemon => {
       return (
           <option key={pokemon.name} value={pokemon.name}>
             {pokemon.name}
          </option>
       );
      })}
       </select>
     {/* expressão booleana que renderiza o componente PokeCard,
      caso o valor de pokeName, no estado, seja true */}      
      {pokeName && <PokeCard pokemon={pokeName} />}

    </ContainerPai>
  );
}

export default App;

