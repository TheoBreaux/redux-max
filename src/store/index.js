import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authSliceReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authSliceReducer },
});

export default store;

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     case "increase":
//       return {
//         counter: state.counter + action.payload,
//         showCounter: state.showCounter,
//       };
//     case "decrement":
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };

//     case "toggleCounter":
//       return {
//         counter: state.counter,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// };
