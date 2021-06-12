import  { Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import menPhone from '../../img/2.jpg';
import './styles.css';

class SectionTwo extends Component{
    render(){       
        const backgroundStyle = {
            backgroundImage: `url(${menPhone})`,
            backgroundSize: "cover",
            height: "120vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: 'relative',            
        } 
        return(
            <section id="experience" className="sectionTwo mb-5" style={backgroundStyle}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col md={6} className="my-auto">     
                            <div className="number">
                                <span>01</span>
                            </div>
                            <div className="titulo">
                                <h2>Lorem Ipsum Dolor</h2>
                            </div>                        
                            <div className="texto">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe pariatur. Eligendi deserunt dolores, ea amet saepe earum eos nostrum, ex tenetur quod repudiandae sequi, iure aperiam commodi delectus aliquid!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe pariatur. Eligendi deserunt dolores, ea amet saepe earum eos nostrum, ex tenetur quod repudiandae sequi, iure aperiam commodi delectus aliquid!</p>
                            </div>                                                  
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }

}

export default SectionTwo;