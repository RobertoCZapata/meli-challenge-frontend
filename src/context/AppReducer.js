import { GET_ITEMS, GET_ITEM, LOADING } from './types';

export const initialState = {
  items: [],
  selectedItem: null,
  filters: [],
  isLoading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
const appReducer = (state, action) => {
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
        selectedItem: payload.item,
      };
    case LOADING:
      return {
        ...state,
        isLoading: payload.isLoading,
      };
    default:
      return state;
  }
};

export default appReducer;
