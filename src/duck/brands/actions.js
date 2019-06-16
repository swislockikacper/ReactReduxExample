import types from "./types";

const add = item => ({
  type: types.ADD_BRAND,
  item
});

const reset = item => ({
  type: types.RESET_BRANDS,
  item
});

const remove = item => ({
  type: types.REMOVE_BRAND,
  item
});

export default {
  add,
  reset,
  remove
};
