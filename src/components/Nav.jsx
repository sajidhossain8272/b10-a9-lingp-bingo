import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { FaUserCircle } from "react-icons/fa"; 
// eslint-disable-next-line no-unused-vars
import { toast } from "react-toastify";

const Nav = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName,
          email: currentUser.email,
          photoURL: currentUser.photoURL,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="kosugi-maru-regular lg:pl-20 lg:pr-20">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/lets-learn">Start-Learning</NavLink></li>
              <li><NavLink to="/tutorial">Tutorial</NavLink></li>
              <li><NavLink to="*">About Us</NavLink></li>
              <li><NavLink to="/profile">My Profile</NavLink></li>


              
            </ul>
          </div>
          <a className=" text-xl kosugi-maru-regular underline">Lingo Bingo</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/lets-learn">Start-Learning</NavLink></li>
            <li><NavLink to="/tutorial"> Tutorial</NavLink></li>
            <li><NavLink to="*">About Us</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          {user ? (
            <>
              <NavLink to="/profile" className=" flex items-center gap-2">
              
              <h1 className="lg:text-xl lg:inline hidden font-bold ">
              Welcome, {user.name || "User"}!
            </h1>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                
                  <div className="rounded-full">
                    {  user.photoURL ? (
                      <img src={user.photoURL} alt="" />
                    ) : (
                      <FaUserCircle className="btn btn-circle" />  
                    )}
                  </div>
                </label>
                <button className="btn btn-outline btn-sm hidden lg:inline ">My Profile</button>

              </NavLink>
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-outline btn-error text-xs">
                Log Out
              </button>
            </>
          ) : (
            <NavLink to="/Auth" className="btn btn-sm  bg-green-600 text-xs text-base-100">
              Log In
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
