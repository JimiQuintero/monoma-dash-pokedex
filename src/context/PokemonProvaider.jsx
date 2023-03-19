import React, { useState, useEffect } from "react";
import PokemonContext from "./PokemonContext";
import userData from "../helpers/userData.json";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PokemonProvaider = ({ children }) => {
  //Logica del form
  /* const localStorageUser = localStorage.getItem("USER_LOGIN");
    let parsedEmail;
    let parsedPassword;

    if (!localStorageUser) {
      localStorage.setItem("USER_LOGIN", JSON.stringify([]));
      parsedEmail = [];
      parsedPassword = [];
    } else {
      parsedEmail = JSON.parse(localStorageUser);
      parsedPassword = JSON.parse(localStorageUser);
    } */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    setLoading(true);
    //Lógica para validar el usuario
    const usuario = userData;

    if (usuario.email === email && usuario.password === password) {
      setLoading(false);
      Swal.fire("Exito", "Usuario validado correctamente", "success");
      navigate("/home");
    } else {
      setLoading(false);
      Swal.fire(
        "Error",
        "Correo electrónico o contraseña incorrectos",
        "error"
      );
    }
  };

  //Logica de HomePage
  const [pokemons, setPokemons] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  //console.log(pokemons);

  //Estados para aplicación simple
  const [loader, setLoader] = useState(true);

  //Petición para consultar los 10 primeros pokemones
  const loadData = async () => {
    const BASE_URL = "https://pokeapi.co/api/v2";

    await axios
      .get(`${BASE_URL}/pokemon?limit=10`)
      .then((response) => {
        setPokemonData(response.data.results);
        Promise.all(
          response.data.results.map((pokemon) => axios.get(pokemon.url))
        )
          .then((responses) => {
            const pokemonData = responses.map((response) => {
              return {
                id: response.data.id,
                name: response.data.name,
                image: response.data.sprites.front_default,
                weight: response.data.weight,
                moves: response.data.moves,
              };
            });
            setPokemons(pokemonData);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    loadData();
  }, []);

  //Peticion para Consultar en la API todos los pokemones
  const getAllPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";
    await axios
      .get(`${baseURL}pokemon?limit=100000&offset=0`)
      .then((response) => {
        for (let i = 0; i < response.data.results.length; i++) {
          axios.get(response.data.results[i].url).then((result) => {
            setAllPokemons((prevArray) => [...prevArray, result.data]);
            setLoader(false);
          });
        }
      })
      .catch((err) => console.log(err));
  };

  //Petición para Consultar Pokemon po ID
  /*  const getPokemonsByID = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";
    await axios
      .get(`${baseURL}pokemon/${id}`)
      .then((response) => response.data.reaults)
      .catch((err) => console.log(err));
  }; */

  const getPokemonByID = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        handleEmailChange,
        handlePasswordChange,
        handleShowPasswordClick,
        handleSubmit,
        email,
        password,
        setShowPassword,
        showPassword,
        loading,
        pokemons,
        setPokemons,
        setAllPokemons,
        getPokemonByID,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvaider;
