import React from "react";
import useViewport from "../../hooks/useViewport";

const ViewportBox: React.FC<{}> = () => {
  const { pageYOffset, innerWidth, innerHeight } = useViewport();
  return (
    <div className="viewport-box">
      <div>The pageYOffset is: {pageYOffset}</div>
      <div>The innerWidth is: {innerWidth}</div>
      <div>The innerHeight is: {innerHeight}</div>
    </div>
  );
};

export default ViewportBox;
