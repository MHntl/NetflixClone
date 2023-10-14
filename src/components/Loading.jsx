import React from "react";

const Loading = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div
        className=" spinner-border text-primary"
        role="status"
        style={{ width: "10rem", height: "10rem" }}
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Loading;
