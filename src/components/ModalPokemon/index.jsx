import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonContext from "../../context/PokemonContext";
//import Loader from "../Loader";

function ModalPokemon({ onClose, children }) {
  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemonID, setPokemonID] = useState({});
  //console.log(pokemonID);

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = getPokemonByID(id);
    setPokemonID(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <>
      {/* The button to open modal */}
      {/* <label htmlFor="my-modal-3" className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/* <figure>
            <img src={pokemon.image} className="w-40" alt="Shoes" />
          </figure> */}
          <h3 className="text-lg font-bold">
            Congratulations random Internet user! {pokemonID.id}
            nombre: {pokemonID.name}
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
        {children}
      </div>
    </>
  );
}

export default ModalPokemon;
