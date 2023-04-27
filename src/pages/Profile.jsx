import { getAuth, updateProfile } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcHome } from "react-icons/fc";
import { db } from "../firebase";
import ListingItem from "./ListingItem";

const Profile = () => {
  const auth = getAuth();

  const [changeDisplayName, setChangeDisplayName] = useState(false);
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    async function fetchUserListings() {
      const listingRef = collection(db, "listings");
      const q = query(
        listingRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );
      const querySnap = await getDocs(q);
      let listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      setLoading(false);
    }
    fetchUserListings();
  }, [auth.currentUser.uid]);

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
          <button
            type="submit"
            className=" w-full bg-blue-700 rounded  text-white font-medium text-sm uppercase py-3 px-2 transition duration-150 ease-out hover:bg-blue-500 hover:text-gray-200 active:bg-blue-800"
          >
            <Link
              to="/create-listing"
              className="flex justify-center items-center"
            >
              <FcHome className=" mr-2 bg-red-200 text-3xl rounded-full p-1 border-2" />
              Sell or Rent Your Home
            </Link>
          </button>
        </div>
      </section>
      {!loading && listings.length > 0 && (
        <section className=" max-w-6xl px-3 mt-6 mx-auto">
          <div>
            <h2 className="  mt-6 text-center text-2xl font-bold uppercase">
              My Listing
            </h2>
          </div>
          <div>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mb-6 mt-6">
              {listings.map((listing) => {
                return (
                  <ListingItem
                    key={listing.id}
                    id={listing.id}
                    listing={listing.data}
                  />
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
