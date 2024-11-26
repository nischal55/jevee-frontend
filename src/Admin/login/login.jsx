import React, { useState } from "react";
import "./login.css";
import Logo from "../../assets/img/logo.webp";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });

    navigate("/admin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="block">
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="Company Logo" className="h-12" />
        </div>

        <div className="bg-white p-8 rounded-md shadow-md w-96 border-t-[3px] border-blue-700">
          <div className="card-header">
            <h2 className="text-xl font-bold text-left mb-6">
              Seller Login
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 formWrap">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 formWrap">
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-blue-500 focus:ring-blue-500"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 text-sm text-gray-700"
              >
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
