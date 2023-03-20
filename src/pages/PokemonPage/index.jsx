import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import PokemonContext from "../../context/PokemonContext";
import { primerMayuscula } from "../../helpers/primeroMayuscula";
import "./PokemonPage,.css";

function PokemonPage() {
  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  console.log(pokemon);

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <>
      <NavBar />
      <div className="contenedor">
        <div className="card p-10 bg-slate-800 w-max card-side bg-#F5EEF8 shadow-xl">
          <figure>
            <img
              className="w-56 pl-10"
              src={pokemon.sprites.other.dream_world.front_default}
              alt={`Pokemon ${pokemon?.name}`}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white text-center text-4xl p-6">
              {primerMayuscula(pokemon.name)}
            </h2>
            <span className="text-violet-600 font-black">Movies:</span>
            <span className="text-white ">#{pokemon.moves[0].move.name}</span>
            <span className="text-white ">#{pokemon.moves[1].move.name}</span>
            <span className="text-violet-600 font-black">
              Peso: <span className="text-white ml-2">{pokemon.weight}</span>
            </span>
            <span className="text-violet-600 font-black">
              Altura: <span className="text-white ml-2">{pokemon.height}</span>
            </span>
            <Link replace to={"/home"}>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Regresar</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PokemonPage;
