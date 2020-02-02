import { useState } from "react";

const useSimpleCounter = () => {
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
  return { count, increment, decrement, setToExactlySeven };
};

export default useSimpleCounter;
