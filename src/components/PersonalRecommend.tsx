import { useEffect, useState } from 'react';
import { useItemsMethods } from '../hooks/useItemMethod';
import Items from './Items';

type Props = {
  onBuyAll: () => void;
};

const PersonalRecommend = ({ onBuyAll }: Props) => {
  const { items, selectedItems, onItemSelect } = useItemsMethods();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(selectedItems.length);
  }, [items]);

  return (
    <div>
      <h1>개인별 물건 추천 프로세스</h1>
      <section className='items'>
        <Items
          items={items}
          selectedItems={selectedItems}
          onItemSelect={onItemSelect}
        />
      </section>
      <section>
        <button onClick={onBuyAll}>모두 구입하기</button>
      </section>
      <section>
        <h3>총 금액: {total}원</h3>
      </section>
    </div>
  );
};

export default PersonalRecommend;
