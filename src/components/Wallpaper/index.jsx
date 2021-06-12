import './styles.css';
import  { Component } from 'react';
import foto from '../../img/1.png';
import {Container, Row, Col, Button} from 'react-bootstrap';



class Wallpaper extends Component{    
    render(){
        const backgroundStyle = {
            backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,.9) 0,rgba(0,0,0,.1) 100%),url(${foto})`,
            backgroundSize: "contain",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
        }
        return(
            <section id="home" className="wallpaper" style={backgroundStyle}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col md={6} className="my-auto text-center mx-auto" >
                            <h1>AirPods Pro</h1>                            
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}


export default Wallpaper;
