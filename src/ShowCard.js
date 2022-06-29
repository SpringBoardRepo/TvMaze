import Card from "react-bootstrap/Card";
import { Col, Button } from "react-bootstrap";
import "./ShowsCard.css";

function ShowCard({ name, image, summary, id }) {
  const missingImageUrl = "https://tinyurl.com/tv-missing";

  return (
    <>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card className="showCard" style={{ width: "17rem" }}>
          <Card.Img
            className="card-image"
            variant="top"
            src={image ? image.medium : missingImageUrl}
          />
          <Card.Body>
            <Card.Title className="showTitle">{name}</Card.Title>
            <Button size="sm" href={`/showDetails/${id}`}>
              See Details
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
export default ShowCard;
