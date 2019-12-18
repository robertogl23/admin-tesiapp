import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import useForm from 'react-hook-form'
import Spinner from 'react-bootstrap/Spinner'

export default function FormRegister(){
    

    const [isLoaded,setisLoaded] = React.useState(false)
    const {register, handleSubmit} = useForm()
    const onSubmit = values => postFetch(values);
    const postFetch = (da) => {
        setisLoaded(true)
        console.log(da);
        var fd = new FormData();
        fd.append('workshop_name',da.name)
        fd.append('workshop_dates',da.date)
        fd.append('no_asistentesMax',da.lugares)
        fd.append('creditos',da.creditos)
        fd.append('duracion_clase',da.dc)
        fd.append('duracion_dias',da.dd)
        fd.append('duracion_horas',da.ht)
        fd.append('nombre_maestro',da.maestro)
        fd.append('workshop_type',da.type)
        fd.append('workshop_description',da.des)
        fd.append('file',da.img[0])
        fetch('https://api-tesiapp.herokuapp.com/register/workshop/',{
            method: 'POST',
            body: fd
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.status === false){
                alert('Error al registrar taller')
                return
            }
            setisLoaded(false)
            alert('Tallere registrado correctamente')
        })
    }
    return(
        <Form style={{ margin: '5rem'}} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre del taller</Form.Label>
                <Form.Control type="text" name="name" ref={register} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Fecha del taller</Form.Label>
                <Form.Control type="text" name="date" ref={register}  />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Lugares disponibles</Form.Label>
                <Form.Control type="text" name="lugares" ref={register}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Creditos</Form.Label>
                <Form.Control type="text" name="creditos" ref={register} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Duracion por clase</Form.Label>
                <Form.Control type="text" name="dc" ref={register}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Duracion dias</Form.Label>
                <Form.Control type="text" name="dd" ref={register} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Duracion horas totales</Form.Label>
                <Form.Control type="text"  name="ht" ref={register}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre maestro</Form.Label>
                <Form.Control type="text" name="maestro" ref={register}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Tipo de taller</Form.Label>
                <Form.Control as="select" name="type" ref={register}>
                <option>academicos</option>
                <option>deportivos</option>
                <option>culturales</option>
                
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripcion de taller</Form.Label>
                <Form.Control as="textarea" rows="3" name="des" ref={register} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" name="img" ref={register}/>
            </Form.Group>
            {
               isLoaded ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
               ) : (
                <Button variant="primary" type="submit">
                                        Registrar taller
                                    </Button>
                )
            }
        </Form>
    )
}