import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import { AppContext } from '../src/context/AppContext';

describe('Home', () => {
  const mockItems = [
    {
      id: 1,
      title: 'some title',
      picture: 'http://http2.mlstatic.com/D_820151-MLA50232582674_062022-I.jpg',
      price: {
        amount: 10000,
      },
      free_shipping: true,
      condition: 'new',
    },
  ];

  it('renders list items with title, price values', () => {
    render(
      <AppContext.Provider value={{ items: mockItems }}>
        <Home />
      </AppContext.Provider>
    );

    const title = screen.getByText('some title');
    const price = screen.getByText('$ 10.000');

    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it('should not render new badge if contition is not new', () => {
    render(
      <AppContext.Provider
        value={{ items: [{ ...mockItems[0], condition: 'not new' }] }}
      >
        <Home />
      </AppContext.Provider>
    );

    const badge = screen.queryByText('new');

    expect(badge).toBeNull();
  });

  it('should show free-shipping icon', () => {
    render(
      <AppContext.Provider
        value={{ items: [{ ...mockItems[0], free_shipping: true }] }}
      >
        <Home />
      </AppContext.Provider>
    );

    const icon = screen.getByAltText('Free Shipping');

    expect(icon).toBeInTheDocument();
  });

  it('should not show free-shipping icon when free_shipping is false', () => {
    render(
      <AppContext.Provider
        value={{ items: [{ ...mockItems[0], free_shipping: false }] }}
      >
        <Home />
      </AppContext.Provider>
    );

    const icon = screen.queryByAltText('Free Shipping');

    expect(icon).toBeNull();
  });
});
