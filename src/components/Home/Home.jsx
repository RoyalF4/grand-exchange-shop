import search from '../../assets/search.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h3>Welcome to the Grand Exchange!</h3>
      <form>
        <label htmlFor="search"></label>
        <input id="search" type="text" />
        <button>
          <img src={search} alt="" />
        </button>
      </form>
      <Link to="/shop">
        <button>Shop now!</button>
      </Link>
    </>
  );
};

export default Home;
