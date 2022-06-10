import ShowCard from "./ShowCard";
import { Row } from "react-bootstrap";
import "./ShowsCard.css";

function Shows({ shows }) {
  console.log(shows);
  return (
    <>
      <Row xs={1} md={2} className="g-4 showscard">
        {shows.map((s) => (
          <ShowCard
            key={s.show.id}
            id={s.show.id}
            name={s.show.name}
            image={s.show.image}
            summary={s.show.summary}
          />
        ))}
      </Row>
    </>
  );
}

export default Shows;
