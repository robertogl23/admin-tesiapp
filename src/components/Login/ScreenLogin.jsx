import React from 'react'
import './style.css'
import Actions from './Actions'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import useForm from 'react-hook-form'
export default function ScreenLogin(props){
    let act = new Actions()
    const [isLoaded,setisLoaded] = React.useState(false)
    const {register, handleSubmit} = useForm()
    const onSubmit = values => act.postLogin(values,loaded,props.fct)

    const loaded = () => {
        setisLoaded(true)
    }
    
    return(
        <div className="card-login">
            <div>
            <Card style={{ width: '18rem',height: '16rem'}}>
                <Card.Body>
                    {
                        isLoaded ? (
                            <Container style={{ marginTop: '5rem'}} className="justify-content-md-center">
                                <Container>
                                <div className="cont">
                                    <Spinner animation="grow" />
                                </div>
                                <p>Validando datos...</p>
                                </Container>
                            </Container>
                        ) :(
                        <Form onSubmit={handleSubmit(onSubmit)} >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" name="en" ref={register} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="pass" ref={register}/>
                            </Form.Group>
                                <Button variant="primary" type="submit">
                                    Start
                                </Button>
                        </Form>
                        )
                    }
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}