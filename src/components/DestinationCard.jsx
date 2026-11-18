
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addFavorite,
  removeFavorite
} from "../features/favoriteSlice";

import { addToCart } from "../features/cartSlice";

function DestinationCard({ destination, onDelete }) {
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites);

  const isFavorite = favorites.some(
    product => product.id === destination.id
  );

  function handleFavorite() {
    if (isFavorite) {
      dispatch(removeFavorite(destination.id));
    } else {
      dispatch(addFavorite(destination));
    }
  }

  function handleAddToBag() {
    dispatch(addToCart(destination));
    alert("Added to your ÉLORA Shopping Bag!");
  }

  return (
    <div className="product-card">

      {/* PRODUCT IMAGE */}
      <div className="product-image">

        <img
          src={destination.image}
          alt={destination.name}
        />

        {/* EDIT PENCIL ICON */}
        <Link
          to={`/edit-destination/${destination.id}`}
          className="edit-icon"
          title="Edit Product"
        >
          ✎
        </Link>

        {/* WISHLIST HEART ICON */}
        <button
          className={`wishlist-icon ${isFavorite ? "active" : ""}`}
          onClick={handleFavorite}
          aria-label={
            isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          {isFavorite ? "♥" : "♡"}
        </button>

      </div>

      {/* PRODUCT DETAILS */}
      <div className="product-info">

        <p className="product-category">
          {destination.category}
        </p>

        <h3>{destination.name}</h3>

        <p className="product-description">
          {destination.description}
        </p>

        <div className="product-price">
          ₹{destination.price}
        </div>

        <p className="product-rating">
          ⭐ {destination.rating} / 5
        </p>

        {/* PRODUCT BUTTONS */}
        <div className="product-buttons">

          <Link
            to={`/destinations/${destination.id}`}
            className="view-btn"
          >
            Explore
          </Link>

          <button
            className="add-cart-btn"
            onClick={handleAddToBag}
          >
            Add to Bag
          </button>

          <button
            className="delete-btn"
            onClick={() => onDelete(destination.id)}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DestinationCard;
