import React, { useState } from "react";
import userData from "../../helpers/userData.json";
import Swal from "sweetalert2";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    //Lógica para validar el usuario
    const usuario = userData;

    if (usuario.email === email && usuario.password === password) {
      setLoading(false);
      Swal.fire("Exito", "Usuario validado correctamente", "success");
    } else {
      setLoading(false);
      Swal.fire(
        "Error",
        "Correo electrónico o contraseña incorrectos",
        "error"
      );
    }
  };
  return (
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
        // placeholder="Ingresá tu email"
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
          // placeholder="Ingresá tu password"
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
        <button className="btn btn-primary" type="submit" disabled={loading}>
          Enviar
        </button>
      </div>
    </form>
  );
}

export default Form;
