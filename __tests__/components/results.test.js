import { render, screen } from '@testing-library/react';
import { AppContext } from '../../src/context/AppContext';
import '@testing-library/jest-dom';
import { Results } from '../../src/components/Results';

describe('Results', () => {
  it('should render loading component when fetching is loading', () => {
    render(
      <AppContext.Provider value={{ isLoading: true }}>
        <Results>
          <div>Some information</div>
        </Results>
      </AppContext.Provider>
    );

    const loading = screen.getByTestId('loading-component');

    expect(loading).toBeInTheDocument();
  });

  it('should render children component when fetching is done', () => {
    render(
      <AppContext.Provider value={{ isLoading: false }}>
        <Results>
          <div>Some information</div>
        </Results>
      </AppContext.Provider>
    );

    const children = screen.getByText('Some information');

    expect(children).toBeInTheDocument();
  });
});
