import { useEffect, useState } from 'react';
import { useItemsMethods } from '../hooks/useItemMethod';
import { useItemSelect } from '../hooks/useItemSelect';
import Items from './Items';
import TotalPrice from './TotalPrice';

type Props = {
  onBuyAll: () => void;
};

const PersonalRecommend = ({ onBuyAll }: Props) => {
  const { items } = useItemsMethods();
  const { selectedItems, onItemSelect } = useItemSelect(items);

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
        <TotalPrice selectedItems={selectedItems} />
      </section>
    </div>
  );
};

export default PersonalRecommend;
