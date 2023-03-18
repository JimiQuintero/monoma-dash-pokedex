import React from "react";
import PokemonCard from "../PokemonCard";
import "./PokemonList.css";

function PokemonList({ pokemons }) {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold mt-12">
        Lista de Pokemones
      </h1>
      <div className="list_container">
        {pokemons !== 0 ? (
          pokemons.map((pokemon, index) => (
            <PokemonCard pokemon={pokemon} key={index} />
          ))
        ) : (
          <p>No existen datos!!!</p>
        )}
      </div>
    </>
  );
}

export default PokemonList;
