import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from './actions'

const Reducer = (state = [{id:'1',name:"hihi",desc:"abc"}], action) => {
  switch (action.type) {
    case ADD_PRODUCT:

    state.push(action.payload);
    return [...state];

    case REMOVE_PRODUCT:
      return [...state.filter((product, index) => product.id !== action.id)];

    case UPDATE_PRODUCT:
      var idNew=state.findIndex(v=>v.id===action.data.id);

      if(idNew!==-1){
        state[idNew]=action.data;
      }
      return [...state];

    default:
      return state
  }
}

export default Reducer
