import { createStore } from 'redux';
const reducer = (state, action) => {
  return state;
};

const initialState = {
    nextMove: "x",
    values: ["x","x",null,"o","o","o",null,"o","o"]
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;














