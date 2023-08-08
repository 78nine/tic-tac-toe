import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const combinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

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
      let isWin = false;
      let winner = null;
      combinations.forEach((combination) => {
        isWin = combination.every((element, index, array) => {
          return state.values[element] !== null && state.values[element] === state.values[array[0]];
        })
        if(isWin) {
          winner = state.values[combination[0]];
        }
      })
      if(!winner && state.values.every((element) => element)) {
        winner = "draw";
      }
      console.log(winner);
      return {
        ...state,
        winner: winner,
      }
    default: 
      return state;
  }
};

const size = 3; 

export const onFieldClick = payload => {
  return (dispatch) => {
    dispatch(setFieldValue(payload)); 
    dispatch(checkWinner());
  }
}

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














