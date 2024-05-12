import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const handleSave = () => {
    updateUserProfile(displayName, photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch(() => {
        toast.error("Failed to update profile.");
      });
  };

  return (
    <>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <div className="container mx-auto">
            <div className="px-4 py-8">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient bg-gradient-to-r from-violet-600 to-pink-500 text-transparent bg-clip-text">
                  Profile
                </span>
              </h2>
              <div className="border w-full space-y-1 p-10 bg-gradient-to-r from-violet-200 to-pink-500 rounded-xl shadow-md">
                <h2 className="font-semibold text-xl">Edit Your Profile</h2>
                <div>
                  <label htmlFor="displayName" className="font-bold">
                    Display Name:{" "}
                  </label>
                  <input
                    type="text"
                    className="border p-3 rounded-md w-full"
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="photoURL" className="font-bold">
                    Photo URL:{" "}
                  </label>
                  <input
                    type="text"
                    id="photoURL"
                    value={photoURL}
                    className="border p-3 rounded-md w-full"
                    onChange={(e) => setPhotoURL(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-bold">
                    Email:{" "}
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    className="border p-3 rounded-md w-full"
                    disabled
                  />
                </div>
                <div>
                  <button
                    onClick={handleSave}
                    className="btn w-full mt-3 btn-outline border-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
};

export default Profile;
