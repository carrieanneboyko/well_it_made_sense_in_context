import React from "react";
import useViewport from "../../hooks/useViewport";

import Lorem from "../Lorem";

const ComponentUsesViewport: React.FC<{}> = () => {
  const { pageYOffset, innerWidth, innerHeight } = useViewport();
  return (
    <div>
      <Lorem />
      <div className="demo-box">
        <div>The pageYOffset is: {pageYOffset}</div>
        <div>The innerWidth is: {innerWidth}</div>
        <div>The innerHeight is: {innerHeight}</div>
      </div>
      <Lorem />
    </div>
  );
};

export default ComponentUsesViewport;
