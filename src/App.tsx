import React from "react";
import Home from "./pages/Home";
import { ViewportProvider } from "./shared/contexts/ViewportProvider";

const App = () => {
  return (
    <ViewportProvider>
      <Home />
    </ViewportProvider>
  );
};

export default App;
