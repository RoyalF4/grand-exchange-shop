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
        data = data.map((item) => {
          const name = item.name.split(' ').join('_');
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

  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Header />
      <main>
        <Outlet context={items} />
      </main>
    </div>
  );
};

export default App;
