
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cartSlice";
import { Link } from "react-router-dom";

function Checkout() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handlePlaceOrder() {
    if (cart.length === 0) return;

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString("en-IN"),
      items: cart,
      total: total
    };

    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    localStorage.setItem(
      "orders",
      JSON.stringify([newOrder, ...savedOrders])
    );

    setOrderPlaced(true);
    dispatch(clearCart());
  }

  if (orderPlaced) {
    return (
      <div className="checkout-success">
        <div className="success-icon">✓</div>
        <p>ÉLORA — THE ART OF ELEGANCE</p>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for choosing ÉLORA.</p>
        <p>Your demo order has been confirmed.</p>

        <Link to="/destinations">
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <h1>Your bag is empty</h1>
        <Link to="/destinations">Explore Collections</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <p>REVIEW YOUR ÉLORA ORDER</p>

      <div className="checkout-summary">
        {cart.map(item => (
          <div className="checkout-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div>
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <strong>
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </strong>
            </div>
          </div>
        ))}

        <h2>
          Total: ₹{total.toLocaleString("en-IN")}
        </h2>

        <p className="demo-note">
          This is a demo checkout. No real payment will be made.
        </p>

        <button onClick={handlePlaceOrder}>
          Place Demo Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
