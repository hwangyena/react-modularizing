import { useEffect, useState } from 'react';
import { convertItemMethods } from '../models/Items';

export const useItemsMethods = () => {
  const [items, setItems] = useState<ItemMethod[]>([]);
  const [selectedItems, setSelectedItems] = useState<ItemWithSelect[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      await fetch('/items').then(async (res) => {
        const userItems = await res.json();
        const itemMethod = convertItemMethods(userItems);

        setItems(itemMethod);
        setSelectedItems(
          itemMethod.map((item) => ({ id: item.id, isSelected: false }))
        );
      });
    };

    fetchItems();
  }, []);

  const onItemSelect = (selected: ItemMethod) => {
    console.log('selected', selected);
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.id === selected.id
          ? { ...item, isSelected: !item.isSelected }
          : item
      )
    );
  };

  return { items, selectedItems, onItemSelect };
};
