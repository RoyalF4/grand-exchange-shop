import styles from './CartItem.module.css';
import { useOutletContext } from 'react-router-dom';

const CartItem = ({ item }) => {
  const { handleDelete } = useOutletContext();
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={item.imgURL} />
      </div>
      <span className={styles.name}>{item.name}</span>
      <span className={styles.total}>{`${item.value.toLocaleString()} (${(
        item.value * item.quantity
      ).toLocaleString()})`}</span>
      <button className={styles.delete} onClick={() => handleDelete(item.id)}>
        ❌
      </button>
    </div>
  );
};

export default CartItem;
