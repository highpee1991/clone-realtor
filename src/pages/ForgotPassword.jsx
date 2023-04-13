import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [resetPassword, setResetPassword] = useState("");

  const navigate = useNavigate();

  // onchange function
  const onSubmitData = (e) => {
    const { value } = e.target;

    setResetPassword(value);
  };

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, resetPassword);
      toast.success(`Successful Please check your email`);
    } catch (error) {
      toast.error("Unable to reset password");
    }
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>

      <div className="flex justify-center items-center flex-wrap py-12 px-6 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              value={resetPassword}
              onChange={onSubmitData}
              placeholder="Email address"
              className="w-full px-4 py-2 mb-6 text-xl text-gray-700 bg-white border-hidden rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="">
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/sign-up")}
                  className="cursor-pointer text-red-600 hover:text-red-700 transition duration-200 ease-in-out"
                >
                  Register
                </span>
              </p>
              <p
                className="cursor-pointer text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                onClick={() => navigate("/sign-in")}
              >
                Sign in instead
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 rounded py-3 px-7 uppercase hover:bg-blue-900 hover:shadow-lg active:bg-blue-600 transition duration-200 ease-in-out shadow-md mt-6 text-white"
            >
              Send reset password
            </button>
            <div
              className="my-4 flex  items-center before:border-t  before:flex-1 before:border-gray-300
          after:border-t  after:flex-1 after:border-gray-300"
            >
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
