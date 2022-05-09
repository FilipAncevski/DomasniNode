import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

export const HookCakeCointainer = () => {
  const numberOfCakes = useSelector((state) => state.numberOfCakes);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of torti : {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Sell Cake</button>
    </div>
  );
};
