import React from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import CardList from "../components/sections/CardList";

const products = [
  {
    id: 1,
    name: "Classic Glazed Donut",
    description: "A timeless favorite with a sweet, glossy glaze.",
    price: 3,
    image: "/images/donuts.jpg",
  },
  {
    id: 2,
    name: "Chocolate Sprinkle Donut",
    description: "Rich chocolate frosting topped with colorful sprinkles.",
    price: 4,
    image: "/images/donuts.jpg",
  },
  {
    id: 3,
    name: "Strawberry Frosted Donut",
    description: "Delicious strawberry frosting with a soft, fluffy base.",
    price: 4,
    image: "/images/donuts.jpg",
  },
  {
    id: 4,
    name: "Maple Bacon Donut",
    description: "Sweet maple glaze with crispy bacon bits on top.",
    price: 5,
    image: "/images/donuts.jpg",
  },
];

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CardList products={products}/>
    </div>
  );
};

export default Home;
