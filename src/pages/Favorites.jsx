
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorite } from "../features/favoriteSlice";

function Favorites() {
  const favorites = useSelector(
    state => state.favorites
  );

  const dispatch = useDispatch();

  return (
    <div className="destinations-page">

      <div className="collections-heading">
        <p>YOUR PERSONAL COLLECTION</p>
        <h1>My Favorites</h1>
        <p>Your most-loved ÉLORA pieces.</p>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <h2>No Favorites Yet</h2>
          <p>Explore our collections and save your favourite pieces.</p>
          <Link to="/destinations" className="view-btn">
            Explore Collections
          </Link>
        </div>
      ) : (

        <div className="products-grid">

          {favorites.map(product => (

            <div className="product-card" key={product.id}>

              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="product-info">

                <p className="product-category">
                  {product.category}
                </p>

                <h3>{product.name}</h3>

                <p className="product-description">
                  {product.description}
                </p>

                <div className="product-price">
                  ₹{product.price}
                </div>

                <p className="product-rating">
                  ⭐ {product.rating} / 5
                </p>

                <div className="product-buttons">

                  <Link
                    to={`/destinations/${product.id}`}
                    className="view-btn"
                  >
                    Explore
                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      dispatch(removeFavorite(product.id))
                    }
                  >
                    ♥ Remove
                  </button>

                </div>
              </div>
            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default Favorites;
