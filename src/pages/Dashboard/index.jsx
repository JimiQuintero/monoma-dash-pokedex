import React, { useEffect, useState } from "react";
//import { dataPokemon } from "../../api";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import PokemonList from "../../components/PokemonList";
import axios from "axios";
import "./Dashboard.css";

function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  console.log(pokemons);

  /* useEffect(() => {
    const getPokemons = async () => {
      const pokermonsRes = await dataPokemon();
      setPokemons(pokermonsRes);
    };
    getPokemons();
  }, []); */

  const loadData = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then((response) => {
        for (let i = 0; i < response.data.results.length; i++) {
          axios.get(response.data.results[i].url).then((result) => {
            setPokemons((prevArray) => [...prevArray, result.data]);
          });
        }
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container_dash">
      <Layout>
        <PokemonList pokemons={pokemons} />
        <Pagination />
      </Layout>
    </div>
  );
}

export default HomePage;
