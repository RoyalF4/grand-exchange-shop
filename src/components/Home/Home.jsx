import search from '../../assets/search.svg';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useState } from 'react';
import GE from '../../assets/GE.png';

const Home = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${GE})` }}>
      <h3>Welcome to the Grand Exchange!</h3>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <div className={styles.searchBar}>
          <input
            id="search"
            placeholder="Search for an item..."
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link to={`/shop/${query}`}>
            <button>
              <img src={search} alt="search" />
            </button>
          </Link>
        </div>
      </form>
      <Link to="/shop">
        <button className={styles.shopBtn}>Shop now!</button>
      </Link>
    </div>
  );
};

export default Home;
