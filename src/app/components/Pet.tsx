import React from "react";
import { Link } from "react-router-dom";
import { Pet as PetType } from "../../model/APIResponseTypes";

const Pet = ({ animal, name, breed, location, images, id }: PetType) => {
  let img = "";
  if (!images.length) {
    img = "https://placehold.co/600x400";
  } else {
    img = images[0];
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link to={`/info/${id}`} className="pet">
      <div className="image-container">
        <img src={img} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
