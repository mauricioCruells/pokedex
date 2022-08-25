import Card from "react-bootstrap/Card";

export default function PokeCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.info.image} />
      <Card.Body>
        <Card.Title>
          <h5>{props.info.name}</h5>
          <h5>#{props.info.id}</h5>
          <h5>Type: {props.info.typeName}</h5>
        </Card.Title>
        <Card.Text>
          Height: {props.info.height}
          Weight: {props.info.weight}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
