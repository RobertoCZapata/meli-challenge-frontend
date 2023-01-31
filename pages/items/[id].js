import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { ItemDescription } from '../../src/components/ItemDescription';
import { useAppContext } from '../../src/context/AppContext';
import { Results } from '../../src/components/Results';

export default function PageItem() {
  const router = useRouter();
  const { id } = router.query;

  const { getItem, selectedItem } = useAppContext();

  useEffect(() => {
    if (id) {
      getItem(id);
    }
  }, [id]);

  console.log('selectedItem', selectedItem);

  return (
    <Results>
      {selectedItem && (
        <ItemDescription
          title={selectedItem.title}
          sold_quantity={selectedItem.sold_quantity}
          image={selectedItem.picture}
          price={selectedItem.price}
          description={selectedItem.description}
          condition={selectedItem.condition}
        />
      )}
    </Results>
  );
}
