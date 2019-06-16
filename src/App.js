import React from "react";
import "./App.css";
import BrandForm from "./components/BrandForm";
import BrandsContainer from "./components/BrandsContainer";
import CarForm from "./components/CarForm";
import CarsContainer from "./components/CarsContainer";

function App() {
  return (
    <div className="app">
      <BrandsContainer />
      <BrandForm />
      <CarsContainer />
      <CarForm />
    </div>
  );
}

export default App;
