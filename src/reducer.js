export const reducer = (state, action) => {
  console.log(action)

  switch (action.type) {
    case "ADD_TODO":
      return [
        {
          userId: 1,
          id: Date.now(),
          title: action.payload,
          completed: false,
        },
        ...state,
      ];
    case "TOGGLE_COMPLETE":
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return action.payload
        } else {
          return todo
        }
      })
    default:
      return state;
  }
};
