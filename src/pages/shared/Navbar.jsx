import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import userDefaultPic from "../../assets/user.png";
import { GiBookCover } from "react-icons/gi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink exact to="/" activeClassName="font-bold text-indigo-600">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allBooks"
          activeClassName="font-bold text-indigo-600"
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addBooks"
          activeClassName="font-bold text-indigo-600"
        >
          Add Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/borrowedBooks" activeClassName="font-bold text-indigo-600">
          Borrowed Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" activeClassName="font-bold text-indigo-600">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeClassName="font-bold text-indigo-600">
          Login
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/about" activeClassName="font-bold text-indigo-600">
          About
        </NavLink>
      </li> */}
    </>
  );

  return (
    <div className="navbar bg-base-100 flex justify-between items-center py-4 ">
      <div className="navbar-start">
        <div className="flex items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-1 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <div className=" font-bold flex justify-between py-2 pr-2 hover:rounded-md items-center gap-1 hover:bg-gray-100 ">
              <p className="text-pink-600 text-5xl"><GiBookCover/></p>
              <div>
                <h1 className=" md:text-xl text-sm lg:text-xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Book Mate
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <Link
              to="/profile"
              className="relative flex items-center"
              title={user.displayName}
            >
              {user.photoURL ? (
                <img
                  className="w-10 h-10 rounded-full mr-2"
                  src={user.photoURL}
                  alt="User Avatar"
                />
              ) : (
                <img
                  className="w-10 h-10 rounded-full mr-2"
                  src={userDefaultPic}
                  alt="Default Avatar"
                />
              )}
              <span className="absolute top-full text-white rounded px-2 py-1 whitespace-nowrap hidden group-hover:block">
                {user.displayName}
              </span>
            </Link>
            <button
              onClick={handleSignOut}
              className="btn btn-sm btn-outline border-none ml-3"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
