import { GET_ITEMS, GET_ITEM } from "./types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        items: payload.items,
        filters: payload.filters,
      };
    case GET_ITEM:
      return {
        ...state,
        selectedItem: payload,
      };
    default:
      return state;
  }
};
