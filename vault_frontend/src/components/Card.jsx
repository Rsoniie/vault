// import React from 'react';

// const Card = ({ topic, file_path, subject, author, likes }) => {
//   console.log(topic, file_path, subject, author, likes); // Debugging props
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 bg-white">
//       {/* Card Header */}
//       <div className="px-6 py-4 border-b border-gray-300 flex justify-between items-center">
//         <span className="font-bold text-lg text-gray-800">{topic}</span>
//         <span className="text-gray-500 text-sm">{subject}</span>
//       </div>

//       {/* Card Content */}
//       <div className="px-6 py-4">
//         <p className="text-gray-700 text-sm">
//           <strong>Author:</strong> {author}
//         </p>
//         <p className="text-gray-500 text-sm">
//           <strong>Likes:</strong> {likes}
//         </p>
//       </div>

//       {/* Card Footer */}
//       <div className="px-6 py-4 border-t border-gray-300 flex items-center justify-between">
//         <a
//           href={file_path}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 hover:underline"
//         >
//           Download
//         </a>
//         <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
//           Preview
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ topic, file_path, subject, author, likes }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300 group">
      {/* Card Header with Subject Tag */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-gray-50 to-white">
        <h3 className="text-lg font-semibold text-gray-800 truncate max-w-[180px]">{topic}</h3>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap">
          {subject}
        </span>
      </div>

      {/* Card Content with Inner Shadow */}
      <div className="p-4 relative">
        {/* Inner shadow effect */}
        <div className="absolute inset-0 overflow-hidden rounded-b-lg pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-gray-50/50 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-gray-50/50 to-transparent"></div>
        </div>

        <div className="flex items-center mb-3">
          <img
            className="w-8 h-8 rounded-full mr-2 border-2 border-white shadow-sm"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt={author}
          />
          <span 
            className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
            onClick={() => navigate(`/author_profile/${author}`)}
          >
            {author}
          </span>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="font-medium text-gray-600">{likes}</span> likes
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-50/50 flex justify-between items-center">
        <a
          href={file_path}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center group-hover:translate-x-1 transition-transform"
        >
          View Notes
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;