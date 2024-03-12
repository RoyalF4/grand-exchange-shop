const Cart = () => {
  return <h1>Cart</h1>;
};

export default Cart;

// const increment = () => {
//   if (quantity < limit) setQuantity((prev) => parseInt(prev) + 1);
// };

// const decrement = () => {
//   if (quantity > 0) setQuantity((prev) => parseInt(prev) - 1);
// };

// const handleChange = (event) => {
//   const { value } = event.target;
//   setQuantity(value > limit ? limit : value < 0 ? 0 : value);
// };

// <form className={styles.quantity}>
//         <button type="button" onClick={decrement}>
//           -
//         </button>
//         <input
//           type="number"
//           onChange={handleChange}
//           value={quantity}
//           min="0"
//           max={limit}
//         />
//         <button type="button" onClick={increment}>
//           +
//         </button>
//       </form>
