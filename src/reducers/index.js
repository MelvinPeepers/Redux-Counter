import { INCREMENT, DECREMENT } from "../actions";

// This is our starting point for the counter
const initialState = {
  count: 0
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      // Fill in the body of this case
      // this is where we increase the couter
      return {
        count: state.count + 1
      };

    case DECREMENT:
      // this is where we decrease the counter
      // Fill in the body of this case
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
};
