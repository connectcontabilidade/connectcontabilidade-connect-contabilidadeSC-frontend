
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login - Connect Contabilidade</h1>
      <input
        type="text"
        placeholder="Usuário"
        className="p-2 mb-2 border rounded w-64"
      />
      <input
        type="password"
        placeholder="Senha"
        className="p-2 mb-4 border rounded w-64"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
