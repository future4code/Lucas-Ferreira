import React from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import useForm from "../../hooks/useForm";
import { goToHomePage } from '../../router/Coordinator'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ContainerLoginPage, ButtonBack, ButtonSubmit, ContainerButton, Form, Input, } from './styled'
import useUnProtectedPage from '../../hooks/useUnprotectedPage'

export function LoginPage() {
    useUnProtectedPage()
    const { form, onChange, clean } = useForm({
        email: '',
        password: '',
    })
    
    const history = useHistory()
    const MySwal = withReactContent(Swal)


    const onRegister = (event) => {
        event.preventDefault()

        const body = {
            email: form.email,
            password: form.password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-veras-johnson/login', body).then((response) => {
            localStorage.setItem('token', response.data.token)
            history.push('/admin/trips/list')
        }).catch((error) => {
            MySwal.fire(
                'Usuário não encontrado, tente novamente.',
                '',
                'error'
            )
        })

        clean()

    }

    return (
        <>
            <ContainerLoginPage>
                <Form onSubmit={onRegister}>
                    <Input
                        name={'email'}
                        onChange={onChange}
                        placeholder='Email'
                        value={form.email}
                        type='email'
                        requerid
                    ></Input>

                    <Input
                        name={'password'}
                        onChange={onChange}
                        placeholder='Senha'
                        value={form.password}
                        type='password'
                        requerid
                    ></Input>

                    <ContainerButton>
                        <ButtonBack onClick={() => goToHomePage(history)}>Voltar</ButtonBack>
                        <ButtonSubmit>Entrar</ButtonSubmit>
                    </ContainerButton>
                </Form>


            </ContainerLoginPage>
        </>
    )
}