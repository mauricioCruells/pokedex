import Card from "react-bootstrap/Card";
import "./PokeCard.css";
export default function PokeCard({ image, name, id, type, height, weight }) {
  return (
    <Card className="pokeCard">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          <h5>{name}</h5>
          <h5>#{id}</h5>
        </Card.Title>
        <Card.Text>
          Height: {height} <br />
          Weight: {weight}
          <br />
          Type: {type}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
