import React from "react";
import logo from "../../assets/logo.png";

function Login() {
  return (
    <div className="container">
      <div className="card card-side bg-gray-700 shadow-xl">
        <figure>
          <img className="w-40 pl-5" src={logo} alt="Movie" />
        </figure>
        <div className="card-body">
          <form>
            <label className="mb-2 text-left">Email:</label>
            <br />
            <input
              className="mb-3 bg-white rounded"
              type="email"
              name="email"
              placeholder="Ingresá tu email"
            />
            <br />
            <label className="mb-3 text-left">Password:</label>
            <br />
            <input
              className="bg-white rounded"
              type="password"
              name=""
              placeholder="Ingresá tu password"
            />

            <div className="card-actions justify-end mt-3">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
