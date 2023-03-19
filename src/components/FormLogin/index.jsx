import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import PokemonContext from "../../context/PokemonContext";

function FormLogin() {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleShowPasswordClick,
    handleSubmit,
    email,
    password,
    showPassword,
    loading,
    numero,
  } = useContext(PokemonContext);

  return (
    <div>
      <div className="card card-side bg-gray-700 shadow-xl">
        <figure>
          <img className="w-40 p-5" src={logo} alt="Movie" />
        </figure>
        <div className="card-body mt-4">
          <form onSubmit={handleSubmit}>
            <label className="mb-2 text-white text-left">Email:</label>
            <br />
            <input
              className="mb-3 w-48 bg-white rounded"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <br />
            <label className="mb-3 text-white text-left">Password:</label>
            <br />
            <div style={{ display: "flex" }}>
              <input
                className="bg-white w-48 rounded"
                type={showPassword ? "text" : "password"}
                value={password}
                name="password"
                onChange={handlePasswordChange}
                required
              />
              <button type="button" onClick={handleShowPasswordClick}>
                {showPassword ? (
                  <span className="ml-2 p-1 bg-white">
                    <ion-icon name="eye-outline"></ion-icon>
                  </span>
                ) : (
                  <span className="ml-2 bg-white">
                    <ion-icon name="eye-outline"></ion-icon>
                  </span>
                )}
              </button>
            </div>

            <div className="card-actions justify-end mt-3">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={loading}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
