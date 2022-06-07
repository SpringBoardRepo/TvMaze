import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import "./ShowCard.css";

function ShowCard({ name, image, summary}) { 
   
    const missingImageUrl = 'https://tinyurl.com/tv-missing';
    return (
        <Col xs={12} sm={6} md={4} lg={3} className="showCard">
         <Card border="primary" style={{ width: '15rem' }}>
            <Card.Img variant="top" src={ image ? image.medium : missingImageUrl } />
            <Card.Body>
                <Card.Title>{ name}</Card.Title>
                <Card.Text>
                    <span
                        contentEditable='true'
                        dangerouslySetInnerHTML={{ __html: summary }}>  
                    </span>
                    
                </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
            </Card>
            </Col>
    )
}



export default ShowCard;