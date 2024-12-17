import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { UserProvider } from "./context/UserContext";
import HeroRegister from "./components/heroRegister/HeroRegister";
function App() {
  return (
    <>
          <RouterProvider router={router} />
    </>
  );
}

export default App;
