import { FaUser, FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", photoURL: "" });
  const navigate = useNavigate();

  const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleSignup = async () => {
    if (!form.name || !form.email || !form.password) {
      toast.error("Please fill out all fields.", { position: "top-right", autoClose: 5000 });
      return;
    }

    if (!passwordValidation.test(form.password)) {
      toast.error("Password must contain at least 6 characters, including an uppercase letter and a lowercase letter.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: form.name,
        photoURL: form.photoURL || null, 
      });

      toast.success("Signup successful!", { position: "top-right", autoClose: 3000 });
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.message || "Signup failed. Please try again.", { position: "top-right", autoClose: 5000 });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="w-full max-w-sm p-6 bg-white rounded shadow">
        <h1 className="text-3xl pb-2 font-bold">Sign Up</h1>
        <p className="text-xs pb-4">Enter your details to create an account...</p>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <FaUser />
          <input
            type="text"
            className="grow"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>
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
        <label className="input input-bordered flex items-center gap-2 mb-4">
          <FaKey />
          <input
            type="password"
            className="grow"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <FaUser />
          <input
            type="text"
            className="grow"
            placeholder="Photo URL (Optional)"
            value={form.photoURL}
            onChange={(e) => setForm({ ...form, photoURL: e.target.value })}
          />
        </label>
        <div className="flex justify-center pt-4">
          <button onClick={handleSignup} className="btn">
            Sign Up
          </button>
        </div>
        <div className="flex justify-center pt-4">
          <p className="text-xs">Already have an account?</p>
          <NavLink to="/Auth" className="text-xs text-blue-600 font-bold underline pl-1">
            Login
          </NavLink>
        </div>
        <NavLink to="/" className="text-xs text-blue-600 font-bold underline pl-1 flex justify-center pt-2">
          Back to Home
        </NavLink>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Signup;
