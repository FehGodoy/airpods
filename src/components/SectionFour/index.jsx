import  { Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import estojo from '../../img/6.jpg';
import './styles.css';

class SectionFour extends Component{
    render(){       
        const backgroundStyle = {
            backgroundImage: `url(${estojo})`,
            backgroundSize: "contain",
            height: "400px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: 'relative',            
        } 
        return(
            <section className="sectionFour">
                <Container className="h-100">
                    <Row className="h-100">                
                        <Col md={6} className="my-auto o2">
                            <div className="number">
                                <span>03</span>
                            </div>
                            <div className="titulo">
                                <h2>Lorem Ipsum Dolor</h2>
                            </div>                        
                            <div className="texto">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe pariatur. Eligendi deserunt dolores, ea amet saepe earum eos nostrum, ex tenetur quod repudiandae sequi, iure aperiam commodi delectus aliquid!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe pariatur. Eligendi deserunt dolores, ea amet saepe earum eos nostrum, ex tenetur quod repudiandae sequi, iure aperiam commodi delectus aliquid!</p>
                            </div>    
                        </Col>
                        <Col md={6} className="my-auto">
                            <div className="fundo" style={backgroundStyle}>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }

}

export default SectionFour;