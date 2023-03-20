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
      <div className="card card-side bg-gray-700  shadow-xl">
        <figure>
          <img className="w-44 p-5" src={logo} alt="Movie" />
        </figure>
        <div className="card-body mt-4">
          <form className="w-64" onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label"></label>
              <label className="input-group input-group-vertical">
                <span className="bg-primary text-white">Email</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className="input input-bordered"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Por favor ingrese un correo electrónico válido."
                />
              </label>
            </div>
            <div className="form-control" style={{ display: "flex" }}>
              <label className="input-group input-group-vertical">
                <span className="bg-primary text-white">Password</span>
                <input
                  placeholder="Password"
                  className="input input-bordered"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  name="password"
                  onChange={handlePasswordChange}
                  required
                />
              </label>
              <button
                className="absolute bottom-0 left-96 top-24 "
                type="button"
                onClick={handleShowPasswordClick}
              >
                {showPassword ? (
                  <span className="ml-8  bg-white">
                    <ion-icon name="eye-off-outline" size="large"></ion-icon>
                  </span>
                ) : (
                  <span className="ml-8 bg-white">
                    <ion-icon name="eye-outline" size="large"></ion-icon>
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
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
