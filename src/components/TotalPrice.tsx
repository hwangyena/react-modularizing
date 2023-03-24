import { useItemTotal } from '../hooks/useItemTotal';

type Props = {
  selectedItems: ItemWithSelect[];
};

const TotalPrice = ({ selectedItems }: Props) => {
  const { getPrice } = useItemTotal(selectedItems);

  return <h3>총 금액: {getPrice()}원</h3>;
};

export default TotalPrice;
