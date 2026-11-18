
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} from "../features/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your Shopping Bag</h1>
        <p>Your bag is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Bag</h1>
      <p className="cart-subtitle">YOUR ÉLORA SELECTION</p>

      <div className="cart-items">
        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <h4>₹{item.price}</h4>

              <div className="quantity-controls">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </div>

              <button
                className="remove-cart-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Order Summary</h2>
        <p>Subtotal: ₹{total.toLocaleString("en-IN")}</p>
        <h3>Total: ₹{total.toLocaleString("en-IN")}</h3>

        <Link to="/checkout" className="checkout-btn">
          Proceed to Checkout
        </Link>

        <button onClick={() => dispatch(clearCart())}>
          Clear Shopping Bag
        </button>
      </div>
    </div>
  );
}

export default Cart;
