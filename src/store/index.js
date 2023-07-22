import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case "increase":
      return {
        counter: state.counter + action.payload,
        showCounter: state.showCounter,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };

    case "toggleCounter":
      return {
        counter: state.counter,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
