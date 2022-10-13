import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-100 h-100 d-flex flex-column align-items-center ">
      {children}
    </div>
  );
};

export default Container;
