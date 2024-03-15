import { useLocation, useOutletContext, Link } from 'react-router-dom';
import styles from './ItemInfo.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <div className={styles.itemContainer}>
        <div className={styles.imgContainer}>
          <img className={styles.itemImg} src={item.imgURL} alt={item.name} />
        </div>
        <div className={styles.info}>
          <h4>{item.name}</h4>
          <p>{item.examine}</p>
          <div className={styles.alch}>
            <span>Low Alch: {item.lowalch.toLocaleString()}</span>
            <span>High Alch: {item.highalch.toLocaleString()}</span>
          </div>
          <div>Members Item: {item.members ? '✅' : '🚫'}</div>
          <div>Limit: {item.limit}</div>
          <div className={styles.value}>
            {item.value.toLocaleString()} {item.value === 1 ? 'coin' : 'coins'}
          </div>
          <form
            className={styles.form}
            onSubmit={(event) => {
              event.preventDefault();
              toast.success('Item added to cart!');
              if (quantity > 0) handleSubmit(item, quantity);
            }}
          >
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
            <button className={styles.cartBtn}>Add to cart</button>
          </form>
        </div>
      </div>
      <Link to="/shop">
        <button className={styles.backBtn}>Back to shop</button>
      </Link>
    </div>
  );
};

export default ItemInfo;
