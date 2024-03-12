import styles from './Item.module.css';
import { useState } from 'react';

const Item = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { imgURL, name, limit } = item;

  const handleChange = (event) => {
    const { value } = event.target;
    setQuantity(value > limit ? limit : value);
  };

  const increment = () => {
    if (quantity < limit) setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.itemImg} src={imgURL} alt={name} />
      </div>
      <h4 className={styles.text}>{name}</h4>
      <form className={styles.quantity}>
        <button type="button" onClick={decrement}>
          -
        </button>
        <input
          type="number"
          onChange={handleChange}
          value={quantity}
          min="0"
          max={limit}
        />
        <button type="button" onClick={increment}>
          +
        </button>
      </form>
    </div>
  );
};

export default Item;
