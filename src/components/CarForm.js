import React from "react";
import { connect } from 'react-redux';
import actions from "../duck/cars/actions";

const CarForm = ({add}) => {
  const carInput = React.createRef();

  const addCar = event => {
    event.preventDefault();

    add(carInput.current.value);
    carInput.current.value = "";
  }

  return <form onSubmit={addCar}>
    <input ref={carInput}/>
    <button type="submit">Add car</button>
  </form>;
}

const mapDispatchToProps = dispatch => ({
  add: (car) => dispatch(actions.add(car))
});

export default connect(null, mapDispatchToProps)(CarForm);
