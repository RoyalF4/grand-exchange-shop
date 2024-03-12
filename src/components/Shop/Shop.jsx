import { useOutletContext } from 'react-router-dom';
import Item from '../Item/Item';
import styles from './Shop.module.css';

const Shop = () => {
  const items = useOutletContext();

  const initialItems = [
    items[0],
    items[32],
    items[53],
    items[233],
    items[333],
    items[5],
    items[2342],
  ];
  return (
    <>
      <h1>Shop</h1>
      <div className={styles.shopContainer}>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </>
  );
};

export default Shop;
