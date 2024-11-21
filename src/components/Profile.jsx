import { useState, useEffect } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import Footer from "./Footer";
import Nav from "./Nav";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const Profile = () => {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", photoURL: "" });

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

  const handleUpdateProfile = async () => {
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: formData.name || user.name,
          photoURL: formData.photoURL || user.photoURL,
        });
        setUser({
          ...user,
          name: formData.name || user.name,
          photoURL: formData.photoURL || user.photoURL,
        });
        setShowModal(false);
        toast.success("Profile updated successfully!"); 
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Helmet>
        <title>Lingo Bingo - User Profile</title>
      </Helmet>
      <Nav />
      <div className="container mx-auto mt-8 min-h-screen lato-regular">
        {user ? (
          <div className="bg-base-100 shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4">
              Welcome, {user.name || "User"}!
            </h1>
            <div className="flex flex-col items-center gap-4">
              <div className="avatar">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="rounded-full w-32 h-32 object-cover"
                  />
                ) : (
                  <div className="rounded-full bg-gray-200 w-32 h-32 flex items-center justify-center">
                    <span className=" flex justify-center pt-14 text-sm">No Image Found</span>
                  </div>
                )}
              </div>
              <div className="text-lg">
                <p>
                  <strong>Name:</strong> {user.name || "Not available"}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="btn btn-primary btn-sm">
                Update Profile
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center mt-20">
            <p className="text-lg">Please log in to view your profile.</p>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 dark:text-base-200">Update Profile</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="New Name"
                defaultValue={user.name}
                className="input input-bordered w-full"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="photoURL"
                placeholder="New Photo URL"
                defaultValue={user.photoURL}
                className="input input-bordered w-full"
                onChange={handleInputChange}
              />
              <div className="flex gap-4">
                <button
                  onClick={handleUpdateProfile}
                  className="btn btn-success dark:text-base-200">
                  Save
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="btn btn-error dark:text-base-200">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
      <ToastContainer /> 
    </div>
  );
};

export default Profile;
