/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./styles/Form.css";
import { connect } from "react-redux";
import { updateTodo } from "../redux/action/todoAction";
import { withRouter } from "react-router-dom";

const EditTodo = (props) => {
  const { id } = props.match.params;
  const [input, setInput] = React.useState({
    content: "",
    status: null,
    priority: 0,
  });
  const data = props.data && props.data.find((v) => v._id === id);
  React.useEffect(() => {
    if (data) {
      setInput({
        content: data.content,
        status: data.status,
        priority: data.priority,
      });
    }
  }, [1]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (input.content) {
      props.onUpdate({
        _id: data._id,
        content: input.content,
        status: input.status,
        date: data.date,
        userId: data.userId,
        priority: Number(input.priority),
      });
    }
    e.target.reset();
    input.content = "";
  };
  const onChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  return (
    <div className="add__container">
      <form id="form-edit" className="form-container" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Content</label>
          <input
            defaultValue={input.content}
            id="name"
            name="content"
            type="text"
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="Status">Status</label>
          <input
            id="status"
            onChange={onChange}
            defaultChecked={input.status}
            name="status"
            type="checkbox"
          />
        </div>
        <div>
          <label htmlFor="priority">priority</label>
          <input
            id="priority"
            name="priority"
            value={Number(input.priority)}
            min={0}
            max={10}
            type="number"
            onChange={onChange}
          />
        </div>
        <div>
          <button type="submit">Edit</button>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.todos,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onUpdate: (data) => dispatch(updateTodo(data)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditTodo)
);
