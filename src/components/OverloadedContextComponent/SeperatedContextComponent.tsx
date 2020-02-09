import React, { useContext } from "react";
import SimpleCounterContext, {
  SimpleCounterProvider
} from "../../contexts/SimpleCounterContext";
import ViewportContext, {
  ViewportContextProvider
} from "../../contexts/ViewportContext";
import { SimpleCounterWithHook } from "../SimpleCounter/SimpleCounterWithHook";
import Lorem from "../Lorem";

let simpleCounterRerenders: number = 0;
let viewportRerenders: number = 0;

const SeperatedCounterComponent: React.FC<{}> = () => {
  const { count, increment, decrement, setToExactlySeven } = useContext(
    SimpleCounterContext
  );
  simpleCounterRerenders += 1;
  console.log(`SimpleCounter Rerenders: ${simpleCounterRerenders}`);
  return (
    <div>
      <SimpleCounterWithHook
        {...{ count, increment, decrement, setToExactlySeven }}
      />
    </div>
  );
};

const SeperatedViewpointComponent: React.FC<{}> = () => {
  const { pageYOffset, innerWidth, innerHeight } = useContext(ViewportContext);
  viewportRerenders += 1;
  console.log(`Viewport Rerenders: ${viewportRerenders}`);

  return (
    <div className="viewport-box">
      <div>The pageYOffset is: {pageYOffset}</div>
      <div>The innerWidth is: {innerWidth}</div>
      <div>The innerHeight is: {innerHeight}</div>
    </div>
  );
};

const Connector: React.FC<{ children: any; Providers: any[] }> = ({
  children,
  Providers
}) => {
  return Providers.reduce(
    (prev, Provider) => <Provider>{prev}</Provider>,
    children
  );
};

const ConnectedComponents: React.FC<{}> = () => {
  return (
    <Connector Providers={[ViewportContextProvider, SimpleCounterProvider]}>
      <div>
        <Lorem />
        <SeperatedCounterComponent />
        <SeperatedViewpointComponent />
        <Lorem />
      </div>
    </Connector>
  );
};

export default ConnectedComponents;
