import React from "react";
import {ContainerCreateTripPage, ContainerForm, Select, Input, ContainerButton, ButtonBack, ButtonSubmit} from './styled'
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import useProtectedPage from '../../hooks/useProtectedPage';
import useForm from "../../hooks/useForm";
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


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

    const MySwal = withReactContent(Swal)

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

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-veras-johnson/trips`,body,{
            headers:
                { auth: token }
        }).then((response)=>{
            MySwal.fire(
                'Sua viagem foi criada com sucesso :)',
                 '',
                 'success'
                 )
        }).catch((error)=>{
            MySwal.fire(
                'Desculpe, algo de errado aconteceu, tente novamente! :(',
                 '',
                 'error'
                 )
        })
        
        clean()
    }

    const GoToAdminHomePage = () => {
        history.push('/admin/trips/list')
    }

    return (
        <>
        <Header/>
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
                        <option value='Marte'>Marte</option>
                        <option value='Mercurio'>Mercúrio</option>
                        <option value='Venus'>Vênus</option>
                        <option value='Terra'>Terra</option>
                        <option value='Marte'>Marte</option>
                        <option value='Jupiter'>Júpiter</option>
                        <option value='Saturno'>Saturno</option>
                        <option value='Urano'>Urano</option>
                        <option value='Netuno'>Netuno</option>
                    </Select>

                    <Input
                        type='date'
                        placeholder='Data'
                        value={form.date} 
                        onChange={onChange}
                        name={'date'}
                        requerid />

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