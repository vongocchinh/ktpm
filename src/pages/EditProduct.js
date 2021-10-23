/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./styles/Form.css";
import { connect } from "react-redux";
import { updateProduct } from "../redux/actions";
import { withRouter } from "react-router-dom";

const EditProduct = (props) => {
  const { id } = props.match.params;
  const [input, setInput] = React.useState({
    name: "",
    desc: "",
  });
  const data = props.data && props.data.find((v) => v.id === id);
  React.useEffect(() => {
    if (data) {
      setInput({ name: data.name, desc: data.desc });
    }
  }, [1]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (input.name === "") return alert("Name cannot be empty");
    else if (input.desc === "") return alert("Description cannot be empty");
    props.onUpdate({
      id: id,
      name: input.name,
      desc: input.desc,
    });
  };
  const onChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  return (
    <div>
      <form id="form-edit" className="form-container" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" defaultValue={input.name} onChange={onChange} />
        <label htmlFor="name">Description</label>
        <textarea
          id="desc"
          cols={40}
          rows={5}
          name="desc"
          defaultValue={input.desc}
          onChange={onChange}
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.products,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onUpdate: (data) => dispatch(updateProduct(data)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditProduct)
);
