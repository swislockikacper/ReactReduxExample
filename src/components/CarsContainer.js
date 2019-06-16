import React from "react";
import { connect } from "react-redux";

const CarsContainer = ({cars}) => {

  return <ul>
    {cars.list.map(car => <li>{car}</li>)}
  </ul>;
}

const mapStateToProps = state => ({
  cars: state.cars
});


export default connect(mapStateToProps)(CarsContainer);