import React from "react";
import "./App.css";
import BrandForm from "./components/BrandForm";
import BrandsContainer from "./components/BrandsContainer";
import CarForm from "./components/CarForm";
import CarsContainer from "./components/CarsContainer";

function App() {
  return (
    <div className="App">
      <BrandForm />
      <BrandsContainer />
      <CarForm />
      <CarsContainer />
    </div>
  );
}

export default App;
