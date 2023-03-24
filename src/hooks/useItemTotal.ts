export const useItemTotal = (selected: ItemWithSelect[]) => {
  const getPrice = () => {
    return selected.reduce((p, c) => (c.isSelected ? p + c.price : p), 0);
  };

  return { getPrice };
};
