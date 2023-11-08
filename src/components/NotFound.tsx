import { Card } from "react-bootstrap";
import './NotFound.css';

function NotFound() {
    return (
        <div className="not-found-container" >
            <Card style={{ width: '30rem' }} >
                <Card.Body>
                    <Card.Title>Not Found 404</Card.Title>
                    <Card.Text>
                        Lo sentimos, la página que estás buscando no existe. <br />
                        Por favor, verifica la URL e intenta nuevamente
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
}

export default NotFound;