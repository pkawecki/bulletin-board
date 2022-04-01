import React from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
import styles from "./Header.module.scss";
import clsx from "clsx";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// import {
//   reduxSelector,
//   reduxActionCreator,
// } from "../../../redux/exampleRedux.js";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <AppBar position="relative">
      <Toolbar>
        <Button color="inherit" sx={{ size: "medium" }}>
          <Typography variant="h6" component="div" mx={2} sx={{ flexGrow: 1 }}>
            Log-in
          </Typography>
        </Button>
        <Button color="inherit" sx={{ size: "medium" }}>
          <Typography variant="h6" component="div" mx={2} sx={{ flexGrow: 1 }}>
            Logout
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
    {children}
    {/* Footer */}
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
    </Box>
    {/* End footer */}
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
  Component as Header,
  //   Container as Header,
  Component as HeaderComponent,
};
