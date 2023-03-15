import { useEffect, useState } from 'react';
import { defaultItems } from '../mocks/data';

type Props = {
  onBuyAll: () => void;
};

const Items = ({ onBuyAll }: Props) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      await fetch('/items').then(async (res) => {
        const userItems = await res.json();

        if (!userItems) {
          setItems(defaultItems);
          return;
        }
        setItems(userItems);
      });
    };

    fetchItems();
  }, []);

  return (
    <>
      <section className='items'>
        {items.map((item) => (
          <article className='item' key={item.id}>
            <h2>{item.icon}</h2>
            <p>{item.name}</p>
            <p>{item.price}₩</p>
          </article>
        ))}
      </section>
      <section>
        <button onClick={onBuyAll}>모두 구입하기</button>
      </section>
    </>
  );
};

export default Items;
