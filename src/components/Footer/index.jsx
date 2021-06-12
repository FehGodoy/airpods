import './styles.css';
import  { Component } from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaRegCopyright} from "react-icons/fa";

// Year

const anoAtual = () => {
    return new Date().getFullYear();
  };

class Header extends Component {
    render() {
        return (
            <footer>
                <Container>
                    <Row>
                        <Col md={10}>
                            <span>
                            <FaRegCopyright /> Apple Inc {anoAtual()}.
                            Todos os direitos reservados.
                            </span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Header;