import React from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const isLogged = false; // trocar pela lógica real de autenticação
  return isLogged ? <Dashboard /> : <Login />;
};

export default App;