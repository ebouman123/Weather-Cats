const exampleReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_NEW_EXAMPLE":
      return action.payload;
    default:
      return state;
  }
};

export default exampleReducer;
