import { FaExclamationTriangle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Helmet>
        <title>Lingo Bingo - 404 Error</title>
      </Helmet>
     
     
      

      <section className="w-full max-w-lg p-6 md:p-12 lg:p-16 xl:p-28 bg-white rounded shadow">
        <div className="flex justify-center text-5xl text-red-500">
          <FaExclamationTriangle />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center pb-4 font-bold text-red-600 kosugi-maru-regular">
          Oops! Something Went Wrong
        </h1>
        <p className="text-center text-sm sm:text-base md:text-lg pb-4 kosugi-maru-regular">
          The page you are looking for does not exist.
        </p>
        <div className="flex justify-center">
          <NavLink to="/" className="btn btn-warning px-4 py-2 text-sm sm:text-base kosugi-maru-regular">
            Go back to Home
          </NavLink>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ErrorPage;
