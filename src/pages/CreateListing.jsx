import React, { useState } from "react";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    type: "sale",
    name: "",
    address: "",
    beds: 3,
    bath: 1,
    parking: true,
    furnished: true,
    description: "",
    offer: true,
    regularPrice: 0,
    discountedPrice: 0,
  });

  const {
    type,
    name,
    address,
    beds,
    bath,
    parking,
    furnished,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;

  const onChange = () => {};
  return (
    <main className="max-w-md mx-auto px-3">
      <div>
        <h1 className=" text-center text-3xl text-black font-bold mt-6 uppercase ">
          Create a Listing
        </h1>
        <form>
          <div className=" text-lg mt-6 font-semibold"> Sell / Rent</div>
          <div className="flex ">
            <button
              type="button"
              id="type"
              name="type"
              value="sale"
              onClick={onChange}
              className={` mr-3 uppercase text-sm font-semibold py-3 px-7 shadow-md w-full hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
                type === "sale"
                  ? "bg-white text-black"
                  : " bg-gray-700 text-white"
              }`}
            >
              Sell
            </button>
            <button
              type="button"
              id="type"
              value="rent"
              onClick={onChange}
              className={`ml-3 text-sm uppercase font-semibold py-3 px-7 shadow-md w-full hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
                type === "rent"
                  ? "bg-white text-black"
                  : " bg-gray-700 text-white"
              }`}
            >
              Rent
            </button>
          </div>
          <div className="mt-6 ">
            <p className=" text-lg font-semibold">Name</p>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Name"
              maxLength={32}
              minLength={8}
              required
              className=" w-full   font-semibold text-sm text-gray-700 py-3 px-6 rounded shadow-md bg-white hover:bg-white hover:shadow-lg focus:bg-white focus:shadow-lg  focus:text-gray-700 active:bg-white active:text-gray-700   active:shadow-lg transition duration-150 ease-in-out outline-none border-none "
            />
          </div>
          <div className="mt-6 mb-6 flex items-center justify-center max-w-[50%]">
            <div>
              <p className=" text-lg font-semibold">Beds</p>
              <input
                type="number"
                id="beds"
                name="beds"
                value={beds}
                className="mr-6 uppercase text-center w-full text-gray-700 bg-white font-semibold text-sm py-3 px-6 rounded shadow-md hover:shadow-lg focus:shadow-lg focus:text-gray-700 focus:bg-white active:shadow-lg transition duration-150 ease-in-out outline-none border-none "
              />
            </div>
            <div className=" ml-6">
              <p className="  text-lg font-semibold ">Bath</p>
              <input
                type="number"
                id="bath"
                name="bath"
                value={bath}
                required
                minLength={1}
                maxLength={30}
                className=" w-full uppercase text-center text-gray-700 bg-white  font-semibold text-sm py-3 px-6 rounded shadow-md hover:shadow-lg focus:shadow-lg focus:text-gray-700 focus:bg-white active:shadow-lg transition duration-150 ease-in-out outline-none border-none "
              />
            </div>
          </div>
          <div className=" text-lg mt-6 font-semibold"> Parking Spot</div>
          <div className="flex ">
            <button
              type="button"
              id="parking"
              value={true}
              onClick={onChange}
              required
              minLength={1}
              maxLength={30}
              className={` mr-3 uppercase text-sm font-semibold py-3 px-7 shadow-md w-full hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
                !parking ? "bg-white text-black" : " bg-gray-700 text-white"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              id="parking"
              value={false}
              onClick={onChange}
              className={`ml-3 text-sm uppercase font-semibold py-3 px-7 shadow-md w-full hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
                parking ? "bg-white text-black" : " bg-gray-700 text-white"
              }`}
            >
              No
            </button>
          </div>
          <div className=" text-lg mt-6 font-semibold"> Furnished</div>
          <div className="flex ">
            <button
              type="button"
              id="furnished"
              value={true}
              onClick={onChange}
              className={` mr-3 text-sm uppercase font-semibold py-3 px-7 shadow-md w-full hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
                !furnished ? "bg-white text-black" : " bg-gray-700 text-white"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              id="furnished"
              value={false}
              onClick={onChange}
              className={`ml-3 text-sm uppercase font-semibold py-3 px-7 shadow-md w-full hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
                furnished ? "bg-white text-black" : " bg-gray-700 text-white"
              }`}
            >
              No
            </button>
          </div>
          <div className="mt-6 ">
            <p className=" text-lg font-semibold">Address</p>
            <textarea
              type="text"
              id="address"
              value={address}
              onChange={onChange}
              placeholder="Address"
              required
              className=" w-full font-semibold text-sm text-gray-700 py-3 px-6 rounded shadow-md bg-white hover:bg-white hover:shadow-lg focus:bg-white focus:shadow-lg  focus:text-gray-700 active:bg-white active:text-gray-700   active:shadow-lg transition duration-150 ease-in-out outline-none border-none "
            />
          </div>
          <div className="mt-6 ">
            <p className=" text-lg font-semibold">Description</p>
            <textarea
              type="text"
              id="description"
              value={description}
              onChange={onChange}
              placeholder="Description"
              required
              className=" w-full mb-6  font-semibold text-sm text-gray-700 py-3 px-6 rounded shadow-md bg-white hover:bg-white hover:shadow-lg focus:bg-white focus:shadow-lg  focus:text-gray-700 active:bg-white active:text-gray-700   active:shadow-lg transition duration-150 ease-in-out outline-none border-none "
            />
          </div>
          <div className=" text-lg font-semibold"> Offer</div>
          <div className="flex ">
            <button
              type="button"
              id="offer"
              value={true}
              onClick={onChange}
              className={` mr-3 mb-6 text-sm uppercase font-semibold py-3 px-7 shadow-md w-full hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
                !offer ? "bg-white text-black" : " bg-gray-700 text-white"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              id="offer"
              value={false}
              onClick={onChange}
              className={`ml-3 mb-6 text-sm uppercase font-semibold py-3 px-7 shadow-md w-full hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
                offer ? "bg-white text-black" : " bg-gray-700 text-white"
              }`}
            >
              No
            </button>
          </div>
          <div className=" ">
            <p className="text-lg font-semibold whitespace-nowrap">
              Regular Price
            </p>
            <div className=" flex">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                required
                min={50}
                max={400000000}
                className="w-full max-w-[25%] mb-6 uppercase text-center text-gray-700 bg-white  font-semibold text-sm py-3 px-6 rounded shadow-md hover:shadow-lg focus:shadow-lg focus:text-gray-700 focus:bg-white active:shadow-lg transition duration-150 ease-in-out outline-none border-none "
              />
              {type === "rent" && (
                <p className="ml-3 mt-3 text-sm text-gray-800">$/Month</p>
              )}
            </div>
          </div>
          {offer && (
            <div className=" max-w-[25%]">
              <p className="text-lg font-semibold whitespace-nowrap">
                Discounted Price
              </p>
              <input
                type="number"
                id="discountedPrice"
                value={discountedPrice}
                onChange={onChange}
                min={50}
                max={400000000}
                required={offer}
                className="w-full mb-6 uppercase text-center text-gray-700 bg-white  font-semibold text-sm py-3 px-6 rounded shadow-md hover:shadow-lg focus:shadow-lg focus:text-gray-700 focus:bg-white active:shadow-lg transition duration-150 ease-in-out outline-none border-none "
              />
            </div>
          )}
          <div className="mb-6">
            <p className="text-lg font-semibold ">Images</p>
            <p className="text-sm text-gray-600">
              The first image will be the cover (max 6)
            </p>
            <input
              type="file"
              id="image"
              onChange={onChange}
              accept=".jpg,.png,.jpeg"
              multiple
              required
              className=" w-full bg-white px-6 py-2 text-center  shadow-md border-none outline-none hover:shadow-lg focus:shadow-lg focus:border-none focus:outline-none active:border-none active:outline-none active:shadow-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full font-semibold text-sm px-7 py-3 mb-6 text-white bg-blue-700 outline-none border-none uppercase rounded transition duration-150 ease-in-out hover-bg-blue-600 focus:bg-blue-700 active:bg-blue-800"
          >
            Create Listing
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateListing;
