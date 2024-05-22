import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { PokemonContext } from "../context/PokemonContext";

const Characters = () => {
  const { getPoke } = useContext(PokemonContext);
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const goToCharacters = () => {
    id ? navigate(`/characters/${id}`) : setError("Choose a pokemon!");
  };

  return (
    <>
      <div className="general pokemones">
        <h2 className="tittle">Choose your pokemon</h2>
        <select
          className="form-select select"
          aria-label="Default select example"
          onChange={({ target }) => setId(target.value)}
        >
          <option className="text-secondary" selected disabled>
            Find a pokemon
          </option>
          {getPoke &&
            getPoke.map((pokemon) => (
              <option key={pokemon.id} value={pokemon.name}>
                {" "}
                {pokemon.name}{" "}
              </option>
            ))}
        </select>
        <button className="detalle" type="submit" onClick={goToCharacters}>
          {" "}
          Details{" "}
        </button>
        {error && <p className="text-danger">{error}</p>}
      </div>
    </>
  );
};
export default Characters;
