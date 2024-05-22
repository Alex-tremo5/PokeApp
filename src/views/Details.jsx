import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const { getPoke } = useContext(PokemonContext);
  const navigate = useNavigate();
  const { id } = useParams();
  let pokemonss = getPoke.find((pokemon) => pokemon.name == id);
  console.log(pokemonss);

  let cardType = "primary";
  switch (pokemonss.type) {
    case "fairy":
      cardType = "info";
      break;
    case "ground":
      cardType = "secondary";
      break;
    case "poison":
      cardType = "success";
      break;
    case "electric":
      cardType = "warning";
      break;
    case "fire":
      cardType = "danger";
      break;
    default:
      cardType = "dark";
  }

  return (
    <>
      <div className={`card border-${cardType} mb-3 container`}>
        <div className="row g-0 info">
          <div className="col-md-4 ">
            <img
              src={pokemonss.imageURL}
              className="img-fluid rounded-start img"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className={`text-${cardType}`}>
                <h2>{pokemonss.name}</h2>
              </div>
              <ul>
                <li>
                  <p className="card-text">Hp: {pokemonss.hp} </p>
                </li>

                <li>
                  <p className="card-text">Attack: {pokemonss.attack}</p>
                </li>

                <li>
                  <p className="card-text">Defense: {pokemonss.defense}</p>
                </li>

                <li>
                  <p className="card-text">
                    Special Attack: {pokemonss.spAttack}
                  </p>
                </li>

                <li>
                  <p className="card-text">
                    Special Defense: {pokemonss.spDefense}
                  </p>
                </li>

                <li>
                  <p className="card-text">Speed: {pokemonss.speed}</p>
                </li>
                <p className={`text-${cardType}`}>{pokemonss.type} </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button className="volver" onClick={() => navigate(`/characters`)}>
        {" "}
        Go back
      </button>
    </>
  );
};

export default Details;
