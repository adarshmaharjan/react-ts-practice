import React from "react";
import { useGetPokemonByNameQuery } from "../../services/pokemon/pokemonService";

const Pokemon: React.FC = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("pikachu");
  return (
    <div className="pokemon">
      {error ? (
        <>"There is an error"</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <div style={{ width: "100px", height: "100px" }}>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Pokemon;
