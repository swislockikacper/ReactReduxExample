import React from "react";
import { connect } from "react-redux";
import actions from "../duck/brands/actions";
import "./style/form.css";

const BrandForm = ({ add }) => {
  const brandInput = React.createRef();

  const addBrand = event => {
    event.preventDefault();

    add(brandInput.current.value);
    brandInput.current.value = "";
  };

  return (
    <form className="form" onSubmit={addBrand}>
      <input className="txt-input" ref={brandInput} required/>
      <button className="accept-btn" type="submit">Add brand</button>
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
