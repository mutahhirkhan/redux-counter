var initialState = 0;

var counterReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state > 0 ? state -1 : state;
    default:
      return state;
  }
};

export default counterReducer;
