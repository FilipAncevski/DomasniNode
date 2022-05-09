import React from "react";
import { buyVegeBurger } from "../redux";
import { useDispatch, useSelector } from "react-redux";

export const VeganBurgers = () => {
  const numberOfVegeBurgers = useSelector(
    (state) => state.vegeburger.numberOfVegeBurgers
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        We only make a certain amount of burgers daily. Think fast or be hungry
      </h1>
      <h2>Burgers available: {numberOfVegeBurgers}</h2>
      <button onClick={() => dispatch(buyVegeBurger())}>Buy Vege Burger</button>
    </div>
  );
};
