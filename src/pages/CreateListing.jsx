import React, { useState } from "react";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const CreateListing = () => {
  const [loading, setLoading] = useState(false);
  const [latLongEnabled, setLatLongEnable] = useState(true);
  const [formData, setFormData] = useState({
    type: "sale",
    name: "",
    address: "",
    beds: 1,
    bath: 2,
    parking: false,
    furnished: false,
    description: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    latitude: 0,
    longitude: 0,
    images: {},
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
    latitude,
    longitude,
    images,
  } = formData;

  const onChange = (e) => {
    e.preventDefault();

    const { value, files, id } = e.target;

    let boolean = null;
    if (value === "true") {
      boolean = true;
    }
    if (value === "false") {
      boolean = false;
    }
    // setting files value
    if (files) {
      setFormData((prev) => ({
        ...prev,
        images: files,
      }));
    }
    // boolean, number, value
    if (!files) {
      setFormData((prev) => ({
        ...prev,
        [id]: boolean ?? value,
      }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (discountedPrice >= regularPrice) {
      setLoading(false);
      toast.error("Discounted price need to be less than regular price");
      return;
    }

    if (images.length > 6) {
      setLoading(false);
      toast.error("error! maximum of 6 images can be uploaded");
      return;
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <main className="max-w-md mx-auto px-3">
      <div>
        <h1 className=" text-center text-3xl text-black font-bold mt-6 uppercase ">
          Create a Listing
        </h1>
        <form onSubmit={onSubmit}>
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
                  ? "bg-gray-700 text-white "
                  : " bg-white text-black"
              }`}
            >
              Sell
            </button>
            <button
              type="button"
              id="type"
              name="type"
              value="rent"
              onClick={onChange}
              className={`ml-3 text-sm uppercase font-semibold py-3 px-7 shadow-md w-full hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
                type === "rent"
                  ? " bg-gray-700 text-white"
                  : " bg-white text-black"
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
          <div className="flex space-x-6 mt-6   max-w-[50%]">
            <div>
              <p className=" text-lg font-semibold">Beds</p>
              <input
                type="number"
                id="beds"
                name="name"
                min={1}
                max={30}
                required
                value={beds}
                onChange={onChange}
                className="uppercase text-center w-full text-gray-700 bg-white font-semibold text-sm py-3 px-6 rounded shadow-md hover:shadow-lg focus:shadow-lg focus:text-gray-700 focus:bg-white active:shadow-lg transition duration-150 ease-in-out outline-none border-none "
              />
            </div>
            <div className=" ">
              <p className="  text-lg font-semibold ">Bath</p>
              <input
                type="number"
                id="bath"
                name="bath"
                value={bath}
                onChange={onChange}
                min={1}
                max={30}
                required
                className=" w-full uppercase text-center text-gray-700 bg-white  font-semibold text-sm py-3 px-6 rounded shadow-md hover:shadow-lg focus:shadow-lg focus:text-gray-700 focus:bg-white active:shadow-lg transition duration-150 ease-in-out outline-none border-none "
              />
            </div>
          </div>
          <div className=" text-lg mt-6 font-semibold"> Parking Spot</div>
          <div className="flex ">
            <button
              type="button"
              id="parking"
              name="parking"
              value={true}
              onClick={onChange}
              minLength={1}
              maxLength={30}
              required
              className={` mr-3 uppercase text-sm font-semibold py-3 px-7 shadow-md w-full hover:shadow-lg focus:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out ${
                !parking ? "bg-white text-black" : " bg-gray-700 text-white"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              id="parking"
              name="parking"
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
              name="furnished"
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
              name="furnished"
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
              name="address"
              value={address}
              onChange={onChange}
              placeholder="Address"
              required
              className=" w-full font-semibold text-sm text-gray-700 py-3 px-6 rounded shadow-md bg-white hover:bg-white hover:shadow-lg focus:bg-white focus:shadow-lg  focus:text-gray-700 active:bg-white active:text-gray-700   active:shadow-lg transition duration-150 ease-in-out outline-none border-none "
            />
          </div>
          {!latLongEnabled && (
            <div className=" flex space-x-6 my-6">
              <div className=" w-full">
                <p className=" text-xl font-semibold ">Latitude</p>
                <input
                  type="number"
                  name="latitude"
                  id="latitude"
                  value={latitude}
                  onChange={onChange}
                  required
                  min={-90}
                  max={90}
                  className=" w-full  rounded text-center text-sm font-semibold uppercase outline-none border-none px-6 py-3 shadow-md bg-white text-gray-700 transition duration-150 ease-in-out hover:shadow-lg focus:bg-white focus:shadow-lg active:bg-white active:shadow-lg "
                />
              </div>
              <div className=" w-full">
                <p className=" text-xl font-semibold ">Longitude</p>
                <input
                  type="number"
                  name="longitude"
                  id="longitude"
                  value={longitude}
                  onChange={onChange}
                  required
                  min={-180}
                  max={180}
                  className=" w-full rounded text-center text-sm font-semibold uppercase outline-none border-none px-6 py-3 shadow-md bg-white text-gray-700 transition duration-150 ease-in-out hover:shadow-lg focus:bg-white focus:shadow-lg active:bg-white active:shadow-lg "
                />
              </div>
            </div>
          )}
          <div className="mt-6 ">
            <p className=" text-lg font-semibold">Description</p>
            <textarea
              type="text"
              id="description"
              value={description}
              onChange={onChange}
              name="description"
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
              name="offer"
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
              name="offer"
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
                name="regularPrice"
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
                name="discountedPrice"
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
              name="image"
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
