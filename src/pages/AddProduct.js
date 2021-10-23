import React from "react";
import "./styles/Form.css";
import { connect } from "react-redux";
import { addProduct } from "../redux/actions";
import { withRouter } from "react-router-dom";

const AddProduct = (props) => {
  const [input, setInput] = React.useState({
    name: "",
    desc: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (input.name === "") return alert("Name cannot be empty");
    else if (input.desc === "") return alert("Description cannot be empty");
    props.onAddProduct({
      name: input.name,
      desc: input.desc,
    });
  };
  return (
    <form id="form-add" className="form-container" onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" onChange={onChange} />
      <label htmlFor="desc">Description</label>
      <textarea id="desc"  name="desc" onChange={onChange} />
      <button type="submit">Add</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAddProduct: (payload) => dispatch(addProduct(payload)),
});

export default withRouter(connect(null, mapDispatchToProps)(AddProduct));
