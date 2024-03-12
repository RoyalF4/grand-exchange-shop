import styles from './Item.module.css';
import { useState } from 'react';

const Item = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { imgURL, name, limit } = item;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.itemImg} src={imgURL} alt={name} />
      </div>
      <h4 className={styles.text}>{name}</h4>
      <form className={styles.quantity}>
        <button>-</button>
        <input type="number" value={quantity} min="0" max={limit} />
        <button>+</button>
      </form>
    </div>
  );
};

export default Item;