import { useEffect, useState } from 'react';
import { defaultItems } from '../mocks/data';

export class ItemMethod {
  private remoteItemMethod: Item;

  constructor(remoteItemMethod: Item) {
    this.remoteItemMethod = remoteItemMethod;
  }

  get id() {
    return this.remoteItemMethod.id;
  }
  get icon() {
    return this.remoteItemMethod.icon;
  }
  get name() {
    return this.remoteItemMethod.name;
  }
  get price() {
    return this.remoteItemMethod.price;
  }

  get isLowPrice() {
    return this.price < 2000;
  }
}

const convertItemMethods = (items: Item[] | null) => {
  if (!items) {
    items = defaultItems;
  }

  const extended = items.map((item) => new ItemMethod(item));

  return extended;
};

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
