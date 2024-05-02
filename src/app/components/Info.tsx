import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";

import fetchPet from "../../api/fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import { Pet } from "../../model/APIResponseTypes";
import { adopt } from "../../slices/adoptedPetSlice";

const Info = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const results = useQuery<Pet>(["details", id], fetchPet);

  const dispatch = useDispatch();

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">⌛</h2>
      </div>
    );
  }
  const pet: Pet = results.data?.[0];
  if (!pet) {
    throw new Error("pet not found");
  }
  const { name, animal, breed, location, images } = pet;

  return (
    <div className="details">
      <Carousel images={images} />
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location} `}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {name}</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam
          rerum nemo, porro ullam necessitatibus repellat unde quidem pariatur
          recusandae perferendis sed in corporis quis reiciendis. Officia
          obcaecati adipisci praesentium?
        </p>

        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {name} ?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    dispatch(adopt(pet));
                    navigate("/");
                  }}
                >
                  yes
                </button>
                <button onClick={() => setShowModal(false)}>no</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default function InfoWithError(props) {
  return (
    <ErrorBoundary>
      <Info {...props} />
    </ErrorBoundary>
  );
}
