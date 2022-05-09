import { BUY_BURGER } from "./burgerType";

const initialBurgerState = {
  numberOfBurgers: 10,
};

const burgerReducer = (state = initialBurgerState, action) => {
  switch (action.type) {
    case BUY_BURGER:
      return {
        ...state,
        numberOfBurgers: state.numberOfBurgers - 1,
      };

    default:
      return state;
  }
};

export default burgerReducer;
