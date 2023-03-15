import { useEffect, useState } from 'react';
import { defaultItems } from '../mocks/data';

export const useItemsMethods = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      await fetch('/items').then(async (res) => {
        const userItems = await res.json();

        if (!userItems) {
          setItems(defaultItems);
          return;
        }
        setItems(userItems);
      });
    };

    fetchItems();
  }, []);

  return { items };
};
