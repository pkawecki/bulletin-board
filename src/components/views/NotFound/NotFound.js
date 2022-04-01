import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./NotFound.module.scss";
import clsx from "clsx";
import { Header } from "../../layout/Header/Header";

// import {
//   reduxSelector,
//   reduxActionCreator,
// } from "../../../redux/exampleRedux.js";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Header>
      <h2>Page not found</h2>
    </Header>
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
  Component as NotFound,
  //   Container as NotFound,
  Component as NotFoundComponent,
};
