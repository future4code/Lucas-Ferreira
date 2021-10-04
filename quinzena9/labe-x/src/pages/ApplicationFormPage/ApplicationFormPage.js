import React from "react";
import {ContainerApplicationFormPage, H1, ContainerForm, Select, Input, ContainerButton, ButtonBack, ButtonSubmit} from './styled'
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import axios from 'axios'
import {goToListTripsPage} from '../../router/Coordinator'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {countries} from '../../constants/countries'



export function ApplicationFormPage(props) {
    const history = useHistory()

    const { form, onChange, clean } = useForm({
        name: '',
        age: '',
        applicationText: '',
        profession: '',
        country: '',
        tripId: ''
    })

    const MySwal = withReactContent(Swal)

    const onClickSend = (e) => {
        e.preventDefault()
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        }
    

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-veras-johnson/trips/${form.tripId}/apply`, body).then((response) =>{
            MySwal.fire(
           'Sua inscrição foi realizada com sucesso, nosso time irá avaliar sua candidatura. Aguarde, por favor :)',
            '',
            'success'
            )
           
        }).catch((error)=>{
            MySwal.fire(
                'Desculpe, tivemos um probleminha. Tente novamente, por favor :(',
                 '',
                 'error'
                 )
        
        })
        
        clean()
    }

    const TripsOptions = props.trips && props.trips.map((item) => {
        return <option key={item.id} value={item.id}> {item.name}</option>
    })

    return (
        <>
            <ContainerApplicationFormPage>
                <H1>Inscreva-se para uma viagem Planetária!</H1>
                <ContainerForm onSubmit={onClickSend}>
                    <Select required name={'tripId'} value={form.tripId} onChange={onChange}>
                        <option value= '' >Escolha uma viagem</option>
                        {TripsOptions}
                    </Select>
                    <Input
                        name={'name'}
                        onChange={onChange}
                        value={form.name}
                        requerid
                        pattern={"^.{3,}"}
                        title={'O nome deve ter pelo menos 3 letras.'}
                        placeholder='Digite o seu nome' />

                    <Input
                        name={'age'}
                        onChange={onChange}
                        value={form.age}
                        requerid
                        type={"number"}
                        min={18}
                        placeholder='Digite sua idade' />

                    <Input
                        name={'applicationText'}
                        onChange={onChange}
                        value={form.applicationText}
                        requerid
                        pattern={"^.{30,}"}
                        title={'O texto deve ter no mínimo 30 caracteres.'}
                        placeholder='Texto de candidatura (ex: "Sou um bom candidato por X, Y e Z")' />

                    <Input
                        name={'profession'}
                        onChange={onChange}
                        value={form.profession}
                        requerid
                        pattern={"^.{10,}"}
                        title={'A profissão deve ter no mínimo 10 caracteres.'}
                        placeholder='Digite sua profissão' />

                    <Select required name={'country'} value={form.country} onChange={onChange} placeholder='Escolha um país'>
                        {countries.map((country)=>{
                            return <option value={country} key={country}>{country}</option>
                        })}
                        
                    </Select>
                    <ContainerButton>
                        <ButtonBack onClick={()=> goToListTripsPage(history)}>Voltar</ButtonBack>
                        <ButtonSubmit>Enviar</ButtonSubmit>
                    </ContainerButton>
                </ContainerForm>
                    
            </ContainerApplicationFormPage>

        </>
    )
}