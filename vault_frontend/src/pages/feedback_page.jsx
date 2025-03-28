

// import React, { useState } from 'react';
// import axios from 'axios';
// import { FaStar, FaPaperPlane } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom'; // For navigation

// const FeedbackForm = () => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     feedback: '',
//   });
//   const [successPopup, setSuccessPopup] = useState(false); // To control popup visibility
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate for redirection

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');

//     const token = localStorage.getItem('token'); // Retrieve token from localStorage

//     if (!token) {
//       setErrorMessage('No token found. Please log in to submit feedback.');
//       return;
//     }

//     const payload = { ...formData, rating };

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_API}/feed/feedback`, // Replace with your API endpoint
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include token in the headers
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       if (response.status === 200) {
//         setSuccessPopup(true); // Show success popup
//       }
//     } catch (error) {
//       console.error('Error submitting feedback:', error.response?.data || error.message);
//       setErrorMessage('Failed to submit feedback. Please try again.');
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-br from-blue-100 to-blue-200 font-sans overflow-hidden">
//       {/* Success Popup */}
//       {successPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h2 className="text-2xl font-bold text-green-600">Thank you for your feedback!</h2>
//             <p className="mt-4 text-gray-600">Your feedback has been submitted successfully.</p>
//             <button
//               onClick={() => navigate('/home')} // Redirect to home
//               className="mt-6 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none"
//             >
//               Go to Home
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
//         <div className="md:w-1/2 h-80 md:h-auto">
//           <img
//             src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//             alt="Customer Feedback"
//             className="object-cover w-full h-full"
//           />
//         </div>
//         <form onSubmit={handleSubmit} className="md:w-1/2 p-6 space-y-3 overflow-auto">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//             />
//           </div>
//           <div>
//             <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
//               Your Feedback
//             </label>
//             <textarea
//               id="feedback"
//               name="feedback"
//               rows="3"
//               value={formData.feedback}
//               onChange={handleInputChange}
//               required
//               className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//             ></textarea>
//           </div>
//           <div>
//             <span className="block text-sm font-medium text-gray-700 mb-2">Rating</span>
//             <div className="flex items-center">
//               {[...Array(5)].map((star, index) => {
//                 const ratingValue = index + 1;
//                 return (
//                   <label key={index} className="cursor-pointer">
//                     <input
//                       type="radio"
//                       name="rating"
//                       value={ratingValue}
//                       onClick={() => setRating(ratingValue)}
//                       className="hidden"
//                     />
//                     <FaStar
//                       className="transition-colors duration-200 ease-in-out"
//                       color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
//                       size={24}
//                       onMouseEnter={() => setHover(ratingValue)}
//                       onMouseLeave={() => setHover(0)}
//                     />
//                   </label>
//                 );
//               })}
//             </div>
//           </div>
//           {errorMessage && (
//             <p className="text-red-500 text-sm text-center">{errorMessage}</p>
//           )}
//           <button
//             type="submit"
//             className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             <FaPaperPlane className="mr-2" />
//             Submit Feedback
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FeedbackForm;
 




import React, { useState } from 'react';
import axios from 'axios';
import { FaStar, FaPaperPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });
  const [successPopup, setSuccessPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    const token = localStorage.getItem('token');

    if (!token) {
      setErrorMessage('Please log in to submit feedback.');
      setLoading(false);
      return;
    }

    const payload = { ...formData, rating };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}/feed/feedback`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        setSuccessPopup(true);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setErrorMessage(error.response?.data?.message || 'Failed to submit feedback. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Success Popup */}
      {successPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full border border-gray-200 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-lg font-medium text-gray-800">Thank You!</h3>
            <p className="mt-2 text-sm text-gray-500">Your feedback has been submitted successfully.</p>
            <button
              onClick={() => navigate('/home')}
              className="mt-4 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Share Your Feedback</h2>
          <p className="text-gray-500 mb-6">We'd love to hear about your experience</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
                Your Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                rows="3"
                value={formData.feedback}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setRating(ratingValue)}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                      className="focus:outline-none"
                    >
                      <FaStar
                        className="transition-colors duration-200"
                        color={ratingValue <= (hover || rating) ? '#3b82f6' : '#e5e7eb'}
                        size={20}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-100">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  <FaPaperPlane className="mr-2" />
                  Submit Feedback
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;