import React from "react";
import "./styles/Form.css";
import { connect } from "react-redux";
import { addTodo } from "../redux/action/todoAction";
import { withRouter } from "react-router-dom";

const AddTodo = (props) => {
  const [input, setInput] = React.useState({
    content: "",
    status: false,
    priority: 0,
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (input.content) {
      props.onAddTodo({
        content: input.content,
        status: Boolean(input.status),
        date: new Date(),
        userId: "1",
        priority: Number(input.priority),
      });
    }
    e.target.reset();
    input.content = "";
  };
  return (
    <div className="add__container">
    <form id="form-add" className="form-container" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Content</label>
        <input id="name" name="content" type="text" onChange={onChange} />
      </div>
      <div className="check_box">
        <label htmlFor="Status">Status</label>
        <input id="status" onChange={onChange} name="status" type="checkbox" />
      </div>
      <div>
        <label htmlFor="priority">priority</label>
        <input
          id="priority"
          name="priority"
          min={0}
          max={10}
          type="number"
          onChange={onChange}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAddTodo: (payload) => dispatch(addTodo(payload)),
});

export default withRouter(connect(null, mapDispatchToProps)(AddTodo));
