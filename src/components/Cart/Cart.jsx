import { useOutletContext, Link } from 'react-router-dom';
import styles from './Cart.module.css';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { cart } = useOutletContext();

  const total = cart.reduce(
    (total, item) => total + item.quantity * item.value,
    0
  );
  console.log(cart);
  // if cart is empty return message
  if (cart.length === 0) {
    return (
      <span className={styles.empty}>
        No items in cart, click <Link to="/shop">here</Link> to go back to the
        shop!
      </span>
    );
  }
  return (
    <div className={styles.container}>
      {cart.map((item) => (
        <CartItem item={item} />
      ))}
      <div className={styles.total}>
        Total: <span>{total.toLocaleString()} coins</span>
      </div>
    </div>
  );
};

export default Cart;
