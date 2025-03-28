


// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const LogIn = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     if (!username || !password) {
//       setError("Please fill out all fields.");
//       return;
//     }
//     setError("");
//     setLoading(true);
//     try {

//       const response = await axios.post(`${import.meta.env.VITE_API}/user/loginuser`, { username, password });
//       const { token, user } = response.data;
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(user));
//       console.log("Login successful:", user);
//       // window.location.href = "/home";
//       navigate('/home');
//     } catch (err) {
//       console.error("Login failed:", err.response?.data || err.message);
//       setError(err.response?.data?.message || "An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
//       <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
//         <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
//           <div>
//             <img
//               src="https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-login-button-icon-126999949.jpg"
//               className="w-32 mx-auto"
//               alt="Logo"
//             />
//           </div>
//           <div className="mt-12 flex flex-col items-center">
//             <h1 className="text-2xl xl:text-3xl font-extrabold">Log In</h1>
//             <div className="w-full flex-1 mt-8">
//               <div className="mx-auto max-w-xs my-10">
//                 {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//                 <input
//                   className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                   type="text"
//                   placeholder="Username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   aria-label="Username"
//                 />
//                 <div className="relative w-full mt-5">
//                   <input
//                     className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     aria-label="Password"
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {/* Eye Icon */}
//                   </button>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={handleLogin}
//                   className={`my-10 mt-5 tracking-wide font-semibold ${
//                     loading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-500 hover:bg-indigo-700"
//                   } text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
//                   disabled={loading}
//                 >
//                   {loading ? "Logging In..." : "Log In"}
//                 </button>
//                 {/* <p className="mt-6 text-xs text-gray-600 text-center">
//                   I agree to abide by templatana's{" "}
//                   <a href="#" className="border-b border-gray-500 border-dotted">
//                     Terms of Service
//                   </a>{" "}
//                   and its{" "}
//                   <a href="#" className="border-b border-gray-500 border-dotted">
//                     Privacy Policy
//                   </a>
//                 </p> */}
//                 <p className="mt-6 text-sm text-center text-blue-600">
//                   New here?{" "}
//                   <Link to="/signup" className="font-medium hover:underline">
//                     Sign Up
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
//           <div
//             className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
//             style={{
//               backgroundImage:
//                 "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
//             }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogIn;








import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Please fill out all fields.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API}/user/loginuser`, { username, password });
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate('/home');
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8 border border-gray-200">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-1">Welcome Back</h1>
          <p className="text-gray-500 text-sm">Log in to access your notes</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-100">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-label="Username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 flex items-center justify-center mt-4"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </>
            ) : (
              "Log In"
            )}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full border border-gray-200 text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h3 className="text-lg font-medium text-gray-800">Authenticating</h3>
            <p className="mt-2 text-sm text-gray-500">Please wait while we log you in...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogIn;
