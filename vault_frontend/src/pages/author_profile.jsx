
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// // import Navbar from './Navbar';
// import { useParams } from 'react-router-dom';


// const Author_profile = () => {
//     const [profile, setProfile] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [files, setFiles] = useState([]);
//     const current_user = localStorage.getItem("user");


//     const {author_name} = useParams();

//     // const name = author_name;

//     console.log(author_name);
//     // const username = author_name


//     useEffect(() => {
//         // Replace this URL with your API endpoint
//         const fetchProfile = async () => {
//             try {  
//               console.log("Get into try block");
//                 const response = await axios.get(`${import.meta.env.VITE_API}/user/profile/${author_name}`);
//                 setProfile(response.data);
//                 setFiles(response.data.all_files);
//                 setLoading(false);
                
//             } catch (err) {
//                 setError(err.message);
//                 setLoading(false);
//             }
//         };

//         fetchProfile();
//     }, [author_name]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }
   
//     return (
//         <>
//         <div className='bg-gradient-to-br from-blue-100 to-blue-200'>
//          <header className="px-2 py-4 flex flex-col justify-center items-center text-center">
//                 <img
//                     className="inline-flex object-cover border-4 border-blue-500 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-blue-600/100 bg-indigo-50 text-blue-500 h-24 w-24 !h-48 !w-48"
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"
//                     alt=""
//                 />
//                 <h1 className="text-2xl text-gray-500 font-bold mt-2">{profile.user.username}</h1>
//                 <h2 className="text-base md:text-xl text-gray-500 font-bold">
//                    {profile.user.profession}
//                     <a
//                         href="#"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="dark:bg-gray-900 hover:text-blue-600 font-bold border-b-0 hover:border-b-4 hover:border-b-blue-300 transition-all mb-2"
//                     >
//                     </a>
//                 </h2>
//                 {/* <div className='m-3'>
                        
//                     <div className='px-4 py-2 bg-violet-700 text-white rounded-lg hover:bg-indigo-500 transition'>
//                         {profile.user.stars}
//                     </div>
//                     <button className="m-3 px-4 py-2 bg-violet-700 text-white rounded-full hover:bg-indigo-500 transition">
//                             Follow
//                     </button>
//                 </div>   */}
//             </header>

//             <div>
//             <hr className="my-2 h-1 border-t-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50 dark:via-neutral-400" />
//   <div className='text-2xl font-bold mb-4 text-center'>
//     Contributions
//   </div>

//   <div className="flex justify-around flex-wrap">
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
// </div>
// </div>
//     </>
//     );
// };

// export default Author_profile;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AuthorProfile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [files, setFiles] = useState([]);
    const { author_name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API}/user/profile/${author_name}`);
                setProfile(response.data);
                setFiles(response.data.all_files);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProfile();
    }, [author_name]);

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
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Error Loading Profile</h3>
                    <p className="text-gray-600">{error}</p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-8">
            {/* Profile Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center">
                    <div className="relative">
                        <img
                            className="h-32 w-32 rounded-full border-4 border-white shadow-lg"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                            alt={profile.user.username}
                        />
                        <div className="absolute -bottom-2 -right-2 bg-blue-100 rounded-full p-2 border-2 border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-800 mt-4">{profile.user.username}</h1>
                    <p className="text-gray-500">{profile.user.profession}</p>
                    <div className="flex items-center mt-4 space-x-4">
                        <div className="flex items-center text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <span>{profile.user.stars || 0} Stars</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span>{files.length} Contributions</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contributions Section */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">Contributions</h2>
                
                {files.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-sm p-8 text-center border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h3 className="text-lg font-medium text-gray-700 mt-4">No contributions yet</h3>
                        <p className="text-gray-500 mt-1">This user hasn't shared any notes yet</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {files.map((file, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                            {file.subject}
                                        </span>
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{file.topic}</h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{file.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                                {file.likes}
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => window.open(file.file_path, '_blank')}
                                            className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
                                        >
                                            View Notes
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </button>
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

export default AuthorProfile;