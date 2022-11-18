import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Final from "./pages/Final";
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import { UserProvider } from "./shared/contexts/UserProvider";
import { ViewportProvider } from "./shared/contexts/ViewportProvider";
import paths from "./shared/routes/paths";

const App = () => {
  return (
    <ViewportProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path={paths.root} element={<Home />} />
            <Route path={paths.plan} element={<Plan />} />
            <Route path={paths.final} element={<Final />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ViewportProvider>
  );
};

export default App;
