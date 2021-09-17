import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useProtectedPage from '../../hooks/useProtectedPage';
import useForm from "../../hooks/useForm";
import axios from "axios";


const ContainerCreateTripPage = styled.div`
background-color: rgba(232, 236, 241, 1);
background-size: cover;
background-position: center;
max-width: 100vw;
min-height: 100vh;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ContainerForm = styled.form`
width: 80%;
height: 600px;
display: grid;
align-items: center;
color: black;

`

const Select = styled.select`
width: 60%;
margin: 0 auto;
border-radius: 4px;
border: 1px solid white;
background-color:rgba(102, 51, 153, 1); 
height: 50px;
color: white;
padding-left: 10px;
cursor: pointer;
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
font-weight: bold;

`
const Input = styled.input`
width: 60%;
margin: 0 auto;
border-radius: 4px;
border: 1px solid white;
background-color:rgba(102, 51, 153, 1); 
height: 50px;
color: white;
padding-left: 10px;
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
::placeholder{
  color: white;
  opacity: 1;
}
`
const ContainerButton = styled.div`
margin: 15px 0px;
display: grid;
grid-template-columns: 150px 150px;
gap: 10px;
justify-content: center;

`


const ButtonBack = styled.button`
background-color: white;
border: 1px solid gray;
color:  rgba(165, 55, 253, 1);
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
padding: 15px 10px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: rgba(165, 55, 253, 1);
    color: white;
}
:active{
    background-color: white;
}

`

const ButtonSubmit = styled.button`
background-color: rgba(3, 201, 169, 1);
border: 1px solid #0c0c0c;
box-shadow: 0 0 1em rgba(102, 51, 153, 1);
cursor: pointer;
color: white;
padding: 15px 10px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
:hover{
    background-color: #0c0c0c;
}
:active{
    background-color: rgba(102, 51, 153, 1)
}
`




export function CreateTripPage() {
    useProtectedPage()
    const history = useHistory()

    const { form, onChange, clean } = useForm({

        id: '',
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: ''

    })

    const onClickSend = (e) => {
        e.preventDefault()
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }
        const token = localStorage.getItem('token')
        console.log('Form', form)
        console.log('token', token)

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-veras-johnson/trips`,{headers: token}, body).then((response)=>{
            console.log('response', response)
        }).catch((error)=>{
            console.log('erro', error.response)
        })

    }

    const GoToAdminHomePage = () => {
        history.push('/admin/trips/list')
    }

    return (
        <>
            <ContainerCreateTripPage>
                <ContainerForm onSubmit={onClickSend}>
                    <h1>Criar Viagem Planetária</h1>
                    <Input
                        placeholder='Nome'
                        name={'name'}
                        onChange={onChange}
                        value={form.name}
                        requerid
                        pattern={"^.{5,}"}
                        title={'O nome deve ter pelo menos 5 letras.'}
                    />
                    <Select 
                        name={'planet'}
                        onChange={onChange}
                        value={form.planet}
                        requerid >
                        <option value=''>Escolha uma planeta</option>
                        <option>Marte</option>
                        <option>Mercúrio</option>
                    </Select>

                    <Input
                        type='date'
                        placeholder='Data'
                        value={form.date} 
                        onChange={onChange}
                        name={'date'}
                        requerid/>

                    <Input
                        placeholder='Descrição'
                        name={'description'}
                        onChange={onChange}
                        value={form.description}
                        requerid
                        pattern={"^.{30,}"}
                        title={'O nome deve ter pelo menos 30 caracteres.'} />

                    <Input
                        placeholder={"Duração em dias"}
                        type={"number"}
                        name={"durationInDays"}
                        value={form.durationInDays}
                        onChange={onChange}
                        required
                        min={50}
                    />
                       
                <ContainerButton>
                <ButtonBack onClick={GoToAdminHomePage}>Voltar</ButtonBack>
                <ButtonSubmit>Criar</ButtonSubmit>
                </ContainerButton>
                        
                </ContainerForm>

                
            </ContainerCreateTripPage>
        </>
    )
}