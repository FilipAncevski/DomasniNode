import { COMPLAIN_BURGER } from "./burgerComplainType";
import { UNCOMPLAIN_BURGER } from "./burgerUncomplainType";

export const complainBurger = () => {
  return {
    type: COMPLAIN_BURGER,
  };
};

export const uncomplainBurger = () => {
  return {
    type: UNCOMPLAIN_BURGER,
  };
};
