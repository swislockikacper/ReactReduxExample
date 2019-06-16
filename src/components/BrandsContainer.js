import React from "react";
import { connect } from "react-redux";

const BrandsContainer = ({brands}) => {
  return <ul>
    {brands.list.map(car => <li>{car}</li>)}
  </ul>;
}

const mapStateToProps = state => ({
  brands: state.brands
});

export default connect(mapStateToProps)(BrandsContainer);