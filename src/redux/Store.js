import { combineReducers } from "redux";
import productReducer from './reducer';

const reducer=combineReducers({
    products:productReducer
});

export default reducer;