import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./MainLayout.module.scss";
import clsx from "clsx";

// import {
//   reduxSelector,
//   reduxActionCreator,
// } from "../../../redux/exampleRedux.js";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2>Main Layout</h2>
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
  Component as MainLayout,
  //   Container as MainLayout,
  Component as MainLayoutComponent,
};
