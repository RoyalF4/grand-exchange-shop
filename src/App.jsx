import { useEffect, useState } from 'react';
import './css/App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

const useItemData = () => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getItems() {
      try {
        const response = await fetch(
          'https://prices.runescape.wiki/api/v1/osrs/mapping',
          { mode: 'cors' }
        );
        if (!response.ok) {
          throw new Error(`There was a network error: ${response.status}`);
        }
        let data = await response.json();
        data = data
          // remove items with no value or no buy limit
          .filter((item) => item.value > 1 || !item.hasOwnProperty('limit'))
          // build image url for each item
          .map((item) => {
            let name = item.name.split(' ').join('_');
            // if item has charges, remove charges
            if (name.endsWith('(uncharged)')) {
              name = name.slice(0, -12);
            }
            const imgUrl = `https://oldschool.runescape.wiki/images/${name}_detail.png?9e894`;
            return { ...item, imgURL: imgUrl };
          });
        setItems(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setItems(null);
      } finally {
        setLoading(false);
      }
    }
    getItems();
  }, []);

  return { items, error, loading };
};

const App = () => {
  const { items, error, loading } = useItemData();
  const [cart, setCart] = useState([]);

  const handleSubmit = (item, quantity) => {
    if (cart.length === 0) {
      setCart([{ ...item, quantity }]);
    } else {
      let isNew = true;
      const newCart = cart.map((cartItem) => {
        // if item already exist, update quantity
        if (cartItem.id === item.id) {
          isNew = false;
          return { ...item, quantity };
        }
        return cartItem;
      });
      // if item is new, add to array
      if (isNew) newCart.push({ ...item, quantity });
      setCart(newCart);
    }
  };

  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <Header />
      <main>
        <Outlet context={{ items, cart, handleSubmit }} />
      </main>
    </div>
  );
};

export default App;
