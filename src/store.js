import { createStore } from 'redux';
const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_FIELD_VALUE':
      const newValues = state.values.map((value, index) => index === action.payload.index && value === null ? action.payload.value : value);
      let somethingChanged = state.values.join("") != newValues.join("");
      let newNextMove = state.nextMove;
      if(somethingChanged) {
        newNextMove = action.payload.value === "o" ? "x": "o"
      }
      return {
        ...state, 
        values: newValues,
        nextMove: newNextMove
      }; 
    default: 
      return state;
  }
};

const size = 5; 
const  values = Array(size**2).fill(null);

const initialState = {
    nextMove: "x",
    values,
    size,
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;














