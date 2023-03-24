type Item = {
  id: number;
  icon: string;
  name: string;
  price: number;
};

type ItemMethod = Item & {
  isLowPrice: boolean;
};

type ItemWithSelect = {
  id: number;
  price: number;
  isSelected: boolean;
};
