import { fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from '../../src/components/SearchBar';
import '@testing-library/jest-dom';
import { AppContext } from '../../src/context/AppContext';

describe('Search input', () => {
  it('Renders search bar with place holder', () => {
    render(
      <AppContext.Provider value={{ getItems: jest.fn() }}>
        <SearchBar />
      </AppContext.Provider>
    );

    const placeHolder = screen.getByPlaceholderText(
      'Buscar productos, marcas y mas'
    );

    expect(placeHolder).toBeInTheDocument();
  });

  it('Should change input test when user types in the search input', () => {
    render(
      <AppContext.Provider value={{ getItems: jest.fn() }}>
        <SearchBar />
      </AppContext.Provider>
    );

    const input = screen.getByPlaceholderText('Buscar productos, marcas y mas');

    fireEvent.change(input, { target: { value: 'some value' } });

    expect(input.value).toBe('some value');
  });

  it('should call getItems function when user click in search button', () => {
    const mockedGetItems = jest.fn();

    render(
      <AppContext.Provider value={{ getItems: mockedGetItems }}>
        <SearchBar />
      </AppContext.Provider>
    );

    const input = screen.getByPlaceholderText('Buscar productos, marcas y mas');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'some value' } });

    expect(input.value).toBe('some value');

    fireEvent.click(button);

    expect(mockedGetItems).toBeCalledTimes(1);
  });
});
