import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithGoogle, auth } from "../firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Email and Password validation 
const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

const Auth = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const signedInUser = await signInWithGoogle();
      if (signedInUser) {
        setUser(signedInUser);
        toast.success("Google login successful!", {
          position: "top-right",
          autoClose: 3000,
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
      toast.error(`Login failed: ${error.code || "Unknown error"}`, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  const handleEmailLogin = async () => {
    if (!form.email || !form.password) {
      toast.error("Please fill out all fields.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    // Email validation check
    if (!emailValidation.test(form.email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    // Password validation check
    if (!passwordValidation.test(form.password)) {
      toast.error(
        "Password must be at least 6 characters long, including an uppercase and lowercase letter.",
        {
          position: "top-right",
          autoClose: 5000,
        }
      );
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const signedInUser = userCredential.user;
      setUser(signedInUser);

      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
      });

      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.message || "Login failed. Please try again.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen dark:text-base-200 bg-gradient-to-r from-gray-200 to-gray-500 dark:from-gray-700 dark:to-gray-900">
      <section className="w-full max-w-sm p-6 bg-white rounded shadow">
        <h1 className="text-3xl pb-2 font-bold ">Login</h1>
        <p className="text-xs pb-4">
          Authorize with Google below to continue...
        </p>
        <button
          onClick={handleSignIn}
          className="btn btn-md flex items-center gap-2"
        >
          <FcGoogle />
          Login with Google
        </button>
        <p className="text-xs pb-2 flex justify-center pt-2">or continue with</p>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <MdEmail />
          <input
            type="email"
            className="grow"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <FaKey />
          <input
            type="password"
            className="grow"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </label>
        <div className="flex gap-32 pt-4">
          <NavLink
            to="/ResetPassword"
            state={{ email: form.email }} 
            className="btn justify-start"
          >
            Forgot Password?
          </NavLink>
          <button onClick={handleEmailLogin} className="btn">
            Login
          </button>
        </div>
        <div className="flex justify-center">
          <p className="text-xs">Don&apos;t have an account?</p>
          <NavLink
            to="/Signup"
            className="text-xs text-blue-600 font-bold underline pl-1"
          >
            Sign up
          </NavLink>
        </div>
        <NavLink
          to="/"
          className="text-xs text-blue-600 font-bold underline pl-1 flex justify-center pt-2"
        >
          Back to Home{" "}
        </NavLink>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Auth;
