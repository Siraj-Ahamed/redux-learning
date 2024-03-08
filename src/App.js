// import logo from './logo.svg';
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Container>
            <Navbar />
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                    <AddTask />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
