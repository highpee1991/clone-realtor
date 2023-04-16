import React from "react";
import spinner from "../asset/svg/spinner.svg";

const Spinner = () => {
  return (
    <div className=" bg-black bg-opacity-50 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 ">
      <img src={spinner} alt="Loading..." className=" h-24" />
    </div>
  );
};

export default Spinner;
