import React from "react";
import PokemonProvaider from "../context/PokemonProvaider";
import AppRoutes from "../routes/AppRoutes";
//import "./App.css";

function App() {
  return (
    <div className="App">
      <PokemonProvaider>
        <AppRoutes />
      </PokemonProvaider>
    </div>
  );
}

export default App;
