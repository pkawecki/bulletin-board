import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import shortid from "shortid";

import postReducer from "./postRedux";

// define initial state and shallow-merge initial data
const initialState = {
  posts: [
    {
      id: "_wFxC52Na",
      title: "Redux title 1",
      description: "Some description from Redux",
      image:
        "https://media.gettyimages.com/photos/autumn-mount-fuji-with-kochia-picture-id923702690?s=2048x2048",
    },
  ],
};

// define reducers
const reducers = {
  tables: postReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] == "undefined") {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
