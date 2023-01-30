import { ListItem } from '../src/components/ListItem';
import { useAppContext } from '../src/context/AppContext';
import { Results } from '../src/components/Results';

export default function Home() {
  const { items } = useAppContext();

  return (
    <Results>
      {items?.map((item) => (
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
    </Results>
  );
}
