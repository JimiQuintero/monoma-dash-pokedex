import React, { useState } from "react";
//import { Link } from "react-router-dom";
import ModalPokemon from "../ModalPokemon";

function PokemonCard({ pokemon }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="card_container">
      <div className="card card-compact w-64 mx-8 my-2 bg-base-100 shadow-xl">
        <figure>
          <img src={pokemon.image} className="w-40" alt="Shoes" />
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
          {/* <Link to={`/pokemon/${pokemon.id}`}> */}
          <div className="card-actions justify-end">
            {/* <button onClick={handleModalOpen} className="btn btn-primary">
              Peso: {pokemon.weight}
            </button> */}
            <label htmlFor="my-modal-3" className="btn btn-primary">
              Peso: {pokemon.weight}
            </label>
          </div>
          {/* </Link> */}
        </div>
      </div>
      <ModalPokemon onClose={handleModalClose} pokemon={pokemon.id} />
    </div>
  );
}

export default PokemonCard;
