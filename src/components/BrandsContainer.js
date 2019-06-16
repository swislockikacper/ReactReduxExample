import React from "react";
import { connect } from "react-redux";
import actions from "../duck/brands/actions";
import "./style/container.css";

const BrandsContainer = ({ brands, reset }) => {
  return (
    <div>
      <p className="title">{brands.listName}</p>

      <ul className="list">
        {brands.list.map(brand => (
          <li className="element" key={brand.key}>
            {brand.name}
          </li>
        ))}
      </ul>

      <button className="btn" onClick={reset}>
        Clear list
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(actions.reset())
});

const mapStateToProps = state => ({
  brands: state.brands
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrandsContainer);
