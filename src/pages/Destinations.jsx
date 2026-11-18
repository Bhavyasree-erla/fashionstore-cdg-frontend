
import { useEffect, useState } from "react";
import api from "../services/api";
import DestinationCard from "../components/DestinationCard";

function Destinations() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [rating, setRating] = useState("All");
  const [sort, setSort] = useState("");

  useEffect(() => {
    api.get("/products")
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  async function deleteProduct(id) {
    try {
      await api.delete(`/products/${id}`);

      setProducts(previous =>
        previous.filter(product => product.id !== id)
      );
    } catch (error) {
      console.log("Delete error:", error);
    }
  }

  function handleCategoryChange(e) {
    const selectedCategory = e.target.value;

    setCategory(selectedCategory);

    if (selectedCategory === "All") {
      setSearch("");
      setRating("All");
      setSort("");
    }
  }

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(product =>
      category === "All" ||
      product.category === category
    )
    .filter(product => {
      if (rating === "Low") return product.rating <= 4.5;

      if (rating === "Medium") {
        return product.rating > 4.5 && product.rating <= 4.7;
      }

      if (rating === "High") return product.rating > 4.7;

      return true;
    })
    .sort((a, b) => {
      if (sort === "High To Low") {
        return b.price - a.price;
      }

      if (sort === "Low To High") {
        return a.price - b.price;
      }

      return 0;
    });

  return (
    <div className="destinations-page">

      <div className="collections-heading">
        <p>THE ÉLORA COLLECTION</p>
        <h1>Discover Your Style</h1>
        <p>Explore timeless pieces selected for you.</p>
      </div>

      <div className="filter-section">

        <input
          type="text"
          placeholder="Search Products"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="All">All Categories</option>
          <option value="Women">Women</option>
          <option value="Men">Men</option>
          <option value="Accessories">Accessories</option>
          <option value="Footwear">Footwear</option>
          <option value="Fashion">Fashion</option>
          <option value="Jewellery">Jewellery</option>
        </select>

        <select
          value={rating}
          onChange={e => setRating(e.target.value)}
        >
          <option value="All">All Ratings</option>
          <option value="Low">Low Rating</option>
          <option value="Medium">Medium Rating</option>
          <option value="High">High Rating</option>
        </select>

        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
        >
          <option value="">Sort By Price</option>
          <option value="High To Low">High To Low</option>
          <option value="Low To High">Low To High</option>
        </select>

      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <DestinationCard
            key={product.id}
            destination={product}
            onDelete={deleteProduct}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="no-products">
          No products found. Try another search or filter.
        </p>
      )}

    </div>
  );
}

export default Destinations;
