import cart from '../../assets/cart.svg';
import logo from '../../assets/logo.webp';
import home from '../../assets/home.svg';
import shop from '../../assets/shop.svg';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={`${styles.container}`}>
      <img className={`${styles.logo}`} src={logo} alt="gold coins" />
      <div className={styles.logoContainer}>
        <Link to="/">
          <h1 className={`${styles.h1}`}>Grand Exchange</h1>
        </Link>
      </div>
      <Link to="/">
        <button className={styles.headerBtn}>
          <img className={`${styles.menuImg}`} src={home} alt="home" />
          <span>Home</span>
        </button>
      </Link>
      <Link to="/shop">
        <button className={styles.headerBtn}>
          <img className={`${styles.menuImg}`} src={shop} alt="shop" />
          <span>Shop</span>
        </button>
      </Link>
      <Link to="/cart">
        <button className={styles.headerBtn}>
          <img className={`${styles.menuImg}`} src={cart} alt="cart" />
          <span>Cart</span>
        </button>
      </Link>
    </header>
  );
};

export default Header;
