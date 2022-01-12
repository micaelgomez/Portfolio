import { useState } from "react";
import Header from "../src/Components/Header";
import Proyects from "./Components/Proyects";

function App() {
  return (
    <div className="container mx-auto mt-2 max-h-screen">
      <div className="md:flex">
        <Header />
        <Proyects />
      </div>
    </div>
  );
}

export default App;
