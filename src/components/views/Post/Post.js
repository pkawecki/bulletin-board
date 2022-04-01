import React from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
import styles from "./Post.module.scss";
import clsx from "clsx";
import { Header } from "../../layout/Header/Header";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// import {
//   reduxSelector,
//   reduxActionCreator,
// } from "../../../redux/exampleRedux.js";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Header>
      <Card
        sx={{
          width: "400px",
          mx: "auto",
          my: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          sx={{ objectFit: "cover" }}
          image="https://picsum.photos/400/500?random=2"
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Heading
          </Typography>
          <Typography>
            Sint exercitation duis veniam occaecat sunt officia amet in eiusmod
            reprehenderit. Id do nostrud ad reprehenderit pariatur esse sit
            veniam elit labore. Cupidatat ad nisi consectetur irure ea tempor
            veniam consequat est duis sunt. Ex sit sunt ipsum commodo enim minim
            qui reprehenderit elit incididunt incididunt sit occaecat.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small">
            Edit - if user is logged and author
          </Button>
        </CardActions>
      </Card>
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
  Component as Post,
  //   Container as Post,
  Component as PostComponent,
};
