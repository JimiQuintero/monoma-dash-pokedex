import React from "react";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import PokemonList from "../../components/PokemonList";
import "./Dashboard.css";

function HomePage() {
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
