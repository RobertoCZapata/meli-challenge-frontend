import {
  GET_ITEMS,
  GET_ITEM,
  GET_CATEGORIES,
  LOADING,
  CHANGE_PAGE,
} from './types';

export const initialState = {
  items: [],
  selectedItem: null,
  categories: [],
  isLoading: false,
  page: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
const appReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        items: payload.items,
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
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload.categories,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: payload.page,
      };
    default:
      return state;
  }
};

export default appReducer;