import './styles.css';
import  { Component } from 'react';
import woman from '../../img/8.jpg';
import {Container, Row, Col} from 'react-bootstrap';



class Wallpaper extends Component{    
    render(){
        const backgroundStyle = {
            backgroundImage: `url(${woman})`,
            backgroundSize: "cover",
            height: "100vh",
            position:'relative',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",            
        }
        const url = 'https://www.apple.com/br/airpods-pro/';
        return(
            <section id="shop" className="wallpaperAirpods" style={backgroundStyle}>
                <div className="featuredVertical">
                    <div className="featuredHorizontal">
                        <Container className="h-100"> 
                            <Row className="h-100">
                                <Col md={8} className="my-auto">
                                    <div className="title mb-5">
                                        <h5>Lorem Ipsum</h5>
                                        <h1>Lorem Ipsum Dolor Sit Amet</h1>
                                    </div>   
                                    <Row> 
                                        <Col md={7}>
                                            <div className="texto">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad similique recusandae sapiente nobis quibusdam! Cum fuga veniam vitae labore nisi dolorum, aut placeat unde voluptas, perferendis alias quasi culpa ullam!</p>    
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad similique recusandae sapiente nobis quibusdam! Cum fuga veniam vitae labore nisi dolorum, aut placeat unde voluptas, perferendis alias quasi culpa ullam!</p>    
                                            </div> 
                                            <div className="botoes">
                                                <a href={url} target="_blank">
                                                    Lorem Ipsum
                                                </a>    
                                                <a href={url} target="_blank">
                                                    Ad similique Recusandae
                                                </a>    
                                            </div>                                
                                        </Col>
                                    </Row>                                    
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
