
import margherita from "../../assets/margherita.jpg";
import pepperoni from "../../assets/pepperoni.jpg";
import fourCheese from "../../assets/four-cheese.jpg";

import alfredo from "../../assets/alfredo.jpg";
import chickenPasta from "../../assets/chicken-pasta.jpg";
import arrabbiata from "../../assets/arrabbiata.jpg";
import lasagna from "../../assets/lasagna.jpg";

import garlicBread from "../../assets/garlic-bread.jpg";
import mozzarellaSticks from "../../assets/mozzarella-sticks.jpg";
import chickenStrips from "../../assets/chicken-strips.jpg";

import orangeJuice from "../../assets/orange-juice.jpg";
import lemonMint from "../../assets/lemon-mint.jpg";
import softDrinks from "../../assets/soft-drinks.jpg";

import tiramisu from "../../assets/tiramisu.jpg";
import brownie from "../../assets/brownie.jpg";

export default function Menu() {
  const categories = [
    {
      title: "Pizza",
      description: "Freshly baked, full of flavor.",
      dishes: [
        {
          name: "Margherita Pizza",
          description: "Tomato sauce, mozzarella, and fresh basil.",
          price: 150,
          image: margherita,
        },
        {
          name: "Pepperoni Pizza",
          description: "Mozzarella, tomato sauce, and pepperoni.",
          price: 190,
          image: pepperoni,
        },
        {
          name: "Four Cheese Pizza",
          description: "A delicious blend of four rich cheeses.",
          price: 210,
          image: fourCheese,
        },
      ],
    },
    {
      title: "Pasta",
      description: "Italian classics made with love.",
      dishes: [
        {
          name: "Fettuccine Alfredo",
          description: "Creamy white sauce with parmesan cheese.",
          price: 165,
          image: alfredo,
        },
        {
          name: "Chicken Pasta",
          description: "Pasta with grilled chicken and creamy sauce.",
          price: 180,
          image: chickenPasta,
        },
        {
          name: "Penne Arrabbiata",
          description: "Penne pasta with spicy tomato sauce.",
          price: 145,
          image: arrabbiata,
        },
        {
          name: "Lasagna",
          description: "Layers of pasta, beef, tomato sauce, and cheese.",
          price: 195,
          image: lasagna,
        },
      ],
    },
    {
      title: "Appetizers",
      description: "The perfect start to your meal.",
      dishes: [
        {
          name: "Garlic Bread",
          description: "Toasted bread with garlic butter.",
          price: 65,
          image: garlicBread,
        },
        {
          name: "Mozzarella Sticks",
          description: "Crispy mozzarella served with dipping sauce.",
          price: 95,
          image: mozzarellaSticks,
        },
        {
          name: "Chicken Strips",
          description: "Crispy chicken strips with our special dip.",
          price: 110,
          image: chickenStrips,
        },
      ],
    },
    {
      title: "Drinks",
      description: "Refresh yourself with every sip.",
      dishes: [
        {
          name: "Fresh Orange Juice",
          description: "Freshly squeezed orange juice.",
          price: 55,
          image: orangeJuice,
        },
        {
          name: "Lemon Mint",
          description: "Refreshing lemon and mint drink.",
          price: 50,
          image: lemonMint,
        },
        {
          name: "Soft Drinks",
          description: "Choose your favorite soft drink.",
          price: 35,
          image: softDrinks,
        },
      ],
    },
    {
      title: "Desserts",
      description: "A sweet ending to your meal.",
      dishes: [
        {
          name: "Classic Tiramisu",
          description: "Italian-style dessert with coffee and cream.",
          price: 95,
          image: tiramisu,
        },
        {
          name: "Chocolate Brownie",
          description: "Rich and delicious chocolate brownie.",
          price: 80,
          image: brownie,
        },
      ],
    },
  ];

  return (
    <section className="menu page">
      <div className="menu-heading">
        <p className="eyebrow text-danger">A LITTLE TASTE OF ITALY</p>
        <h2>
          Our <span>Menu</span>
        </h2>
        <p>Discover your favorites, freshly prepared just for you.</p>
      </div>

      {categories.map((category) => (
        <div className="menu-category" key={category.title}>
          <div className="category-heading">
            <h3>{category.title}</h3>
            <p className="mb-3">{category.description}</p>
          </div>

          <div className="menu-grid">
            {category.dishes.map((dish) => (
              <div className="dish-card" key={dish.name}>
                <img src={dish.image} alt={dish.name} />

                <div className="dish-info">
                  <div>
                    <h4>{dish.name}</h4>
                    <p className=" text-success">{dish.description}</p>
                  </div>

                  <strong className="text-danger">{dish.price} EGP</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
