import { useOutletContext, Link } from 'react-router-dom';
import Item from '../Item/Item';
import styles from './Shop.module.css';

const Shop = () => {
  const { items } = useOutletContext();

  const initialItems = [
    items[0],
    items[322],
    items[52],
    items[223],
    items[33],
    items[522],
    items[232],
  ];
  return (
    <>
      <h1>Shop</h1>
      <div className={styles.shopContainer}>
        {initialItems.map((item) => {
          return (
            <Link key={item.id} to="/item" state={item}>
              <Item item={item} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
