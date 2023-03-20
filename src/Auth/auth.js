import jwt from "jsonwebtoken";
import users from "../helpers/userData.json";

const TOKEN_KEY = "monoma_tech";

// Función para iniciar sesión y obtener un token JWT
export function login(email, password) {
  // Aquí se realizaría la autenticación con el servidor
  // Si las credenciales son válidas, se crea un token JWT y se almacena en el local storage

  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    const token = jwt.sign({ email: user.email }, "monoma_tech");
    localStorage.setItem(TOKEN_KEY, token);
    return true;
  } else {
    return false;
  }
}

// Función para verificar si el usuario está autenticado o no

export function isAuthenticated() {
  // Se obtiene el token del local storage
  const token = localStorage.getItem(TOKEN_KEY);

  try {
    // Se verifica si el token es válido
    const decodedToken = jwt.verify(token, "monoma_tech");
    return !!decodedToken;
  } catch (error) {
    return false;
  }
}
