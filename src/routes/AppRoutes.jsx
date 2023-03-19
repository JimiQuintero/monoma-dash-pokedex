import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Dashboard";
import Login from "../pages/Login";
import PokemonPage from "../pages/PokemonPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/" />} />
      <Route index element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/pokemon/:id" element={<PokemonPage />} />
    </Routes>
  );
}

export default AppRoutes;
