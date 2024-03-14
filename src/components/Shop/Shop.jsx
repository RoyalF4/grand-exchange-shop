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
  const [memberFilter, setMemberFilter] = useState('both');
  const [searchFilter, setSearchFilter] = useState(search ? search : '');

  console.log(searchFilter);

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

  const initialItems = filterItems().slice(0, 18);

  return (
    <>
      <h1>Shop</h1>
      <form>
        <input
          id="search"
          type="text"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          placeholder="Filter results..."
        />
      </form>
      <div>Members: ✅ Non-Members: ❌</div>
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
    </>
  );
};

export default Shop;
