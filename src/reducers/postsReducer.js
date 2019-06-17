export default (state = [], action) => {
  //cant use if statements. Have to use switch case statement for it to work
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
