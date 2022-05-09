import React from "react";
import { connect } from "react-redux";
import { buyBurger } from "../redux";
import { complainBurger } from "../redux";
import { uncomplainBurger } from "../redux";

const Burgers = (props) => {
  return (
    <div>
      <h1>
        We only make a certain amount of burgers daily. Think fast or be hungry
      </h1>
      <h2>Burgers available: {props.numberOfBurgers}</h2>
      <button onClick={props.buyBurger}>Buy Burger</button>
      <h3>Complains: {props.numberOfComplains}</h3>
      <button onClick={props.complain}>Complain</button>
      <button onClick={props.uncomplainBurger}>Uncomplain</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfBurgers: state.burger.numberOfBurgers,
    numberOfComplains: state.burgerComplain.numberOfComplains,
  };
};

const mapDispatchToProsp = (dispatch) => {
  return {
    buyBurger: () => dispatch(buyBurger()),
    complain: () => dispatch(complainBurger()),
    uncomplainBurger: () => dispatch(uncomplainBurger()),
  };
};

export default connect(mapStateToProps, mapDispatchToProsp)(Burgers);
