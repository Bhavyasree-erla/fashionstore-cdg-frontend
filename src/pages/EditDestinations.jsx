
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditDestination() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    rating: "",
    image: "",
    description: ""
  });

  useEffect(() => {
    getProduct();
  }, [id]);

  async function getProduct() {
    try {
      const response = await api.get(`/products/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.log("Error loading product:", error);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(`/products/${id}`, {
        ...formData,
        price: Number(formData.price),
        rating: Number(formData.rating)
      });

      navigate("/destinations");
    } catch (error) {
      console.log("Error updating product:", error);
    }
  }

  return (
    <div className="form-container">
      <h1>Edit Product</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          step="0.1"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Update Product
        </button>
      </form>
    </div>
  );
}

export default EditDestination;
