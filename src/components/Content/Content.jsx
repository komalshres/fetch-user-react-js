import React from "react";

const Content = ({ children }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100vw", height: "80vh" }}
    >
      {children}
    </div>
  );
};

export default Content;
