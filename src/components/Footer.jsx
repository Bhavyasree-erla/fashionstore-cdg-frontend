
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="elora-footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h2>ÉLORA</h2>
          <p>THE ART OF ELEGANCE</p>
          <span>
            Discover timeless fashion and redefine your personal style.
          </span>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/destinations">Collections</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/orders">My Orders</Link>
        </div>

        <div className="footer-links">
          <h3>My Account</h3>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/cart">Shopping Bag</Link>
        </div>

        <div className="footer-contact">
          <h3>Stay Connected</h3>
          <p>Discover elegance in every detail.</p>
          <p>ÉLORA Fashion Store</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ÉLORA. All Rights Reserved.</p>
        <p>THE ART OF ELEGANCE</p>
      </div>
    </footer>
  );
}

export default Footer;
