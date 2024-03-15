import styles from './CartItem.module.css';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';

const CartItem = ({ item }) => {
  const { handleDelete, handleSubmit } = useOutletContext();
  const [quantity, setQuantity] = useState(item.quantity);

  const increment = () => {
    if (quantity < item.limit) {
      setQuantity((q) => q + 1);
      handleSubmit(item, quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity((q) => q - 1);
      handleSubmit(item, quantity - 1);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setQuantity(value > item.limit ? item.limit : value < 0 ? 0 : value);
    handleSubmit(item, quantity);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={item.imgURL} />
      </div>
      <span className={styles.name}>{item.name}</span>
      <div className={styles.quantityContainer}>
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 0 ? true : false}
          className={styles.quantityBtn}
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
          className={styles.quantityBtn}
        >
          +
        </button>
      </div>
      <span className={styles.total}>{`
      ${item.value.toLocaleString()} (${(
        item.value * item.quantity
      ).toLocaleString()})`}</span>
      <button className={styles.delete} onClick={() => handleDelete(item.id)}>
        ❌
      </button>
    </div>
  );
};

export default CartItem;
