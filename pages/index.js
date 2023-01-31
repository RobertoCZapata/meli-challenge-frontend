import { ListItem } from 'components/ListItem';
import { useAppContext } from 'context/AppContext';
import { Results } from 'components/Results';
import { Pagination } from 'components/Pagination';

export default function Home() {
  const { items } = useAppContext();

  const renderItems = items?.length > 0;

  return (
    <>
      <Results>
        {renderItems && (
          <>
            {items.map((item) => (
              <ListItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.picture}
                price={item.price.amount}
                freeShipping={item.free_shipping}
                condition={item.condition}
              />
            ))}
            <Pagination />
          </>
        )}
      </Results>
    </>
  );
}