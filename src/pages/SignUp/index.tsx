import { useState } from "react"
import Button from "../../components/Button"
import Container from "../../components/Container"
import  Input  from "../../components/Input"
import Sidebar from "../../components/Sidebar"
import { ButtonCantainer, Content, Form, Main, Member, Title } from "./styles"
import { toast } from "react-toastify"
import validateEmail from "../../utils/validateEmail"
import api from "../../services/api"
import { Link } from "react-router-dom"


const SignUp = () => {
    const [name, setName] = useState('')
    const [bio,setBio] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const isDisabled = name === '' || bio === '' || email === '' || password === '' || loading

    const createUser = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        const validation = validateFields();
        if(typeof validation === 'string'){
            toast.error(validation)
        }

        setLoading(true)
        try{
            await api.post("/users",{
                name,
                bio,
                email,
                password
            })
            toast.success('Created account successfully!')
            clearFields()
        } catch(error) {
            toast.error(error?.response?.data?.message)
        }
        setLoading(false)        
    }

    const validateFields = () => {
        if (name === '' || bio === '' || email === '' || password === '') {
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
        setName("")
        setBio("")
        setEmail("")
        setPassword("")
    }

    return (
        <Container>
            <Sidebar />
            <Content>
                <Member>
                    <p>Already a member? 
                        <Link to="/signin">
                            <span> Sign in</span>
                        </Link>
                    </p>
                </Member>
                <Main>
                    <Form onSubmit={createUser}>
                        <Title>Sign up to Dribbble</Title>
                        <Input label="Username" value={name} setValue={setName} />
                        <Input label="Bio" value={bio} setValue={setBio} />
                        <Input label="Email" value={email} setValue={setEmail} type="email" />
                        <Input label="Password" value={password} setValue={setPassword} type="password" />
                        <ButtonCantainer> 
                            <Button type="submit" disabled={isDisabled}>Create Account</Button>
                        </ButtonCantainer>
                    </Form>
                </Main>
            </Content>
        </Container>
    )
}

export default SignUp