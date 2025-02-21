export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        {
            userId: "1",
            id: Date.now(),
            title: action.payload,
            completed: false,
          },
        ...state,
      
      ];
    default:
      return state;
  }
};
