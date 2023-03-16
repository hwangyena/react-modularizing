const Items = ({
  items,
  selectedItems,
  onItemSelect,
}: {
  items: ItemMethod[];
  selectedItems: ItemWithSelect[];
  onItemSelect: (selected: ItemMethod) => void;
}) => {
  return (
    <>
      {items.map((item) => (
        <article
          className='item'
          key={item.id}
          data-selected={
            selectedItems.find((select) => select.id === item.id)?.isSelected
          }
          onClick={() => onItemSelect(item)}
        >
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

export default Items;
