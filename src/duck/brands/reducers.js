import types from "./types";

const INITIAL_STATE = {
    listName = "Brands",
    list: ["Dodge", "Toyota"]
};

const brandsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_BRAND:
            return {
                ...state, list: [...state.list, action.item]
            }
        case types.RESET_BRANDS: 
            return {
                ...state, list: []
            }
        default:
            return state;
    }
}

export default brandsReducer;