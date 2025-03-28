// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "../components/Card"; // Correctly import the Card component

// const FileList = () => {
//   const [files, setFiles] = useState([]); // State to store files
//   const [loading, setLoading] = useState(true); // State for loading status
//   const [error, setError] = useState(null); // State for error handling

//   useEffect(() => {
//     const fetchFiles = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_API}/pdf/all_files`);
//         setFiles(response.data.all_files); // Store fetched files in state
//         console.log(response.data); // Log the fetched data for debugging
//       } catch (err) {
//         setError("Failed to fetch files");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFiles();
//   }, []);

//   if (loading) return <p>Loading files...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4 text-center">File List</h1>
//       {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
//       <div className="flex justify-around flex-wrap">
//         {files.map((file, index) => (
//           // <Card
//           //   key={index} // Add a unique key for each item
//           //   topic={file.topic}
//           //   file_path={file.file_path}
//           //   subject={file.subject}
//           //   author={file.author_name}
//           //   likes={file.likes}
//           // />
//           <>
//           <div className="max-w-sm mx-4 my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//             <a href="#">
//               <img
//                 className=""
//                 src="https://flowbite.com/docs/images/blog/image-1.jpg"
//                 alt=""
//               />
//             </a>
//             <div className="p-5">
//               <a href="#">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                  {file.topic}
//                 </h5>
//               </a>
//               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                 {file.description}
//               </p>
//               <div className="flex items-center justify-between text-white">
//                 <button
//                   type="button"
//                   className="flex items-center text-sm text-white bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//                 >
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     className="w-8 h-8 rounded-full mr-2"
//                     src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
//                     alt="user photo"
//                   />
//                   {file.author_name}
//                 </button>
//                 <div className="text-sm flex items-center">
//                   <svg
//                     className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mr-2"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M12 21C12 21 5 13.5 5 8.5C5 5.42 7.42 3 10.5 3C12.5 3 14 4.5 14 4.5C14 4.5 15.5 3 17.5 3C20.58 3 23 5.42 23 8.5C23 13.5 12 21 12 21Z"
//                     />
//                   </svg>
//                   {file.likes}
//                 </div>
//                 <a
//                   href={file.file_path}
//                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 >
//                   Read 
//                   <svg
//                     className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 10"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M1 5h12m0 0L9 1m4 4L9 9"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>

//           </>
          
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FileList;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FileList = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API}/pdf/all_files`);
        setFiles(response.data.all_files);
      } catch (err) {
        setError("Failed to fetch files. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 max-w-md w-full text-center">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Error Loading Files</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Community Notes</h1>
          <p className="text-gray-600">Browse all notes shared by our community</p>
        </div>

        {files.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-700 mt-4">No notes available</h3>
            <p className="text-gray-500 mt-1">There are no notes shared yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {files.map((file, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.mos.cms.futurecdn.net/25mEf9H2CYfpdX53bWHjK-1200-80.jpg"
                    alt={file.topic}
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {file.subject}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{file.topic}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{file.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => navigate(`/author_profile/${file.author_name}`)}
                      className="flex items-center text-sm text-gray-700 hover:text-blue-600"
                    >
                      <img
                        className="w-8 h-8 rounded-full mr-2 border border-gray-200"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt={file.author_name}
                      />
                      <span>{file.author_name}</span>
                    </button>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center text-gray-500 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        {file.likes}
                      </div>
                      <a
                        href={file.file_path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        View
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileList;
