import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		valorComentario: '',
	}

	onChangeComentario = (event) => {
		this.setState({valorComentario: event.target.value})
		console.log(event.target.value)

	}

	render() {
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				onChange={this.onChangeComentario}
				value={this.state.valorcomentario}
				
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}


