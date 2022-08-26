import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useCallback } from "react";
import "./Filter.css";
export default function Filter({ onFilterClick }) {
  const handleFilterSelection = useCallback(
    (event) => {
      onFilterClick(event.target.value);
    },
    [onFilterClick]
  );

  return (
    <ButtonGroup
      aria-label="Basic example"
      className="button"
      onClick={handleFilterSelection}
    >
      <Button variant="secondary" className="rock" value="rock">
        rock
      </Button>
      <Button variant="secondary" className="ghost" value="ghost">
        ghost
      </Button>
      <Button variant="secondary" className="electric" value="electric">
        electric
      </Button>
      <Button variant="secondary" className="bug" value="bug">
        bug
      </Button>
      <Button variant="secondary" className="poison" value="poison">
        poison
      </Button>
      <Button variant="secondary" className="normal" value="normal">
        normal
      </Button>
      <Button variant="secondary" className="fairy" value="fairy">
        fairy
      </Button>
      <Button variant="secondary" className="fire" value="fire">
        fire
      </Button>
      <Button variant="secondary" className="grass" value="grass">
        grass
      </Button>
      <Button variant="secondary" className="water" value="water">
        water
      </Button>
      <Button variant="secondary" className="water" value="">
        Every type
      </Button>
    </ButtonGroup>
  );
}
