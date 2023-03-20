import React from "react";
import { Link } from "react-router-dom";

function PokemonCard({ pokemon }) {
  return (
    <div className="card_container">
      <div className="card card-compact w-64 mx-8 my-2 bg-base-100 shadow-xl">
        <figure className="pt-3">
          <img src={pokemon.image} className="w-36" alt="Shoes" />
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
          <Link to={`/pokemon/${pokemon.id}`}>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                Peso: {pokemon.weight}
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
