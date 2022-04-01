import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./HomePage.module.scss";
import clsx from "clsx";
import { Header } from "../../layout/Header/Header";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const theme = createTheme();

// import {
//   reduxSelector,
//   reduxActionCreator,
// } from "../../../redux/exampleRedux.js";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Component = ({ className, children }) => (
  <ThemeProvider theme={theme}>
    <div className={clsx(className, styles.root)}>
      <Header>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Button variant="contained" color="primary">
            Add New advert - if logged in
          </Button>
          {/* End hero unit */}
          <Grid my={2} container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Header>
    </div>
  </ThemeProvider>
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
  Component as HomePage,
  //   Container as HomePage,
  Component as HomePageComponent,
};
