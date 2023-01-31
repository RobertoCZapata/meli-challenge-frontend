import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { ListItem } from '../../src/components/ListItem';

describe('ListItem', () => {
  it('should render list item component', () => {
    render(
      <ListItem
        id='1'
        title='some title'
        price='10000'
        freeShipping={true}
        image='http://http2.mlstatic.com/D_820151-MLA50232582674_062022-I.jpg'
        condition='new'
      />
    );

    screen.getByText('new');
    screen.getByText('some title');
    screen.getByText('$ 10.000');
  });

  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <ListItem
          id='1'
          title='some title'
          price='10000'
          freeShipping={true}
          image='http://http2.mlstatic.com/D_820151-MLA50232582674_062022-I.jpg'
          condition='new'
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
