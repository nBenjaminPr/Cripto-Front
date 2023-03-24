import { Col, Container, Row } from "react-bootstrap"
import Header from "../components/common/header/Header"
import LoginForm from "../components/LoginForm/LoginForm"

const LoginPage = () => {
    return (
    <>
    <Header/>
    <Container>
        <Row className="d-flex justify-content-center pt-5 "> 
            <Col md={6}>
                <LoginForm/>
            </Col>
        </Row>
    </Container>
    </>
    
    )
    
}

export default LoginPage