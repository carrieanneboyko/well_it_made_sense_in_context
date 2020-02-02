import React, { useContext } from "react";
import SimpleCounterContext, {
  SimpleCounterProvider
} from "../../contexts/SimpleCounterContext";
import { SimpleCounterWithHook } from "./SimpleCounterWithHook";

const ThreeConnectedCounters: React.FC<{}> = () => {
  const simpleCounter = useContext(SimpleCounterContext);
  return (
    <div>
      <SimpleCounterWithHook {...simpleCounter} />
      <SimpleCounterWithHook {...simpleCounter} />
      <SimpleCounterWithHook {...simpleCounter} />
    </div>
  );
};

const ConnectedThreeConnectedCounters: React.FC<{}> = () => (
  <SimpleCounterProvider>
    <ThreeConnectedCounters />
  </SimpleCounterProvider>
);

export default ConnectedThreeConnectedCounters;
