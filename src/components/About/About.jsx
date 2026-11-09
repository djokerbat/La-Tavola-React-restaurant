import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about page">
      <div className="about-image"></div>

      <div className="about-content">
        <p className="eyebrow">OUR STORY</p>

        <h2>
          Good Food, <br />
          <span>Great Moments.</span>
        </h2>

        <p>
          At La Tavola, we believe that food is more than
          just a meal. It's a reason to gather, share stories,
          and create unforgettable memories.
        </p>

        <p>
          From freshly prepared pizzas and delicious pasta
          to delightful desserts, every dish is made with
          care and a passion for great taste.
        </p>

        <Link to="/Menu" className="main-btn">
          Discover Our Menu ↗
        </Link>
      </div>
    </section>
  );
}