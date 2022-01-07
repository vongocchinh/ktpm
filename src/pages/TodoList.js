/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./styles/style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { deleteTodoRequest, getTodoRequest } from "../redux/actions/todoAction";
import Layout from "./Layout";

const TodoList = (props) => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [current, setCurrent] = React.useState(7);
  const [newPage, setNewPage] = React.useState(1);
  const [filter, setFilter] = React.useState("");

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoRequest(id));
  };

  const onClickPa = (e) => {
    setNewPage(e.target.id);
  };

  const showPagination = (data) => {
    var arr = [];
    if (data) {
      for (let i = 1; i <= Math.ceil(data.length / current); i++) {
        arr.push(i);
      }
    }
    return arr.map((v, key) => {
      if (v === newPage) {
        return (
          <>
            <a key={key} className="active_pagination" href="###">
              {v}
            </a>
          </>
        );
      } else {
        return (
          <>
            <a key={key} id={v} onClick={onClickPa} href="###">
              {v}
            </a>
          </>
        );
      }
    });
  };
  const showNext = (data) => {
    var arr = [];
    if (data) {
      for (let i = 1; i <= Math.ceil(data.length / current); i++) {
        arr.push(i);
      }
    }
    if (arr.length > 1 && arr.length > newPage) {
      return (
        <a onClick={onNext} href="###">
          &raquo;
        </a>
      );
    }
  };
  const showBack = () => {
    if (newPage > 1) {
      return (
        <a onClick={onBack} href="###">
          &laquo;
        </a>
      );
    }
  };
  const onBack = () => {
    setNewPage((v) => v - 1);
  };

  const onNext = () => {
    setNewPage((v) => v + 1);
  };

  useEffect(() => {
    dispatch(getTodoRequest());
  }, [dispatch]);

  const show = (data) => {
    if (data && data.length > 0) {

      if(filter){
        data=data.filter(v=>v.content===filter);
      }


      var last = current * newPage;
      var first = last - current;

      return (
        data &&
        data.slice(first, last).map((value, key) => {
          return (
            <div key={key} className="card__container__item">
              <div className="item__title">
                <p className="stt__todo">{key + 1}.</p>
                <p className="content__todo">{value.content}</p>
                {/* <p>{new Date(value.date).toLocaleDateString()}</p> */}
                <p className="status__todo">{value.status ? "ON" : "OFF"}</p>
              </div>
              <div className="item__action">
                <Link to={`/edit/${value._id}`}>
                  <AiFillEdit className="edit" size={18} />
                </Link>
                <AiFillDelete
                  className="delete"
                  onClick={() => handleDeleteTodo(value._id)}
                  size={18}
                />
              </div>
            </div>
          );
        })
      );
    }
    return null;
  };

  return (
    <Layout>
      <div className="todo__main">
        <div className="header__main">
          <div className="logo">Todo List</div>
          <input onBlur={(e)=>setFilter(e.target.value)} className="input-header" />
          <div className="btn__add">
            <Link className="btn__add__content" to="/add">
              Add
            </Link>
          </div>
        </div>
        <div className="todo__main__item">
          {todos?.length === 0 && (
            <p className="null_todo">No todos available on list.</p>
          )}
          {show(todos)}
        </div>
        <div className="pagination__content">
          <div className="pagination">
            {showBack()}
            {showPagination(todos)}
            {showNext(todos)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TodoList;
