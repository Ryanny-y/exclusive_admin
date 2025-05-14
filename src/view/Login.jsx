import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {
  const { setUserData, setIsAuthenticated, backend_uri } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle login logic here
    if(!username || !password) {
      alert('Username and Password are required!');
      return;
    }
    
    try {
      const response = await fetch(`${backend_uri}/auth`, {
        method: "POST", 
        headers: {
          'Content-type': 'application/json; charset=utf-8',
        }, 
        body: JSON.stringify({
          username, 
          password
        })
      })
      
      if(!response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        
        throw new Error(responseData.error);
      }

      const data = await response.json();
      setUserData(data);
      setIsAuthenticated(true);
      navigate('')
    } catch (error) {
      console.log(error);
      
      alert(error);
    }

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
              <label htmlFor="username" className="block text-lg">
                Username
              </label>
              <input
                type="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 mt-2 border dark:border-gray-300 rounded-md focus:outline-none"
                placeholder="Enter your username"
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
