import './styles.css';
import  { Component } from 'react';
import foto from '../../img/1.png';
import {Container, Row, Col} from 'react-bootstrap';



class Wallpaper extends Component{    
    render(){
        const backgroundStyle = {
            backgroundImage: `url(${foto})`,
            backgroundSize: "contain",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",            
        }
        return(
            <section id="apple" className="wallpaperFive" style={backgroundStyle}>
                <div className="featuredVertical">
                    <div className="featuredHorizontal">
                        <Container className="h-100"> 
                            <Row className="h-100">
                                <Col md={10} className="text-center d-flex align-items-center justify-content-center">
                                    <div className="title">
                                        <h5>Lorem Ipsum</h5>
                                        <h1>Lorem Ipsum Dolor Sit</h1>
                                    </div>                                    
                                </Col>
                                    <Col md={4} className="mt-5 d-flex justify-content-center"> 
                                        <div className="box"> 
                                            <div className="titulo">
                                                <span>Lorem</span>
                                            </div>
                                            <div className="circle">
                                                <div className="number">
                                                    <span>50</span>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>Natus quo aperiam deleniti aut est illum neque saepe error sit nobis impedit</p>
                                        </div>
                                        </div>                                        
                                    </Col>
                                    <Col md={4} className="mt-5 d-flex justify-content-center"> 
                                        <div className="box"> 
                                            <div className="titulo">
                                                <span>Ipsum</span>
                                            </div>
                                            <div className="circle">
                                                <div className="number">
                                                    <span>1</span>
                                                </div>
                                            </div>
                                            <div className="text">
                                                <p>Natus quo aperiam deleniti aut est illum neque saepe error sit nobis impedit</p>
                                            </div>
                                        </div>                                        
                                    </Col>
                                    <Col md={4} className="mt-5 d-flex justify-content-center"> 
                                        <div className="box"> 
                                            <div className="titulo">
                                                <span>Sit</span>
                                            </div>
                                            <div className="circle">
                                                <div className="number">
                                                    <span>4.8</span>
                                                </div>
                                            </div>
                                            <div className="text">
                                                <p>Natus quo aperiam deleniti aut est illum neque saepe error sit nobis impedit</p>
                                            </div>
                                        </div>                                        
                                    </Col>
                            </Row>
                        </Container>

                        </div>
                    </div>               
                </section>
        )   
        }
    }


    export default Wallpaper;
