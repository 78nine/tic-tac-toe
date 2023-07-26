import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'


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
    case 'RESET': 
      return {
        ...state,
        winner: null,
        values: values,
      }
    case 'CHECK_WINNER': 
      return {
        ...state,
      }
    default: 
      return state;
  }
};

export const onFieldClick = payload => {
  return (dispatch) => {
    dispatch(setFieldValue(payload)); 
    dispatch(checkWinner());
  }
}

const size = 5; 
const  values = Array(size**2).fill(null);
//Actions
export const setFieldValue = payload => ({type: "SET_FIELD_VALUE", payload});
export const reset = () => ({type: "RESET"});
export const checkWinner = () => ({type: "CHECK_WINNER"});

const initialState = {
    nextMove: "x",
    values,
    size,
    winner: null, 
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;














