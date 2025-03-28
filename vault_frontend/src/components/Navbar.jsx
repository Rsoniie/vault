


// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import SearchForm from "./search_bar";

// function Navbar() {
//   const [navbarMenuOpen, setNavbarMenuOpen] = useState(false);
//   const navigate = useNavigate(); // Hook to programmatically navigate

//   const activeLinkStyle = {
//     boxShadow: "0 -2px 10px rgba(255, 215, 0, 0.75)"
//   };

//   const handleNavLinkClick = () => {
//     setNavbarMenuOpen(false); // Close the navbar menu on click
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//     setNavbarMenuOpen(false);
//   };

//   return (
//     <>
//       <nav className="bg-indigo-500 border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <NavLink to="/home" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={handleNavLinkClick}>
//             <img
//               src="https://flowbite.com/docs/images/logo.svg"
//               className="h-8"
//               alt="Flowbite Logo"
//             />
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//               DocVault
//             </span>
//           </NavLink>

//           <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <button
//               data-collapse-toggle="navbar-user"
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               onClick={() => setNavbarMenuOpen(!navbarMenuOpen)}
//               aria-controls="navbar-user"
//               aria-expanded={navbarMenuOpen ? "true" : "false"}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>

//           <div
//             className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
//               navbarMenuOpen ? "block" : "hidden"
//             }`}
//             id="navbar-user"
//           >
//             <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <SearchForm />
//               </li>
//               {[
//                 { path: "/upload", label: "Contribute" },
//                 { path: "/about", label: "About" },
//                 { path: "/feedback", label: "Feedback" },
//                 { path: "/profile", label: "Profile" },
//                 // Adding the logout option
//                 { path: "/logout", label: "Logout", action: handleLogout }
//               ].map((item) => (
//                 <li key={item.path}>
//                   <NavLink
//                     to={item.path}
//                     onClick={item.action ? item.action : handleNavLinkClick} // Use logout action if specified
//                     className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                     style={({ isActive }) =>
//                       isActive ? activeLinkStyle : undefined
//                     }
//                   >
//                     {item.label}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;




import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [navbarMenuOpen, setNavbarMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavLinkClick = () => {
    setNavbarMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    setNavbarMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 py-3">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <NavLink 
            to="/home" 
            onClick={handleNavLinkClick}
            className="flex items-center space-x-2"
          >
            <div className="p-1.5 bg-blue-600 rounded-lg shadow-sm">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-6 filter brightness-0 invert"
                alt="DocVault Logo"
              />
            </div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800 hover:text-blue-600 transition-colors">
              DocVault
            </span>
          </NavLink>
        </div>

        {/* Right side elements - Menu Button and Logout Icon */}
        <div className="flex items-center md:order-2 space-x-4">
          {/* Logout Icon - Visible on all screens */}
          <button
            onClick={handleLogout}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors group hidden md:block"
            title="Logout"
            aria-label="Logout"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 group-hover:text-red-500 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
            onClick={() => setNavbarMenuOpen(!navbarMenuOpen)}
            aria-expanded={navbarMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            navbarMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            {[
              { path: "/upload", label: "Contribute" },
              { path: "/about", label: "About" },
              { path: "/feedback", label: "Feedback" },
              { path: "/profile", label: "Profile" },
            ].map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={handleNavLinkClick}
                  className={({ isActive }) => 
                    `block py-2 px-3 rounded-lg md:rounded-none transition-colors ${
                      isActive 
                        ? "text-blue-600 bg-blue-50 md:bg-transparent md:border-b-2 md:border-blue-600 font-medium" 
                        : "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            {/* Mobile Logout Button */}
            <li className="md:hidden">
              <button
                onClick={handleLogout}
                className="block w-full text-left py-2 px-3 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;