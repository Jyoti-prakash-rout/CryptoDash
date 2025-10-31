import React from "react";
import { PuffLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

const Spinner = ({ color = "blue", size = "150" }) => {
  return (
    <>
      <PuffLoader
        color={color}
        size={size}
        cssOverride={override}
        aria-label="Loading..."
      />
    </>
  );
};

export default Spinner;
