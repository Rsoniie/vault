// import React from 'react';

// const FileUpload = () => {
//   return (
//     <label
//       htmlFor="uploadFile1"
//       className="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-11 mb-2 fill-gray-500"
//         viewBox="0 0 32 32"
//       >
//         <path
//           d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
//           data-original="#000000"
//         />
//         <path
//           d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
//           data-original="#000000"
//         />
//       </svg>
//       Upload file

//       <input type="file" id="uploadFile1" className="hidden" />
//       <p className="text-xs font-medium text-gray-400 mt-2">
//         PNG, JPG, SVG, WEBP, and GIF are Allowed.
//       </p>
//     </label>
//   );
// };

// export default FileUpload;



import React from 'react';

const FileUpload = ({ onFileSelect }) => {
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <label
        htmlFor="uploadFile"
        className="bg-white text-gray-600 rounded-lg h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed hover:border-blue-500 transition-colors duration-200 p-6 text-center"
      >
        <div className="bg-blue-100 p-4 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 fill-blue-600"
            viewBox="0 0 32 32"
          >
            <path
              d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
            />
            <path
              d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
            />
          </svg>
        </div>
        <p className="font-medium text-gray-700 mb-1">
          <span className="text-blue-600">Click to upload</span> or drag and drop
        </p>
        <p className="text-sm text-gray-500">
          PDF, DOCX, PPTX files (Max. 10MB)
        </p>
        <input 
          type="file" 
          id="uploadFile" 
          className="hidden" 
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.ppt,.pptx"
        />
      </label>
    </div>
  );
};

export default FileUpload;