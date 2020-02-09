import React, { createContext } from "react";
import noop from "lodash/noop";
import useSimpleCounter from "../hooks/useSimpleCounter";
import useViewport from "../hooks/useViewport";

interface OverloadedContextState {
  count: number;
  increment: () => void;
  decrement: () => void;
  setToExactlySeven: () => void;
  pageYOffset: number;
  innerWidth: number;
  innerHeight: number;
}

const initialState: OverloadedContextState = {
  count: 0,
  increment: noop,
  decrement: noop,
  setToExactlySeven: noop,
  pageYOffset: 0,
  innerWidth: 0,
  innerHeight: 0
};

export const OverloadedContext = createContext<OverloadedContextState>(
  initialState
);

export const OverloadedContextProvider: React.FC<{ children: any }> = ({
  children
}) => {
  const viewportState = useViewport();
  const simpleCounterState = useSimpleCounter();
  const overloaded: OverloadedContextState = {
    ...viewportState,
    ...simpleCounterState
  };
  return (
    <OverloadedContext.Provider value={overloaded}>
      {children}
    </OverloadedContext.Provider>
  );
};

export default OverloadedContext;
