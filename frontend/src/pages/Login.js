import { Container, Form, Button, Col } from "react-bootstrap";
import styled from 'styled-components'

const Login = () => {
    return (
        <Page className="page">
            {/* <div>
                <p>Sorted</p>
            </div> */}
            <ContainerStyled>
                <Form className="mb-2">
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