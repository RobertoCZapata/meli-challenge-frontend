import React, { useReducer } from 'react';
import AppReducer from './AppReducer';
import AppContext from './AppContext';
import { GET_ITEMS, GET_ITEM } from './types';

const AppState = (props) => {
  const initialState = {
    items: [],
    selectedItem: null,
    filters: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // const getSelectedItem = (id) => {
  //   fetch(`http://localhost:3000/api/items/${id}`)
  //     .then((response) => response.json())
  //     .then(({ data }) => dispatch({ type: GET_ITEM, payload: data }));
  // };

  return (
    <AppContext.Provider
      value={{
        items: state.items,
        selectedItem: state.selectedItem,
        filters: state.filters,
        getItems,
        // getSelectedItem,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
