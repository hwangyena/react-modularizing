import { ItemMethod } from '../lib/Items';

const Item = ({ items }: { items: ItemMethod[] }) => {
  return (
    <>
      {items.map((item) => (
        <article className='item' key={item.id}>
          <h2>{item.icon}</h2>
          <p>{item.name}</p>
          <p>{item.price}₩</p>

          {item.isLowPrice && (
            <strong className='low-price'>저렴한 가격!</strong>
          )}
        </article>
      ))}
    </>
  );
};

export default Item;
