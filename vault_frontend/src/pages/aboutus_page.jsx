


// import React from "react";
// import { useNavigate } from "react-router-dom";

// const AboutUs = () => {
//   const navigate = useNavigate(); // React Router hook for navigation

//   const handleGetStartedClick = () => {
//     navigate("/home"); // Navigate to the /home route
//   };

//   return (
//     <>
//       {/* Background Section */}
//       <div className="bg-gradient-to-br from-blue-100 to-blue-200 min-h-screen">
//         <section className="py-24 relative justify-center">
//           <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
//             <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
//               {/* Text Section */}
//               <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
//                 <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
//                   <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
//                     Building Stronger Communities through Collaboration and Empowerment
//                   </h2>
//                   <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
//                     Through collaboration, diverse perspectives and strengths are leveraged to create inclusive environments
//                     where everyone has the opportunity to thrive. This approach not only fosters personal growth and
//                     achievement but also strengthens the fabric of society.
//                   </p>
//                 </div>
//                 {/* Button */}
//                 <button
//                   onClick={handleGetStartedClick} // Handle button click
//                   className="sm:w-fit w-full px-3.5 py-2 bg-blue-500 hover:bg-blue-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
//                 >
//                   <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
//                 </button>
//               </div>
//               {/* Image Section */}
//               <img
//                 className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
//                 src="https://www.villagetalkies.com/wp-content/uploads/2021/12/Here-we-have-the-tips-solutions.jpg"
//                 alt="About Us"
//               />
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default AboutUs;



import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Building Stronger Communities Through Shared Knowledge
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our platform empowers students and educators to collaborate, share resources, and grow together. 
              By leveraging diverse perspectives, we create inclusive learning environments where everyone 
              has the opportunity to thrive.
            </p>
            <button
              onClick={handleGetStartedClick}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 shadow-sm"
            >
              Get Started
            </button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              className="w-full rounded-xl shadow-md border border-gray-200"
              src="https://www.villagetalkies.com/wp-content/uploads/2021/12/Here-we-have-the-tips-solutions.jpg"
              alt="Students collaborating"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Knowledge Sharing</h3>
              <p className="text-gray-600">
                We believe education should be accessible to all. Our platform makes it easy to share and discover quality learning materials.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Focus</h3>
              <p className="text-gray-600">
                We foster supportive learning communities where members can connect, collaborate, and grow together.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Continuous Growth</h3>
              <p className="text-gray-600">
                Learning is a lifelong journey. We provide tools and resources to help you at every stage of your educational path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to join our learning community?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start sharing your knowledge or discover resources from other students and educators today.
          </p>
          <button
            onClick={handleGetStartedClick}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 shadow-sm"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
