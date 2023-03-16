import { defaultItems } from '../mocks/data';

class ItemMethod {
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

export const convertItemMethods = (items: Item[] | null) => {
  if (!items) {
    items = defaultItems;
  }

  const extended = items.map((item) => new ItemMethod(item));

  return extended;
};
