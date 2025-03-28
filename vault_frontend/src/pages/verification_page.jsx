
// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const VerifyOTP = () => {
//   const [otp, setOtp] = useState(Array(7).fill(''));
//   const inputsRef = useRef([]);
//   const navigate = useNavigate();

//   const handleInputChange = (index) => (event) => {
//     const newOtp = [...otp];
//     newOtp[index] = event.target.value;
//     setOtp(newOtp);

//     // Move focus to next input
//     if (event.target.value.length === 1 && index < 6) {
//       inputsRef.current[index + 1].focus();
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const otpString = otp.join('');

//     try {

//       const response = await axios.post(`${import.meta.env.VITE_API}/user/verify`, { otp: otpString });
//       if (response.status == 200) {
//         navigate('/login');  // Navigate to the About page on success
//       } else {
//         alert('OTP Verification failed. Please try again.');  // Handle failure
//       }
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//       alert('An error occurred while verifying OTP.');
//     }
//   };

//   return (
//     <div className="bg-indigo-100 flex items-center justify-center min-h-screen">
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs md:max-w-md w-full">
//         <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Verify Your OTP</h2>
//         <p className="text-center text-gray-600 mb-4">Enter the 7-digit OTP sent to your email.</p>
//         <form onSubmit={handleSubmit}>
//           <div className="flex space-x-2 justify-center mb-6">
//             {otp.map((_, index) => (
//               <input
//                 key={index}
//                 ref={(el) => inputsRef.current[index] = el}
//                 type="text"
//                 maxLength="1"
//                 className="w-10 h-10 md:w-12 md:h-12 border border-gray-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 value={otp[index]}
//                 onChange={handleInputChange(index)}
//                 onPaste={(e) => e.preventDefault()}  // Disable paste
//               />
//             ))}
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
//           >
//             Verify OTP
//           </button>
//         </form>
//         <p className="text-center text-gray-600 mt-6">
//           Didn’t receive the code?{" "}
//           <a href="#" className="text-purple-500 hover:underline">
//             Resend OTP
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default VerifyOTP;



import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
  const [otp, setOtp] = useState(Array(7).fill(''));
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (index) => (event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);

    // Move focus to next input
    if (event.target.value.length === 1 && index < 6) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const otpString = otp.join('');
    
    if (otpString.length !== 7) {
      setError('Please enter a complete 7-digit OTP');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_API}/user/verify`, { otp: otpString });
      if (response.status === 200) {
        navigate('/login');
      } else {
        setError('OTP Verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError(error.response?.data?.message || 'An error occurred while verifying OTP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8 border border-gray-200">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-1">Verify Your Email</h1>
          <p className="text-gray-500 text-sm">Enter the 7-digit OTP sent to your email</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between space-x-2">
            {otp.map((_, index) => (
              <input
                key={index}
                ref={(el) => inputsRef.current[index] = el}
                type="text"
                maxLength="1"
                className="w-10 h-12 border border-gray-300 rounded-md text-center text-lg font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                value={otp[index]}
                onChange={handleInputChange(index)}
                onPaste={(e) => e.preventDefault()}
                onKeyDown={(e) => {
                  if (e.key === 'Backspace' && !otp[index] && index > 0) {
                    inputsRef.current[index - 1].focus();
                  }
                }}
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verifying...
              </>
            ) : (
              "Verify OTP"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Didn't receive the code?{' '}
            <button className="text-blue-600 hover:text-blue-800 font-medium focus:outline-none">
              Resend OTP
            </button>
          </p>
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full border border-gray-200 text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h3 className="text-lg font-medium text-gray-800">Verifying OTP</h3>
            <p className="mt-2 text-sm text-gray-500">Please wait while we verify your code...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyOTP;
