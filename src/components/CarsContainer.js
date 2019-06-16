import React from "react";
import { connect } from "react-redux";
import actions from "../duck/cars/actions";
import "./style/container.css";

const CarsContainer = ({ cars, reset, removeItem }) => {
  return (
    <div>
      <p className="title">{cars.listName}</p>

      <ul className="list">
        {cars.list.map(car => (
          <li className="element" key={car.key}>
            {car.name}
            <button className="rm-btn" onClick={() => removeItem(car.key)}>
              X
            </button>
          </li>
        ))}
      </ul>

      <button className="btn" onClick={reset}>
        Clear list
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  cars: state.cars
});

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(actions.reset()),
  removeItem: (key) => dispatch(actions.remove(key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsContainer);
