import React from "react";
import SimpleCounterWithHook from "./SimpleCounterWithHook";

const ThreeSimpleCounters: React.FC<{}> = () => (
  <div>
    <SimpleCounterWithHook />
    <SimpleCounterWithHook />
    <SimpleCounterWithHook />
  </div>
);

export default ThreeSimpleCounters;
