import shortid from "shortid";

// export const

//action name creator
const reducerName = "posts";
const createActionName = (name) => `app/${reducerName}/${name}`;

//action types
export const ADD_POST = createActionName("ADD_POST");

//action creators
export const createActionAddCard = (payload) => ({
  payload: {
    ...payload,
    id: shortid.generate(),
  },
  type: ADD_POST,
});

//reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}
