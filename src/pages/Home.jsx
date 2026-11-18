
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="luxury-hero">

        <div className="hero-text">
          <p className="luxury-tag">
            ÉLORA — THE ART OF ELEGANCE
          </p>

          <h1>
            Timeless Style.
            <br />
            Effortless
            <br />
            Elegance.
          </h1>

          <p className="luxury-description">
            Discover thoughtfully selected fashion
            that celebrates simplicity, beauty,
            and individuality.
          </p>

          <Link to="/destinations" className="luxury-button">
            DISCOVER THE COLLECTION
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.openai.com/static-rsc-4/2oXb1nT2kzzfvTXIQdGQpK6p2-fL59AAAaIg-KLPUvU4RrsOYPYiOrY-83H_7q66USa4jw9P9b154xUaVI_czXJTytfCG31QzNFeIWwiT9VNy4qQeQN3ZYTtUnNEnva6DdMsckXvnXO_8Sjp9MIZF2OicYD8_4BSXjFltALsrQdbESVZsOD01FrJaMF03P5R?purpose=fullsize"
          />
        </div>


      </section>

      {/* BRAND PHILOSOPHY */}
      <section className="brand-story">
        <p className="section-label">THE ÉLORA PHILOSOPHY</p>

        <h2>Less, But Beautifully More.</h2>

        <p>
          A celebration of timeless silhouettes,
          refined details, and understated luxury.
        </p>
      </section>

      {/* FEATURE SECTION */}
      <section className="home-feature">

        <div className="feature-image">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000"
            alt="Fashion inspiration"
          />
        </div>

        <div className="feature-content">
          <p className="section-label">CURATED FOR YOU</p>

          <h2>
            Make Every
            <br />
            Moment Elegant.
          </h2>

          <p>
            From sophisticated everyday essentials
            to statement pieces, discover fashion
            that reflects your personality.
          </p>

          <Link to="/destinations" className="luxury-button">
            EXPLORE OUR WORLD
          </Link>
        </div>

      </section>

      

    </div>
  );
}

export default Home;
