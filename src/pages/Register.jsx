
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    try {
      setLoading(true);

      await api.post("/users", user);

      alert("Registration successful!");
      navigate("/login");

    } catch (error) {
      console.log("Registration error:", error);
      setMessage("Registration failed. Check whether your backend is running.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {message && <p>{message}</p>}

        </form>

      </div>
    </div>
  );
}

export default Register;
