import React from 'react';
import styled from 'styled-components';

export class Etapa3 extends React.Component {

    render() {


        return (
            <>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DO ENSINO</h1>
             <div>
                 <p>5 - Por que você não terminou um curso de graduação</p>
                 <input></input>
             </div>

             <div>
                 <p>6 - Você fez algum curso complementar?</p>
                 <select>
                       <option value="Curso técnico">Curso técnico</option>
                       <option value="Cursos de inglês">Cursos de inglês</option>
                       <option value="Não fiz curso complementar">Não fiz curso complementar</option>
                    </select>
             </div>
            </>
            )
        

        
    }
}