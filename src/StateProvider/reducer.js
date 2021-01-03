export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  console.log(action.item);
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
