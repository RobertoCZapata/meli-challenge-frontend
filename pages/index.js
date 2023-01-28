import { ListItem } from "../src/components/ListItem";
import AppContext from "../src/context/AppContext";
import { useContext } from "react";

export default function Home() {
  const { items } = useContext(AppContext);

  return (
    <div className="search__items">
      {items?.map((el) => (
        <ListItem
          key={el.item.id}
          id={el.item.id}
          title={el.item.title}
          image={el.item.picture}
          price={el.item.price.amount}
          location={el.item.address.state_name}
          shipping={el.item.free_shipping}
        />
      ))}
    </div>
  );
}
