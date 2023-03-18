import React from "react";

function PokemonCard({ pokemon }) {
  return (
    <div className="card_container">
      <div className="card card-compact w-64 mx-8 my-2 bg-base-100 shadow-xl">
        <figure>
          <img src={pokemon.sprites.front_default} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{pokemon.name}</h2>
          <span className="text-violet-600 font-black">Movies</span>
          <p className="text-violet-600 text-lg">
            #{pokemon.moves[0].move.name}
          </p>
          <p className="text-violet-600 text-lg">
            #{pokemon.moves[1].move.name}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Peso: {pokemon.weight}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
