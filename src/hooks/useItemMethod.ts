import { useEffect, useState } from 'react';
import { convertItemMethods } from '../models/Items';

export const useItemsMethods = () => {
  const [items, setItems] = useState<ItemMethod[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      await fetch('/items').then(async (res) => {
        const userItems = await res.json();
        const itemMethod = convertItemMethods(userItems);

        setItems(itemMethod);
      });
    };

    fetchItems();
  }, []);

  return { items };
};
