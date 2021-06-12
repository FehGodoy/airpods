import './styles.css';
import  {  useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaApple, FaYoutube } from "react-icons/fa";

// URL
const url = 'https://www.apple.com/br/airpods-pro/';



const NavColor = () =>{
    const [colorChange, setColorChange] = useState(false);   
    
    const changeBackground = () =>{
        if (window.scrollY >= 100) {
            setColorChange(true);
        } else{
            setColorChange(false);
        }
        
    };    
    window.addEventListener('scroll', changeBackground);   
    
        return (
            <header>
            <Navbar className={colorChange ? 'navbar active fixed-top': 'navbar fixed-top'} expand="lg">
                <Container>
                    <Navbar.Brand>
                        <FaApple />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#apple">Apple</Nav.Link>
                            <Nav.Link href="#shop">Shop</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="socialMedia">
                        <ul className="d-flex"> 
                            <li>
                                <a href={url}>
                                    <FaFacebookF/>
                                </a>
                            </li>
                            <li>
                                <a href={url}>
                                    <FaYoutube/>
                                </a>
                            </li>
                        </ul>                        
                    </div>
                </Container>
            </Navbar>
            </header>
        )
    
}

export default NavColor;