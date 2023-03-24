import { useEffect, useState } from 'react';

export const useItemSelect = (items: ItemMethod[]) => {
  const [selectedItems, setSelectedItems] = useState<ItemWithSelect[]>([]);

  useEffect(() => {
    setSelectedItems(items.map((item) => ({ id: item.id, isSelected: false })));
  }, [items]);

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

  return { selectedItems, onItemSelect };
};
