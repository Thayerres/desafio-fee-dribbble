import { useState } from "react"
import Button from "../../components/Button"
import Container from "../../components/Container"
import  Input  from "../../components/Input"
import Sidebar from "../../components/Sidebar"
import { ButtonCantainer, Content, Form, Main, Member, Title } from "./styles"
import { toast } from "react-toastify"
import validateEmail from "../../utils/validateEmail"
import api from "../../services/api"
import { Link, useHistory } from "react-router-dom"
import { IAuth, useGlobalState } from "../../Context/GlobalContext"


const SignIn = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { setAuth } = useGlobalState()
    const history = useHistory()

    const isDisabled = email === '' || password === '' || loading

    const loginAccount = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        const validation = validateFields();
        if(typeof validation === 'string'){
            toast.error(validation)
            return
        }
        setLoading(true)
        try{
            const { data } = await api.post<IAuth>("/login",{
                email,
                password
            })
            setAuth(data)
            clearFields()
            history.push('/')
        } catch(error) {
            toast.error(error?.response?.data?.message || "Unable to enter")
        }
        setLoading(false)        
    }

    const validateFields = () => {
        if (email === '' || password === '') {
            return 'Você deve preencher todos os campos'
        }

        if (!validateEmail(email)) {
            return 'E-mail inválido'
        }

        if (password.length < 8) {
            return 'A senha deve ter no mínimo 8 caracteres'
        }

        return true
    }

    const clearFields = () => {
        setEmail("")
        setPassword("")
    }

    return (
        <Container>
            <Sidebar />
            <Content>
                <Member>
                    <p>Not a Member?
                        <Link to="/signup"> 
                            <span> Sign up now</span>
                        </Link>
                    </p>
                </Member>
                <Main>
                    <Form onSubmit={loginAccount}>
                        <Title>Sign in to Dribbble</Title>
                        <Input label="Email" value={email} setValue={setEmail} type="email" />
                        <Input label="Password" value={password} setValue={setPassword} type="password" />
                        <ButtonCantainer> 
                            <Button type="submit" disabled={isDisabled}>Sign In Account</Button>
                        </ButtonCantainer>
                    </Form>
                </Main>
            </Content>
        </Container>
    )
}

export default SignIn