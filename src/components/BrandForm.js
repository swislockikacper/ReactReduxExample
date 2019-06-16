import React from "react";
import { connect } from "react-redux";
import actions from "../duck/brands/actions";

const BrandForm = ({ add }) => {
  const brandInput = React.createRef();

  const addBrand = event => {
    event.preventDefault();

    add(brandInput.current.value);
    brandInput.current.value = "";
  };

  return (
    <form onSubmit={addBrand}>
      <input ref={brandInput} />
      <button type="submit">Add brand</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  add: brand => dispatch(actions.add(brand))
});

export default connect(
  null,
  mapDispatchToProps
)(BrandForm);
