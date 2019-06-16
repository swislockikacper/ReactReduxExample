import React from "react";
import { connect } from "react-redux";
import actions from "../duck/brands/actions";
import "./style/container.css";

const BrandsContainer = ({ brands, reset, removeItem }) => {
  return (
    <div>
      <p className="title">{brands.listName}</p>

      <ul className="list">
        {brands.list.map(brand => (
          <li className="element" key={brand.key}>
            {brand.name}{" "}
            <button className="rm-btn" onClick={() => removeItem(brand.key)}>
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

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(actions.reset()),
  removeItem: (key) => dispatch(actions.remove(key))
});

const mapStateToProps = state => ({
  brands: state.brands
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrandsContainer);
