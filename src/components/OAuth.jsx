import React from "react";

import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <button className="flex items-center justify-center w-full bg-red-600 py-3 px-7 rounded text-white font-semibold hover:bg-red-500 active:bg-red-900 hover:shadow-md active:shadow-lg transition ease-in-out duration-150 uppercase">
      <FcGoogle className="mr-2 text-2xl bg-white rounded-full " />
      Continue With Google
    </button>
  );
};

export default OAuth;
