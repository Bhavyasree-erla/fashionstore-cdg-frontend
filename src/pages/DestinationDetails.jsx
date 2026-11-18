
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function DestinationDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    api.get(`/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.log("Product error:", error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="details-loading">Loading ÉLORA...</div>;
  }

  if (!product) {
    return <div className="details-loading">Product not found.</div>;
  }

  return (
    <div className="elora-details-page">

      <div className="details-main">

        {/* PRODUCT IMAGE */}
        <div className="details-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="details-product-image"
          />
        </div>

        {/* PRODUCT INFORMATION */}
        <div className="details-content">

          <p className="details-brand">
            ÉLORA — THE ART OF ELEGANCE
          </p>

          <h1>{product.name}</h1>

          <p className="details-category">
            {product.category} Collection
          </p>

          <div className="details-price">
            ₹{Number(product.price).toLocaleString("en-IN")}
          </div>

          <p className="details-rating">
            ⭐ {product.rating} / 5
          </p>

          <div className="details-divider"></div>

          <h3>Product Overview</h3>

          <p className="details-description">
            {product.description}
          </p>

          <div className="details-information">

            <div>
              <span>BRAND</span>
              <p>{product.brand || "ÉLORA"}</p>
            </div>

            <div>
              <span>CATEGORY</span>
              <p>{product.category}</p>
            </div>

          </div>

          <Link
            to="/destinations"
            className="details-back-button"
          >
            ← Back to Collections
          </Link>

        </div>
      </div>

      {/* ADDITIONAL INFORMATION */}
      <div className="details-extra">

        <div>
          <h2>Designed for Elegance</h2>
          <p>
            Discover timeless designs that combine modern
            fashion with classic elegance. Every ÉLORA
            creation celebrates beauty and individuality.
          </p>
        </div>

        <div>
          <h2>Style Recommendation</h2>
          <p>
            Pair this product with complementary outfits
            and accessories to create a graceful and
            sophisticated look.
          </p>
        </div>

        <div>
          <h2>About ÉLORA</h2>
          <p>
            ÉLORA is a fashion brand focused on timeless
            designs, elegant collections and modern style.
            Our collection brings together beauty,
            simplicity and individuality.
          </p>
        </div>

      </div>

    </div>
  );
}

export default DestinationDetails;
