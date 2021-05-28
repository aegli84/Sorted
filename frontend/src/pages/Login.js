import { Container, Form, Button, Col } from "react-bootstrap";
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Login = () => {

    let history = useHistory();

    let submitHandler = (e) => {
        e.preventDefault();
        console.log(e);

        let data = {};

        data.email = e.target[0].value;
        data.pass = e.target[1].value;

        let urlRegister = 'http://localhost:8080/auth/register';
        let urlLogin = 'http://localhost:8080/auth/login';
        let options = {
            method:'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }

        if (e.nativeEvent.submitter.id === "register"){
            
            fetch(urlRegister, options).then(result=>result.json().then(output=>
            {
                if (output.status === 'success') {
                    alert ('Congrats, you are now registered! PLease login')
            } else {
                alert(output.message)
            }
                console.log(output);
        }));


        } else if (e.nativeEvent.submitter.id === "login") {
            fetch(urlLogin, options)
            .then(result=>result.json()
                .then(output=> {
                    alert (output.message)
                    console.log(output)
                    localStorage.setItem('token', output.token)
                    history.push('/user')
                }));
        }
    }

    return (
        <Page className="page">
            {/* <div>
                <p>Sorted</p>
            </div> */}
            <ContainerStyled>
                <Form className="mb-2" onSubmit = {submitHandler}>
                <Col md = {15}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control className="mb-4" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                <div className="mb-2">
                    <Button variant="warning" size="sm" type="register">
                    Register
                    </Button>{' '}
                    <Button variant="success" size="sm" type="login">
                    Login
                    </Button>
                </div>
                </Col>
                </Form>
        </ContainerStyled>
    </Page>
    )
}

const Page = styled.div `
    background-color:#282c34c9;
`
const ContainerStyled = styled(Container) `
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`
export default Login;