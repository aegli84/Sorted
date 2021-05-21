import { Container, Form, Button, Col } from "react-bootstrap";
//import {useState} from 'react'


    const Input = () => {
        return(
            <>
            <Container>
                <Form>
                    <Col md = {5}>
                        <Form.Group>
                            <Form.Control className="mb-4" placeholder="Task" />
                            <Form.Control className="mb-4" placeholder="Location" />
                            <Form.Control className="mb-4" type="date" placeholder="Due date" />
                        </Form.Group>
                        <Button variant="success" type="submit">Create</Button>
                    </Col>
                </Form>
                
                </Container>
                </>
                );
            }
            
            

export default Input;
