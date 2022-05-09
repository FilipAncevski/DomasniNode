import { BUY_VEGE_BURGER } from "./veganBurgerType";

const initialVegeBurgersState = {
  numberOfVegeBurgers: 10,
};

const veganBurgerReducer = (state = initialVegeBurgersState, action) => {
  switch (action.type) {
    case BUY_VEGE_BURGER:
      return {
        ...state,
        numberOfVegeBurgers: state.numberOfVegeBurgers - 1,
      };

    default:
      return state;
  }
};

export default veganBurgerReducer;
