import * as types from "../../constant/todo";

var initialState = [
  {
    _id: "1",
    content: "Hom nay toi phai hop !",
    status: true,
    date: new Date(),
    priority: 1,
    userId: "1",
  }
];

let id = Number(1);
const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO_SUCCESS:
      state.push({
        _id: (id + 1).toString(),
        content: action.payload.content,
        status: action.payload.status,
        date: action.payload.date,
        priority: action.payload.priority,
        userId: action.payload.userId,
      });

      return [...state];

    case types.REMOVE_TODO_SUCCESS:
      return [...state.filter((value, index) => value._id !== action.id)];

    case types.UPDATE_TODO_SUCCESS:
      var idNew = state.findIndex((v) => v._id === action.data._id);

      if (idNew !== -1) {
        state[idNew] = action.data;
      }
      return [...state];

    default:
      return state;
  }
};

export default TodoReducer;
