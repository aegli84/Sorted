import { Container, Form, Button, Col } from "react-bootstrap";
//import {useState} from 'react'
//import picone from '../assets/picone.jpg'




    const Input = () => {
        return(
            <>
            <Container>
                <Form >
                    <Col md = {5}>
                        <Form.Group>
                            <Form.Control className="mb-4" placeholder="Task" />
                            <Form.Control className="mb-4" placeholder="Location" />
                            <Form.Control className="mb-4" type="date" placeholder="Due date" />
                            <Form.Control className="mb-4" type="time" placeholder="Time" />
                        </Form.Group>
                        <Button variant="success" type="submit">Create</Button>
                    </Col>
                </Form>
                
                </Container>
                </>
                );
            }
            
            

export default Input;
