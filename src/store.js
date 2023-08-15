import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_FIELD_VALUE':
      if(state.winner == null) {
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
      } else {
        return state;
      }
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
      return {
        ...state,
        winner: winner,
      }
    default: 
      return state;
  }
};

const size = 3; 

const combinations = [];

// rows 
for (let i = 0; i < size; i++) {
  let row = [];
  for (let j = 0; j < size; j++) {
    row.push(j+(i*size))
  }
  combinations.push(row);
}

// columns
for (let i = 0; i < size; i++) {
  let column = [];
  for (let j = 0; j < size; j++) {
    column.push(j*size+i)
  }
  combinations.push(column);
}

// diagonals 
for (let i = 0; i < 2; i++) {
  let diagonal = [];
  for (let j = 0; j < size; j++) {
    if(i == 0) {
      diagonal.push(j*size+j)
    } else if (i == 1) {
      diagonal.push((size - 1) * (j + 1) )
    }
  }
  combinations.push(diagonal);
}

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














