import { useItemsMethods } from '../lib/Items';
import Item from './Item';

type Props = {
  onBuyAll: () => void;
};

const PersonalRecommend = ({ onBuyAll }: Props) => {
  const { items } = useItemsMethods();

  return (
    <div>
      <h1>개인별 물건 추천 프로세스</h1>
      <section className='items'>
        <Item items={items} />
      </section>
      <section>
        <button onClick={onBuyAll}>모두 구입하기</button>
      </section>
    </div>
  );
};

export default PersonalRecommend;
