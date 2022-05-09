import { COMPLAIN_BURGER } from "./burgerComplainType";
import { UNCOMPLAIN_BURGER } from "./burgerUncomplainType";

const initialBurgerComplain = {
  numberOfComplains: 0,
};

const burgerComplainReducer = (state = initialBurgerComplain, action) => {
  switch (action.type) {
    case COMPLAIN_BURGER:
      return {
        ...state,
        numberOfComplains: state.numberOfComplains + 1,
      };
    case UNCOMPLAIN_BURGER:
      return {
        ...state,
        numberOfComplains: state.numberOfComplains - 1,
      };
    default:
      return state;
  }
};

export default burgerComplainReducer;
