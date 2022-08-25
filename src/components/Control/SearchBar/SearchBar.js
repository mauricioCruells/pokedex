import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SearchBar() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="pokemonName">
        <Form.Label>Search by name</Form.Label>
        <Form.Control type="text" placeholder="Pokemon's name" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
