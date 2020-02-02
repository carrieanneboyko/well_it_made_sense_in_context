import React from "react";
import useSimpleCounter from "../../hooks/useSimpleCounter";

interface SimpleCounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  setToExactlySeven: () => void;
}

export const SimpleCounterWithHook: React.FC<SimpleCounterState> = ({
  count,
  increment,
  decrement,
  setToExactlySeven
}) => {
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

const ConnectedSimpleCounterWithHook: React.FC<{}> = () => {
  const { count, increment, decrement, setToExactlySeven } = useSimpleCounter();
  return (
    <SimpleCounterWithHook
      {...{ count, increment, decrement, setToExactlySeven }}
    />
  );
};

export default ConnectedSimpleCounterWithHook;
