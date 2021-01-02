export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "AddToCart":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};
