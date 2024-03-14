import {
  useOutletContext,
  Link,
  useLocation,
  useParams,
} from 'react-router-dom';
import Item from '../Item/Item';
import styles from './Shop.module.css';
import { useState } from 'react';
import searchIcon from '../../assets/search.svg';

const Shop = () => {
  const { items } = useOutletContext();
  const { search } = useParams();
  const [searchFilter, setSearchFilter] = useState(search ? search : '');

  const filterItems = () => {
    return items.filter((item) => {
      if (searchFilter) {
        const regex = new RegExp(searchFilter, 'i');
        return regex.test(item.name);
      }
      return true;
    });
  };

  const handleMemberFilter = (event) => {
    setMemberFilter(event.target.value);
  };

  const initialItems = filterItems().slice(0, 24);

  return (
    <div className={styles.container}>
      <h1 className={styles.shopTitle}>Shop</h1>
      <form className={styles.searchBar}>
        <input
          id="search"
          type="text"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          placeholder="Filter results..."
        />
      </form>
      <div className={styles.legend}>Members: ✅ Non-Members: ❌</div>
      <div className={styles.shopContainer}>
        {initialItems.length > 0 ? (
          initialItems.map((item) => {
            return (
              <Link key={item.id} to="/item" state={item}>
                <Item item={item} />
              </Link>
            );
          })
        ) : (
          <h1>Sorry, no results found.</h1>
        )}
      </div>
    </div>
  );
};

export default Shop;
