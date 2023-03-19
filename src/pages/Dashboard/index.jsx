import React, { useContext } from "react";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import PokemonList from "../../components/PokemonList";
import PokemonContext from "../../context/PokemonContext";
import "./Dashboard.css";

function HomePage() {
  const { pokemons } = useContext(PokemonContext);
  return (
    <div className="container_dash">
      <Layout>
        <PokemonList />
        <Pagination />
      </Layout>
    </div>
  );
}

export default HomePage;
