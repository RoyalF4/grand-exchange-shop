import { useOutletContext, Link } from 'react-router-dom';
import Item from '../Item/Item';
import styles from './Shop.module.css';
import { useState } from 'react';
import searchIcon from '../../assets/search.svg';

const Shop = () => {
  const { items } = useOutletContext();
  const [member, setMember] = useState(false);
  const [search, setSearch] = useState('');

  const filterItems = () => {
    return items.filter((item) => {
      if (search) {
        const regex = new RegExp(search, 'i');
        return regex.test(item.name);
      }
      return true;
    });
  };

  console.log(filterItems());

  const initialItems = filterItems().slice(0, 18);

  return (
    <>
      <h1>Shop</h1>
      <form>
        <input
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter results..."
        />
      </form>
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
