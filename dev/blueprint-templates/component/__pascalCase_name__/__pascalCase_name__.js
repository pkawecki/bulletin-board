import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./{{pascalCase name}}.module.scss";
import clsx from "clsx";

// import {
//   reduxSelector,
//   reduxActionCreator,
// } from "../../../redux/exampleRedux.js";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2>Mainn Layout</h2>
    {children}
  </div>
);
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = (state) => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   someAction: (arg) => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as {{pascalCase name}},
  //   Container as {{pascalCase name}},
  Component as {{pascalCase name}}Component,
  
};
