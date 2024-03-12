import cart from '../assets/cart.svg';
import coins from '../assets/coins.webp';
import search from '../assets/search.svg';
import home from '../assets/home.svg';

const Header = () => {
  return (
    <header>
      <img src={coins} alt="gold coins" />
      <h1>Grand Exchange</h1>
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
