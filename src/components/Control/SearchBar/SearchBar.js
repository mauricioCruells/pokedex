import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCallback } from "react";
import "./SearchBar.css";

export default function SearchBar({ onRequestChange, removeFilter }) {
  const handleSearchRequest = useCallback(
    (event) => {
      event.preventDefault();
      onRequestChange(event.target[0].value);
      removeFilter("");
    },
    [onRequestChange, removeFilter]
  );

  return (
    <div className="searchbar">
      <Form onSubmit={handleSearchRequest}>
        <Form.Group className="mb-3" controlId="pokemonName">
          <Form.Control type="text" placeholder="Pokemon's name" />
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
}
