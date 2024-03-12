import { useEffect, useState } from 'react';
import './css/App.css';
import Header from './components/Header/Header';

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
        const data = await response.json();
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
      <h1>Hello</h1>
    </div>
  );
};

export default App;
