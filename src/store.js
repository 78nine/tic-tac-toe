import { createStore } from 'redux';
const reducer = (state, action) => {
  return state;
};

const size = 5; // wykorzystać zmienną size i zrobić tak żeby podmieniła wartość domyślną w CSS
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














