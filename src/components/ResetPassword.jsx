import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [countdown, setCountdown] = useState(10);
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleResetPassword = async () => {
    if (!email) {
      toast.error("Please enter your email to reset the password.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent. Check your inbox!", {
        position: "top-right",
        autoClose: 5000,
      });

      // Open Gmail immediately
      window.open("https://www.gmail.com/", "_blank");

      setRedirecting(true); // Start the redirect countdown
    } catch (error) {
      console.error("Error sending password reset email:", error);
      toast.error(
        error.message || "Failed to send password reset email. Please try again.",
        {
          position: "top-right",
          autoClose: 5000,
        }
      );
    }
  };

  useEffect(() => {
    let timer;
    if (redirecting) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            navigate("/Auth"); 
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer); 
  }, [redirecting, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="w-full max-w-sm p-6 bg-white rounded shadow">
        <h1 className="text-3xl pb-2 font-bold">Reset Password</h1>
        <p className="text-xs pb-4">Enter your email to reset your password.</p>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <MdEmail />
          <input
            type="email"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <div className="flex justify-center pt-4">
          <button onClick={handleResetPassword} className="btn">
            Reset Password
          </button>
        </div>

        <div>
          <NavLink
            to="/Auth"
            className="text-xs text-blue-600 font-bold underline pl-1 flex justify-center pt-2"
          >
            Back to Login{" "}
          </NavLink>
        </div>

        {redirecting && (
          <p className="text-xs text-center pt-4">
            Redirecting to login page in <span className="font-bold">{countdown}</span> seconds...
          </p>
        )}
      </section>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
