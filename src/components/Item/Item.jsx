import styles from './Item.module.css';
import { useState } from 'react';

const Item = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { imgURL, name, value } = item;

  return (
    <div className={styles.container}>
      <div className={styles.members}>{item.members ? '✅' : '❌'}</div>
      <div className={styles.imgContainer}>
        <img className={styles.itemImg} src={imgURL} alt={name} />
      </div>
      <h4 className={styles.text}>{name}</h4>
      <div>
        {value.toLocaleString()} {value === 1 ? 'coin' : 'coins'}
      </div>
    </div>
  );
};

export default Item;
