import React from "react";
import logo from "../../assets/logo.png";
import "./Login.css";
import Form from "../../components/Form";

function Login() {
  return (
    <div className="contenedor_login">
      <div>
        <div className="card card-side bg-gray-700 shadow-xl">
          <figure>
            <img className="w-40 p-5" src={logo} alt="Movie" />
          </figure>
          <div className="card-body mt-4">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
