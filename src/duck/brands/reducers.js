import types from "./types";

const INITIAL_STATE = {
  listName: "Brands",
  list: [{ name: "Dodge", key: 1 }, { name: "Toyota", key: 2 }]
};

const brandsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_BRAND:
      const item = {
        key: state.list.length + 1,
        name: action.item
      };

      return {
        ...state,
        list: [...state.list, item]
      };
    case types.RESET_BRANDS:
      return {
        ...state,
        list: []
      };
    case types.REMOVE_BRAND:
      return {
        ...state,
        list: state.list.filter(item => item.key !== action.item)
      };
    default:
      return state;
  }
};

export default brandsReducer;
