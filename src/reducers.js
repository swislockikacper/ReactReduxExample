import { combineReducers } from "redux";
import carsReducer from "./duck/cars";
import brandsReducer from "./duck";

const rootReducer = combineReducers({
  cars: carsReducer,
  brands: brandsReducer
});

export default rootReducer;
