import { createStore } from 'redux';
const reducer = (state, action) => {
  return state;
};

const size = 3; 
const  values = Array(size**2).fill(null);



const initialState = {
    nextMove: "x",
    values,
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;














