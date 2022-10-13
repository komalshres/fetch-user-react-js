import React from "react";

const Card = ({ img, name, username, email, address }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top bg-info" src={img} alt="" />
      <div className="card-body bg-secondary">
        <div className="card-text">
          <h3 className="text-dark">{name}</h3>
          <p className="text-lowercase fw-bold m-0">{username}</p>
          <small className="text-lowercase fst-italic">{email}</small>
          <address className="fw-bold fst-italic">{address}</address>
        </div>
      </div>
    </div>
  );
};

export default Card;
