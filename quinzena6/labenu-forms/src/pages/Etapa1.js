import React from 'react';
import styled from 'styled-components';


export class Etapa1 extends React.Component {

    render() {


        return (
            <>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <form>
                <ol>
                    <li>
                        <div>Qual o seu nome?</div>
                        <input></input>
                    </li>
                    <li>
                        <div>Qual o seu nome?</div>
                        <input></input>
                    </li>
                    <li>
                        <div>Qual o seu nome?</div>
                        <input></input>
                    </li>
                    <li>
                        <div>Qual o seu nome?</div>
                        <input></input>
                    </li>
                    <li>
                        <div>Qual sua escolaridade? </div>
                    <select>
                       <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                       <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                       <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                       <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                    </select>
                    </li>
                </ol>
            </form>
            </>
            )
        

        
    }
}