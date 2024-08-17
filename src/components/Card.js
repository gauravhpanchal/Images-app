import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, href, img }) => {
  return (
    <Link to={href} className="relative">
      <img src={img} alt="" className="size-[450px] object-cover rounded-xl" />
      <h1 className="absolute inset-0 top-8 flex justify-center text-3xl font-bold text-blue-500">
        {title}
      </h1>
    </Link>
  );
};

export default Card;
