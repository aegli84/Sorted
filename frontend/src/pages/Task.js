import styled from 'styled-components'
//import {useState} from 'react'
import picthree from '../assets/picthree.jpg'


const Input = () => {
    return(
        <Page>
            <Form>
                <input type="task" required placeholder="Task" />
                <input type="location" required placeholder="Location"/>
                <input type="date" placeholder="Date" />
                <input type="time" required placeholder="Address"/>
                <Button>Create</Button>
            </Form>
        </Page>
        );
    }
            
const Page = styled.div `
    min-height: 100vh;
    display: flex;
    align-items: left;
    justify-content: left;
    background-color:#8f9e7c;
    background-image: url(${picthree});
    background-repeat: no-repeat;
    background-size: contain;
`

const Form = styled.form `
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
	position: relative;
    margin-top: 42vh;
	margin-left: 7vh;

	input {
		display: block;
		outline: 0;
		border: 1px solid fade(white, 40%);
        background-color: rgba(255, 255, 255, 0.774);
		background-color: fade(rgb(255, 255, 255), 20%);
		width: 25vw;
		border-radius: 3px;
		padding: 10px 15px;
		margin: 0 auto 10px auto;
		text-align: center;
		font-size: 2.2vh;
		color: black;
		transition-duration: 0.25s;
		font-weight: 300;

    :hover{
        background-color: rgba(143, 158, 124);
        background-color: fade(rgba(233, 233, 233, 0.39), 40%);
    }
}
`
const Button = styled.button `
    display: inline-block;
    margin: 1vh;
    font-weight: 600;
    text-transform: uppercase;
    font-size: .75em;
    letter-spacing: 3px;
    height: 38px;
    width: 120px;
    line-height: 38px;
    overflow: hidden;
    background: #050505c4;
    border-radius: 3px;
    box-shadow: 0 15px 30px rgba(black,.1);
    border: 0;
    cursor: pointer;
    transition: all .3s ease;
    color:rgb(228, 227, 227)
`
export default Input;
