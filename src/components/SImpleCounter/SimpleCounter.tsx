import React, { useState } from "react";

const SimpleCounter: React.FC<{}> = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  const setToExactlySeven = () => {
    setCount(7);
  };
  return (
    <div className="demo-box">
      <h1>{count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        <button onClick={setToExactlySeven}>Set count to exactly 7</button>
      </div>
    </div>
  );
};

export default SimpleCounter;
