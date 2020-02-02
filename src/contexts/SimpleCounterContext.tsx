import React, { createContext } from "react";
import noop from "lodash/noop";
import useSimpleCounter from "../hooks/useSimpleCounter";

interface SimpleCounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  setToExactlySeven: () => void;
}

const initialState: SimpleCounterState = {
  count: 0,
  increment: noop,
  decrement: noop,
  setToExactlySeven: noop
};

export const SimpleCounterContext = createContext<SimpleCounterState>(
  initialState
);

export const SimpleCounterProvider: React.FC<{ children: any }> = ({
  children
}) => {
  const simpleCounter: SimpleCounterState = useSimpleCounter();
  return (
    <SimpleCounterContext.Provider value={simpleCounter}>
      {children}
    </SimpleCounterContext.Provider>
  );
};

export default SimpleCounterContext;
