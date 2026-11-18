
import { useState } from "react";
import { Link } from "react-router-dom";

function OrderHistory() {
  const [orders, setOrders] = useState(() =>
    JSON.parse(localStorage.getItem("orders") || "[]")
  );

  function cancelOrder(orderId) {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?"
    );

    if (!confirmCancel) return;

    const updatedOrders = orders.map(order =>
      order.id === orderId
        ? { ...order, status: "Cancelled" }
        : order
    );

    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  }

  if (orders.length === 0) {
    return (
      <div className="orders-page">
        <h1>My Orders</h1>
        <p className="orders-subtitle">
          YOUR ÉLORA PURCHASE HISTORY
        </p>

        <div className="empty-orders">
          <h2>No orders yet</h2>
          <p>Your completed orders will appear here.</p>
          <Link to="/destinations">Explore Collections</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h1>My Orders</h1>
      <p className="orders-subtitle">
        YOUR ÉLORA PURCHASE HISTORY
      </p>

      {orders.map(order => (
        <div className="order-card" key={order.id}>
          <div className="order-header">
            <h3>Order #{order.id}</h3>

            <span className={order.status === "Cancelled" ? "cancelled-status" : "confirmed-status"}>
              {order.status || "Confirmed"}
            </span>
          </div>

          <p className="order-date">{order.date}</p>

          {order.items.map(item => (
            <div className="order-product" key={item.id}>
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

          <h3 className="order-total">
            Total: ₹{Number(order.total).toLocaleString("en-IN")}
          </h3>

          {order.status !== "Cancelled" && (
            <button
              className="cancel-order-btn"
              onClick={() => cancelOrder(order.id)}
            >
              Cancel Order
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;
