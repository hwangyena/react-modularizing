import { useMemo } from 'react';

type Props = { items: Item[] };

const Item = ({ items }: Props) => {
  const minPrice = useMemo(
    () => Math.min(...items.map((item) => item.price)),
    [items]
  );

  return (
    <>
      {items.map((item) => (
        <article className='item' key={item.id}>
          <h2>{item.icon}</h2>
          <p>{item.name}</p>
          <p>{item.price}₩</p>
          {minPrice === item.price && (
            <strong className='low-price'>가장 낮은 가격!</strong>
          )}
        </article>
      ))}
    </>
  );
};

export default Item;
