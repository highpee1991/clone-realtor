import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { MdLocationOn } from "react-icons/md";

const ListingItem = ({ listing, id }) => {
  return (
    <li className="bg-white m-[10px] relative rounded flex items-center justify-between flex-col shadow-md hover:shadow-xl overflow-hidden transition-shadow duration-150">
      <Link className="content" to={`/category/${listing.type}/${id}`}>
        <img
          className=" h-[170px] w-[250px] object-cover hover:scale-150 transition-scale duration-75 ease-in"
          loading="lazy"
          src={listing.imgUrls[0]}
        />
        <Moment
          className="absolute top-2 left-2 bg-[#3377cc] text-white text-sm uppercase font-semibold shadow-lg px-2 py-1 rounded-md"
          fromNow
        >
          {listing.timestamp?.toDate()}
        </Moment>
        <div className="w-full p-[10px]">
          <div className="flex items-center space-x-1">
            <MdLocationOn className="h-4 w-4 text-green-600" />
            <p className="font-sm mb-[2px] text-sm text-gray-600 truncate">
              {listing.address}
            </p>
          </div>
          <p className="font-semibold text-xl truncate ">{listing.name}</p>
          <p className=" text-[#457b9d] font-semibold  mt-2">
            {listing.offer
              ? `$${listing.discountedPrice}`
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : `$${listing.regularPrice}`
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="flex items-center space-x-3 mt-[10px]">
            <div className="flex items-center space-x-1">
              <p className="text-sm font-bold">
                {listing.beds > 1 ? `${listing.beds} Beds` : `1 Bed`}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="text-sm font-bold">
                {listing.bath > 1 ? `${listing.bath} Baths` : `1 Bath`}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ListingItem;
