import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import pic from '../assets/pic.jpg'

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
                    history.push('/task')
                }));
        }
    }

    return (
        <>
        <Page >
            <Form onSubmit = {submitHandler}>
                <input name = "email" type = "email" placeholder="Username" />
                <input name = "pass" type = "password" placeholder="Password"/>
                <section>
                    <Button className="animated" id = "register" type = "submit" value = "Register">Register</Button>
                    <Button className="animated" id = "login" type = "submit" value = "Login">Login</Button>
                </section>
            </Form>
        </Page>
    </>
    )
}

const Page = styled.div `
    min-height: 100vh;
    display: flex;
    background-image: url(${pic});
    background-size: cover;
    align-items: center;
    justify-content: center;
    
`

const Form = styled.form `
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
    /* margin-top: 42vh; */
	

	input {
		display: block;
		outline: 0;
		border: 1px solid fade(white, 40%);
        background-color: rgba(255, 255, 255, 0.774);
		background-color: fade(rgb(255, 255, 255), 20%);
		min-width: 55vh;
		border-radius: 3px;
		padding: 10px 15px;
		margin: 0 auto 10px auto;
		text-align: center;
		font-size: 2.2vh;
		color: black;
		transition-duration: 0.25s;
		font-weight: 300;

    :hover,
    :focus{
        background-color: rgba(62, 100, 64, 0.774);
        background-color: fade(rgba(233, 233, 233, 0.39), 40%);
        color: black;
        width: 35vw;
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
    height: 40px;
    width: 20vh;
    line-height: 38px;
    overflow: hidden;
    background: #050505c4;
    border-radius: 3px;
    box-shadow: 0 15px 30px rgba(black,.1);
    border: 0;
    cursor: pointer;
    transition: all .3s ease;
    color:rgb(228, 227, 227);
    :hover{
    box-shadow: 0 5px 15px rgba(black,.1);
    background-color: rgba(62, 100, 64, 0.774);
    }

`
export default Login;