import { Container, Form, Button, Col } from "react-bootstrap";

const Login = () => {
    return (
        <>
            <Container>
            
                <Form>
                <Col sm = {4}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control className="mb-4" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
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
        </Container>
    </>
    )
}
export default Login;