import { combineReducers } from "redux";
import todoReducer from './Reducer/todoSlice';
import { connectRouter } from 'connected-react-router';
import userReducer from './Reducer/userSlice';

const reducer=(history)=>combineReducers({
    router: connectRouter(history),
    todos:todoReducer,
    user:userReducer
});

export default reducer;