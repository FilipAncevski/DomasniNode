import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContrainer = (props) => {
  return (
    <div>
      <h1>Number of Cakes: {props.brojNaTorti}</h1>
      <button onClick={props.kupiTorta}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    brojNaTorti: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    kupiTorta: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContrainer);
