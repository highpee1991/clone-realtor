import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase";

const Profile = () => {
  const auth = getAuth();

  const [changeDisplayName, setChangeDisplayName] = useState(false);

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  async function onSubmit() {
    try {
      // update the fireauth
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // update firestore
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success("profile successfully updated");
    } catch (error) {
      toast.error("profile not updated, please try again");
    }
  }

  const editName = () => {
    changeDisplayName && onSubmit();
    setChangeDisplayName((prev) => !prev);
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <section className=" max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className=" text-black text-center font-bold uppercase mt-6 text-3xl ">
          My Profile
        </h1>
        <div className="w-full md:w-[50%]  mt-6 px-3">
          <form>
            <input
              type="text"
              name="name"
              value={name}
              id="name"
              onChange={onChange}
              disabled={!changeDisplayName}
              className={`w-full mb-6 py-2 px-4 text-xl text-gray-700 border-gray-300 bg-white rounded transition ease-in-out ${
                changeDisplayName && " bg-red-200 focus:bg-red-200"
              }`}
            />

            <input
              type="email"
              name="email"
              id="email"
              value={email}
              disabled
              className=" w-full mb-6 py-2 px-4 text-xl text-gray-700  border-r-gray-300 bg-white rounded
             transition ease-in-out"
            />

            <div className=" flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className=" flex items-center justify-center">
                Do you want to change your Name?{" "}
                <span
                  onClick={editName}
                  className=" ml-1 text-red-700 hover:text-red-500 transition duration-200 ease-in-out cursor-pointer"
                >
                  {!changeDisplayName ? "Edit" : "Update Name "}
                </span>
              </p>
              <p
                onClick={onLogout}
                className=" text-blue-700 hover:text-blue-500 transition duration-200 ease-in-out cursor-pointer"
              >
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
