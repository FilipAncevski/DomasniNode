import { BUY_CAKE, RESTOCK_CAKE } from "../constants/CakeConstants";

export const buyCake = (number) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};

export const restockCake = () => {
  return {
    type: RESTOCK_CAKE,
    payload: 10,
  };
};
