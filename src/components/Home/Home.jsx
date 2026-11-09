import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home page">
      <div className="home-content">
        <p className="eyebrow text-danger">WELCOME TO LA TAVOLA</p>

        <h1>
          Good Food <br />
          <span>Good Mood.</span>
        </h1>

        <p className="home-description">
          Enjoy delicious Italian-inspired dishes made with
          fresh ingredients, rich flavors, and a passion for
          bringing people together.
        </p>

        <div className="home-buttons">
          <Link to="/Menu" className="main-btn bg-black">
            Explore Our Menu ↗
          </Link>

          <Link to="/About" className="text-btn">
            Discover Our Story
          </Link>
        </div>

        <div className="home-bottom">
          <span>FRESH INGREDIENTS</span>
          <span>DELICIOUS FOOD</span>
          <span>MADE WITH LOVE</span>
        </div>
      </div>

      <div className="home-image">
        <div className="image-label">
          <span>LA TAVOLA</span>
          <p>A taste worth sharing.</p>
        </div>
      </div>
    </section>
  );
}