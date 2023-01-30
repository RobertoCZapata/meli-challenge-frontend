import { createContext, useContext, useReducer } from 'react';
import AppReducer, { initialState } from './AppReducer';
import { GET_ITEMS, GET_ITEM, LOADING } from './types';

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getItems = (query) => {
    dispatch({ type: LOADING, payload: { isLoading: true } });

    fetch(`http://localhost:3001/api/items?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_ITEMS, payload: data });
      })
      .finally(() =>
        dispatch({ type: LOADING, payload: { isLoading: false } })
      );
  };

  const getItem = (id) => {
    dispatch({ type: LOADING, payload: { isLoading: true } });

    fetch(`http://localhost:3001/api/items/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_ITEM, payload: data }))
      .finally(() =>
        dispatch({ type: LOADING, payload: { isLoading: false } })
      );
  };

  return (
    <AppContext.Provider
      value={{
        items: state.items,
        selectedItem: state.selectedItem,
        filters: '',
        isLoading: state.isLoading,
        getItems,
        getItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
