import types from "./types";

const INITIAL_STATE = {
  listName: "Cars",
  list: [{ name: "Dodge Challenger", key: 1 }, { name: "Toyota Supra", key: 2 }]
};

const carsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_CAR:
      const item = {
        key: state.list.length,
        name: action.item
      };

      return {
        ...state,
        list: [...state.list, item]
      };
    case types.RESET_CARS:
      return {
        ...state,
        list: []
      };
    default:
      return state;
  }
};

export default carsReducer;
