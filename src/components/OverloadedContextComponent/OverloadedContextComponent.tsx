import React, { useContext } from "react";
import OverloadedContext, {
  OverloadedContextProvider
} from "../../contexts/OverloadedContext";
import { SimpleCounterWithHook } from "../SimpleCounter/SimpleCounterWithHook";
import Lorem from "../Lorem";

let timesTheComponentHasRerendered: number = 0;

const OverloadedContextComponent: React.FC<{}> = () => {
  const { count, increment, decrement, setToExactlySeven } = useContext(
    OverloadedContext
  );
  timesTheComponentHasRerendered += 1;
  console.log(
    `Times the component has Rerendered: ${timesTheComponentHasRerendered}`
  );
  return (
    <div>
      <SimpleCounterWithHook
        {...{ count, increment, decrement, setToExactlySeven }}
      />
      <Lorem />
    </div>
  );
};

const ConnectedOverloadedContextComponent: React.FC<{}> = () => (
  <OverloadedContextProvider>
    <OverloadedContextComponent />
  </OverloadedContextProvider>
);

export default ConnectedOverloadedContextComponent;
