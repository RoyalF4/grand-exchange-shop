import { useLocation, useOutletContext, Link } from 'react-router-dom';
import styles from './ItemInfo.module.css';
import { useState } from 'react';

const ItemInfo = () => {
  const { state: item } = useLocation();
  const [quantity, setQuantity] = useState(0);
  const { handleSubmit } = useOutletContext();

  const increment = () => {
    if (quantity < item.limit) setQuantity((prev) => parseInt(prev) + 1);
  };

  const decrement = () => {
    if (quantity > 0) setQuantity((prev) => parseInt(prev) - 1);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setQuantity(value > item.limit ? item.limit : value < 0 ? 0 : value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.itemImg} src={item.imgURL} alt={item.name} />
      </div>
      <div>
        <h4>{item.name}</h4>
        <p>{item.examine}</p>
        <div>
          <span>Low Alch: {item.lowalch}</span>
          <span>High Alch: {item.highalch}</span>
        </div>
        <div>Members Item: {item.member ? '✅' : '🚫'}</div>
        <div>Limit: {item.limit}</div>
        <div>
          {item.value.toLocaleString()} {item.value === 1 ? 'coin' : 'coins'}
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (quantity > 0) handleSubmit(item, quantity);
          }}
        >
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 0 ? true : false}
          >
            -
          </button>
          <input
            type="number"
            onChange={handleChange}
            value={quantity}
            min={0}
            max={item.limit}
          />
          <button
            type="button"
            onClick={increment}
            disabled={quantity === item.limit ? true : false}
          >
            +
          </button>
          <button>Add to cart</button>
        </form>
      </div>
      <Link to="/shop">
        <button>Back to shop</button>
      </Link>
    </div>
  );
};

export default ItemInfo;
