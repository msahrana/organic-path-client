// import {Link, NavLink} from "react-router-dom";
// import useAuth from "../../hooks/useAuth/useAuth";
// import toast from "react-hot-toast";

// const Navbar = () => {
//   const {user, logOut} = useAuth();

//   const handleLogOut = () => {
//     logOut().then(toast.success("User LogOut Successfully!")).catch();
//   };

//   const navLinks = (
//     <>
//       <li>
//         <NavLink
//           className={({isActive}) => (isActive ? "bg-red-500 text-white" : "")}
//           to="/"
//         >
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className={({isActive}) => (isActive ? "bg-red-500 text-white" : "")}
//           to="/contactUs"
//         >
//           ContactUs
//         </NavLink>
//       </li>
//     </>
//   );

//   return (
//     <div className="navbar bg-base-100">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             {navLinks}
//           </ul>
//         </div>
//         <Link to="/" className="btn btn-ghost text-xl uppercase">
//           Organic Path
//         </Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{navLinks}</ul>
//       </div>
//       <div className="navbar-end">
//         {user ? (
//           <div className="hidden md:flex lg:flex">
//             <div title={user?.displayName}>
//               <img
//                 referrerPolicy="no-referrer"
//                 alt="User Profile Photo"
//                 src={user?.photoURL}
//                 className="w-10 rounded-full"
//               />
//             </div>
//             <button
//               onClick={handleLogOut}
//               className="bg-red-500 px-2 py-1 rounded-lg text-white"
//             >
//               Logout
//             </button>
//           </div>
//         ) : (
//           <Link to="/login">
//             <button className="bg-red-500 px-2 py-1 rounded-lg text-white">
//               Login
//             </button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
