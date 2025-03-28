
// // 

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   // State declarations for each form field
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [profession, setProfession] = useState('');
//   const [institution, setInstitution] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isMatching, setIsMatching] = useState(true);
//   const [loading, setLoading] = useState(false); // State to handle loading screen visibility

//   const navigate = useNavigate();

//   const handleInputChange = (setter) => (event) => {
//     setter(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     const value = event.target.value;
//     setConfirmPassword(value);
//     setIsMatching(password === value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!isMatching) {
//       alert('Passwords do not match!');
//       return;
//     }

//     setLoading(true); // Activate loading screen before the API call

//     const payload = {
//       username,
//       email,
//       profession,
//       institution,
//       password
//     };

//     try {
//       const response = await axios.post(`${import.meta.env.VITE_API}/user/createuser`, payload, 
//         { headers: { 'Content-Type': 'application/json' } }
//       );
//       if (response.status === 200) {
//         navigate('/verify');
//       } else {
//         alert('Signup failed: ' + (response.data.message || 'Unknown error'));
//       }
//     } catch (error) {
//       console.error('Signup error:', error);
//       alert('An error occurred during signup. Please try again.');
//     } finally {
//       setLoading(false); // Deactivate loading screen regardless of the outcome
//     }
//   };

//   return (
//     <div className="relative flex min-h-screen bg-gray-100 text-gray-900 items-center justify-center">
//       <div className="max-w-screen-xl m-4 bg-white shadow sm:rounded-lg flex justify-center flex-1">
//         <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
//           <h1 className="text-2xl xl:text-3xl font-extrabold">Sign Up</h1>
//           <form onSubmit={handleSubmit} className="mt-6">
//             <input
//               className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none mt-3"
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={handleInputChange(setUsername)}
//             />
//             <input
//               className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none mt-3"
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={handleInputChange(setEmail)}
//             />
//             <input
//               className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none mt-3"
//               type="text"
//               placeholder="Profession"
//               value={profession}
//               onChange={handleInputChange(setProfession)}
//             />
//             <input
//               className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none mt-3"
//               type="text"
//               placeholder="Institution"
//               value={institution}
//               onChange={handleInputChange(setInstitution)}
//             />
//             <div className="relative w-full mt-3">
//               <input
//                 className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={password}
//                 onChange={handleInputChange(setPassword)}
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//             <div className="relative w-full mt-3">
//               <input
//                 className={`w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border ${
//                   isMatching ? "border-green-500" : "border-red-500"
//                 } placeholder-gray-500 text-sm focus:outline-none`}
//                 type={showConfirmPassword ? "text" : "password"}
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={handleConfirmPasswordChange}
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               >
//                 {showConfirmPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//             <button
//               type="submit"
//               className="mt-5 w-full px-8 py-3 rounded-lg font-medium bg-indigo-500 text-gray-100 hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center"
//             >
//               Sign Up
//             </button>
//           </form>
//           {loading && (
//             <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
//               <div className="text-white text-lg font-semibold">Signing up...</div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  // State declarations (unchanged)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [institution, setInstitution] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isMatching, setIsMatching] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Handler functions (unchanged)
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    setIsMatching(password === value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isMatching) {
      alert('Passwords do not match!');
      return;
    }

    setLoading(true);
    const payload = { username, email, profession, institution, password };

    try {
      const response = await axios.post(`${import.meta.env.VITE_API}/user/createuser`, payload, 
        { headers: { 'Content-Type': 'application/json' } }
      );
      if (response.status === 200) {
        navigate('/verify');
      } else {
        alert('Signup failed: ' + (response.data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred during signup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8 border border-gray-200">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-1">Create Account</h1>
          <p className="text-gray-500 text-sm">Join our notes sharing community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
              onChange={handleInputChange(setUsername)}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={handleInputChange(setEmail)}
              required
            />
          </div>

          <div>
            <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
              Profession
            </label>
            <input
              id="profession"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400"
              type="text"
              placeholder="Your profession"
              value={profession}
              onChange={handleInputChange(setProfession)}
            />
          </div>

          <div>
            <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">
              Institution
            </label>
            <input
              id="institution"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400"
              type="text"
              placeholder="Your school or organization"
              value={institution}
              onChange={handleInputChange(setInstitution)}
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
                placeholder="Create password"
                value={password}
                onChange={handleInputChange(setPassword)}
                required
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

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                className={`w-full px-3 py-2 border ${
                  isMatching ? "border-gray-300" : "border-red-400"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 pr-10`}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
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
            {!isMatching && (
              <p className="mt-1 text-sm text-red-500">Passwords don't match</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-150 flex items-center justify-center mt-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating account...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
              Log in
            </a>
          </p>
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full border border-gray-200 text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h3 className="text-lg font-medium text-gray-800">Creating your account</h3>
            <p className="mt-2 text-sm text-gray-500">Please wait while we set up your account...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
