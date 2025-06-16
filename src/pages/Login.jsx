import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input type="text" placeholder="Usuário" className="w-full p-2 mb-2 border rounded" />
        <input type="password" placeholder="Senha" className="w-full p-2 mb-4 border rounded" />
        <button className="w-full bg-blue-600 text-white p-2 rounded">Entrar</button>
      </div>
    </div>
  );
};

export default Login;