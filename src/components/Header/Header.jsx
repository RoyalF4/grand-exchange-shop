import cart from '../../assets/cart.svg';
import coins from '../../assets/coins.webp';
import search from '../../assets/search.svg';
import home from '../../assets/home.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.container}`}>
      <img className={`${styles.logo}`} src={coins} alt="gold coins" />
      <h1 className={`${styles.h1}`}>Grand Exchange</h1>
      <form>
        <input type="text" />
        <button>
          <img src={search} alt="search icon" />
        </button>
      </form>
      <button>
        <img src={home} alt="home" />
      </button>
      <button>
        <img src={cart} alt="cart" />
      </button>
    </header>
  );
};

export default Header;
