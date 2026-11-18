
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const favorites = useSelector(state => state.favorites);
  const cart = useSelector(state => state.cart);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const user = localStorage.getItem("user");

  return (
    <nav className="elora-navbar">
      <Link to="/" className="elora-logo">
        ÉLORA
        <span>THE ART OF ELEGANCE</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/destinations">Collections</Link>

        {!user && (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}

        {user && <Link to="/logout">Logout</Link>}

        <Link to="/favorites" className="nav-favorites">
          ♡ Favorites ({favorites.length})
        </Link>

        <Link to="/cart" className="nav-cart">
          🛍 Bag ({cartCount})
        </Link>
        <Link to="/orders">
          My Orders
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
