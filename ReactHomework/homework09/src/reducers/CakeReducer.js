import { BUY_CAKE, RESTOCK_CAKE } from "../constants/CakeConstants";

const initialState = {
  numOfCake: 10,
  message: undefined,
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      if (state.numOfCake - action.payload < 0) {
        return {
          ...state,
          message: `Not enough cakes left, ${state.numOfCake} available only`,
        };
      } else if (state.numOfCake - action.payload === 0) {
        return {
          ...state,
          numOfCake: state.numOfCake - action.payload,
          message: "That was the last cake available",
        };
      } else {
        return {
          ...state,
          numOfCake: state.numOfCake - action.payload,
          message: undefined,
        };
      }
    case RESTOCK_CAKE:
      return {
        ...state,
        numOfCake: action.payload,
      };

    default:
      return state;
  }
};

export default CakeReducer;
