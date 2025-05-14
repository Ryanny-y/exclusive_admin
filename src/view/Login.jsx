import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <main className="dark:bg-light-100 h-screen bg-blue-300 flex items-center justify-center">
        <div className="fixed top-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1d1d1f"
              fillOpacity="1"
              d="M0,256L60,224C120,192,240,128,360,122.7C480,117,600,171,720,208C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="bg-light-100 p-8 rounded-lg border darK:border-dark-200 shadow-lg w-96 z-10">
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold mb-6 text-center dark:text-red-300">Login</h1>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mt-2 border dark:border-gray-300 rounded-md focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 dark:bg-red-300 text-white rounded-md hover:bg-red-400 duration-300"
            >
              Login
            </button>
          </form>
        </div>

      </main>
    </>
  );
};

export default Login;
