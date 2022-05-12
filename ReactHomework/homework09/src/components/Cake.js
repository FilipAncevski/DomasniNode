import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, restockCake } from "../actions/CakeActions";

export const Cake = () => {
  const cakes = useSelector((state) => state.cake.numOfCake);
  const message = useSelector((state) => state.cake.message);
  const dispatch = useDispatch();
  const [order, setOrder] = useState(0);

  return (
    <div>
      <h2>Cakes : {cakes}</h2>
      {message && <p>{message}</p>}
      <label>
        <p>
          <input
            placeholder="How many cakes do you want to buy?"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
          <button onClick={() => dispatch(buyCake(order))}>Buy</button>
        </p>
      </label>
      <button disabled={cakes < 1} onClick={() => dispatch(buyCake(1))}>
        Buy Cake
      </button>
      <button disabled={cakes < 2} onClick={() => dispatch(buyCake(2))}>
        Buy 2 Cakes
      </button>
      <button disabled={cakes < 3} onClick={() => dispatch(buyCake(3))}>
        Buy 3 Cakes
      </button>
      <button onClick={() => dispatch(restockCake())}>Restock Cakes</button>
    </div>
  );
};
