import React, { useEffect } from "react";
import { sayHello } from "../actions/SayHelloActions";
import { useDispatch, useSelector } from "react-redux";

export const HelloFunc = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.SayHelloReducer.greeting);

  useEffect(() => {
    // dispatch(sayHello());
  }, [dispatch]);

  return (
    <div id="hello-func">
      <h2>{greeting}</h2>
      <button onClick={() => dispatch(sayHello())}>Click me</button>
    </div>
  );
};
