const filter = (state, action) => {
  switch (action.type) {
    case "SET_VISIBILITY":
      return action.filter;
    default:
      return state;
  }
}

export default filter