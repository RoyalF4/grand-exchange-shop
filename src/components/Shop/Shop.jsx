import { useOutletContext } from 'react-router-dom';

const Shop = () => {
  const items = useOutletContext();
  return (
    <>
      <h1>Shop</h1>
    </>
  );
};

export default Shop;
