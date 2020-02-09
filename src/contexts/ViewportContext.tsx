import React, { createContext } from "react";
import useViewport from "../hooks/useViewport";

interface ViewportState {
  innerWidth: number;
  innerHeight: number;
  pageYOffset: number;
}

const initialState: ViewportState = {
  innerWidth: 0,
  innerHeight: 0,
  pageYOffset: 0
};

export const ViewportContext = createContext<ViewportState>(initialState);

export const ViewportContextProvider: React.FC<{ children: any }> = ({
  children
}) => {
  const viewport: ViewportState = useViewport();
  return (
    <ViewportContext.Provider value={viewport}>
      {children}
    </ViewportContext.Provider>
  );
};

export default ViewportContext;
