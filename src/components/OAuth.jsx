import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const navigate = useNavigate();

  async function googleClick() {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google");
      console.log(error.message);
    }
  }

  return (
    <button
      type="button"
      onClick={googleClick}
      className="flex items-center justify-center w-full bg-red-600 py-3 px-7 rounded text-white font-semibold hover:bg-red-500 active:bg-red-900 hover:shadow-md active:shadow-lg transition ease-in-out duration-150 uppercase"
    >
      <FcGoogle className="mr-2 text-2xl bg-white rounded-full " />
      Continue With Google
    </button>
  );
};

export default OAuth;
