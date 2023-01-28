import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { ItemDescription } from "../../src/components/ItemDescription";
import AppContext from "../../src/context/AppContext";

export default function PageItem() {
  const router = useRouter();
  const { id } = router.query;

  const { getSelectedItem, selectedItem } = useContext(AppContext);

  useEffect(() => {
    if (id) {
      getSelectedItem(id);
    }
  }, [id, getSelectedItem]);

  return (
    <div className="item-container">
      <ItemDescription
        title={selectedItem?.title}
        sold_quantity={selectedItem?.sold_quantity}
        image={selectedItem?.thumbnail}
        price={selectedItem?.price}
        description={selectedItem?.plain_text}
      />
    </div>
  );
}
