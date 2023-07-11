import { createStore } from 'redux';
const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_FIELD_VALUE':
      return {}; // 1. użyje poprzednią wartość stanu i ją zdestrukturyzuje; 2. Ustawi nowy values (w tym samym obiekcie, najepierw dstrukturyzacja) - 
    default: 
      return state;
  }
};

const size = 5; // wykorzystać zmienną size i zrobić tak żeby podmieniła wartość domyślną w CSS
const  values = Array(size**2).fill(null);
//Actions
export const setFieldValue = payload => ({type: "SET_FIELD_VALUE", payload});

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














