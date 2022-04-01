import React from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
import styles from "./PostEdit.module.scss";
import clsx from "clsx";
import { Header } from "../../layout/Header/Header";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { TextField } from "@mui/material";
import { loremIpsum } from "lorem-ipsum";
import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});

// import {
//   reduxSelector,
//   reduxActionCreator,
// } from "../../../redux/exampleRedux.js";

const defValue = () => {
  return loremIpsum();
};
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
          <Typography gutterBottom variant="h5" component="h2" mb={3}>
            <TextField
              hiddenLabel
              id="outlined-size-small"
              label="Advert Title"
              variant="outlined"
              defaultValue={"default advert title"}
            />
          </Typography>
          <TextField
            id="outlined-textarea"
            label="Placeholder Initial"
            placeholder="Placeholder secondary"
            defaultValue={defValue()}
            multiline
          />
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button
              sx={{ margin: "10px" }}
              variant="contained"
              component="span"
            >
              Add Picture
            </Button>
          </label>
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
  Component as PostEdit,
  //   Container as PostEdit,
  Component as PostEditComponent,
};
