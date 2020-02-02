import React from "react";

import Lorem from "../Lorem";
import ViewportBox from "./ViewportBox";

const ComponentUsesMultipleViewports: React.FC<{}> = () => {
  return (
    <div>
      <Lorem />
      <ViewportBox />
      <ViewportBox />
      <ViewportBox />
      <Lorem />
    </div>
  );
};

export default ComponentUsesMultipleViewports;
