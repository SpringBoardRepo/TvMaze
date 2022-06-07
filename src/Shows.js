import ShowCard from "./ShowCard";
import { Row } from "react-bootstrap";

function Shows({ shows }) { 
   
    console.log(shows);
    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {shows.map(s => 
                     <ShowCard
                        key={s.show.id}
                        name={s.show.name}
                        image={s.show.image}
                        summary={ s.show.summary}
                        /> 
                )} 
            </Row>
        </>
    )
}

export default Shows;