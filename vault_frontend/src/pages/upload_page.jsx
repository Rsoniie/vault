
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // const navigate = useNavigate();

// const UploadPage = () => {
//   const [subject, setSubject] = useState("");
//   const [topic, setTopic] = useState("");
//   const [description, setDescription] = useState("");
//   const [pdf, setpdf] = useState(null);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [successPopup, setSuccessPopup] = useState(false);  // Added loading state


//   const navigate = useNavigate();
//   const handleFileChange = (e) => {
//     setpdf(e.target.files[0]);
//   };

//   const handleDescriptionChange = (e) => {
//     if (e.target.value.length <= 50) {
//       setDescription(e.target.value);
//     }
//   };

//   const handleSubmit = async () => {
//     if (!subject || !topic || !description || !pdf) {
//       setErrorMessage("All fields are required!");
//       return;
//     }
//     setErrorMessage("");
//     setSuccessMessage("");
//     setLoading(true); // Set loading to true

//     const token = localStorage.getItem("token"); // Retrieve token from localStorage

//     const formData = new FormData();
//     formData.append("subject", subject);
//     formData.append("topic", topic);
//     formData.append("description", description);
//     formData.append("pdf", pdf);

//     try {
//       const response = await axios.post(`${import.meta.env.VITE_API}/pdf/upload`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`, // Add token to the headers
//         },
//       });
//       setSuccessMessage("File uploaded successfully!");
//       setSuccessPopup(true);
//       console.log("Response:", response.data);
//     } catch (error) {
//       console.error("Error uploading file:", error.response?.data || error.message);
//       setErrorMessage("Failed to upload the file. Please try again.");
//     } finally {
//       setLoading(false); // Set loading to false
//     }
//   };

//   return (
//     <>

//     <div className="bg-gradient-to-br from-blue-100 to-blue-200 min-h-screen">
//       {/* Loading Screen */}
//       {successPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h2 className="text-2xl font-bold text-green-600">Great Contribution!</h2>
//             <p className="mt-4 text-gray-600">Your Notes has been submitted successfully.</p>
//             <button
//               onClick={() => navigate('/home')} // Redirect to home
//               className="mt-6 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none"
//             >
//               Go to Home
//             </button>
//           </div>
//         </div>
//       )}
//       {loading && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <p className="text-xl font-semibold">Uploading File...</p>
//             <p className="text-gray-500 mt-2">Please wait</p>
//           </div>
//         </div>
//       )}

//       <div className="mt-4">
//         <div className="border border-blue-400 rounded-lg p-4">
//           <p className="font-bold text-center">Upload Your File Here</p>
//           <input
//             type="file"
//             name="file"
//             onChange={handleFileChange}
//             className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
//           />
//         </div>
//       </div>
//       <hr className="my-2 h-1 border-t-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50 dark:via-neutral-400" />
//       <div className="mx-14 my-6 border-2 border-blue-400 rounded-lg">
//         <div className="text-center font-bold">Details</div>
//         <div className="text-center text-3xl font-bold mt-2">If you have knowledge, let others light their candles in it.</div>
//         <div className="p-6">
//           <div className="flex gap-4">
//             <input
//               type="text"
//               name="subject"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-1 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
//               placeholder="Subject *"
//             />
//             <input
//               type="text"
//               name="topic"
//               value={topic}
//               onChange={(e) => setTopic(e.target.value)}
//               className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-1 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
//               placeholder="Topic *"
//             />
//           </div>
//           <div className="mt-4">
//             <textarea
//               name="description"
//               value={description}
//               onChange={handleDescriptionChange}
//               className="mb-4 h-24 w-full resize-none rounded-md border border-slate-300 p-3 font-semibold text-gray-500 placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-sky-500"
//               placeholder="Description * (Max 50 characters)"
//             ></textarea>
//             <p className="text-right text-sm text-gray-400">{description.length}/50</p>
//           </div>
//           {errorMessage && <p className="text-red-500 mt-2 text-center">{errorMessage}</p>}
//           {successMessage && <p className="text-green-500 mt-2 text-center">{successMessage}</p>}
//           <div className="text-center mt-4">
//             <button
//               className="cursor-pointer rounded-lg bg-blue-700 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-800 focus:outline-none focus:bg-blue-800"
//               type="button"
//               onClick={handleSubmit}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default UploadPage;





import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [pdf, setPdf] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setPdf(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    if (e.target.value.length <= 50) {
      setDescription(e.target.value);
    }
  };

  const handleSubmit = async () => {
    if (!subject || !topic || !description || !pdf) {
      setErrorMessage("All fields are required!");
      return;
    }
    setErrorMessage("");
    setLoading(true);

    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("topic", topic);
    formData.append("description", description);
    formData.append("pdf", pdf);

    try {
      await axios.post(`${import.meta.env.VITE_API}/pdf/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccessPopup(true);
    } catch (error) {
      console.error("Error uploading file:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || "Failed to upload the file. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Success Popup */}
      {successPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full border border-gray-200 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-lg font-medium text-gray-800">Great Contribution!</h3>
            <p className="mt-2 text-sm text-gray-500">Your notes have been submitted successfully.</p>
            <button
              onClick={() => navigate('/home')}
              className="mt-4 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full border border-gray-200 text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h3 className="text-lg font-medium text-gray-800">Uploading File</h3>
            <p className="mt-2 text-sm text-gray-500">Please wait while we process your notes...</p>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {/* File Upload Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Upload Your Notes</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">PDF File *</label>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Notes Details</h2>
          <p className="text-center text-gray-500 mb-6">If you have knowledge, let others light their candles in it.</p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400"
                  placeholder="e.g. Mathematics"
                />
              </div>
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">Topic *</label>
                <input
                  id="topic"
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400"
                  placeholder="e.g. Linear Algebra"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 h-24"
                placeholder="Brief description of your notes (Max 50 characters)"
              />
              <p className="text-right text-xs text-gray-500 mt-1">{description.length}/50</p>
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-100">
                {errorMessage}
              </div>
            )}

            <div className="pt-2">
              <button
                onClick={handleSubmit}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Uploading...
                  </>
                ) : (
                  "Submit Notes"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;