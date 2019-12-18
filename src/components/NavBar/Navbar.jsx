import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
const NavBar = (props) => {
    const [ud,setUd] = React.useState(props.userdata)
    if(ud.length === 0){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
                <Navbar.Brand href="#home">TesiApp</Navbar.Brand>
            </Navbar> 
        )
    }

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
            <Navbar.Brand href="#home">TesiApp</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>  
    )

}
export default  NavBar