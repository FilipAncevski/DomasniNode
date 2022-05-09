import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import burgerReducer from "./burger/burgerReducer";
import veganBurgerReducer from "./veganburger/veganBurgerReducer";
import burgerComplainReducer from "./burger/burgerComplainReducer";
const logger = createLogger();

const rootReducers = combineReducers({
  burger: burgerReducer,
  burgerComplain: burgerComplainReducer,
  vegeburger: veganBurgerReducer,
});

const store = createStore(rootReducers, applyMiddleware(logger));

export default store;
