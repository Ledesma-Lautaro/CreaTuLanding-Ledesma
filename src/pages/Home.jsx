import React from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import CardList from "../components/sections/CardList";

const products = [
  {
    id: 1,
    name: "Stylish T-Shirt",
    description: "Comfortable and trendy t-shirt for everyday wear.",
    price: 25.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Classic Jeans",
    description: "Durable and stylish jeans for any occasion.",
    price: 49.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Lightweight and breathable shoes for running.",
    price: 79.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Winter Jacket",
    description: "Warm and cozy jacket for cold weather.",
    price: 99.99,
    image: "https://via.placeholder.com/300",
  },
  // Add more products as needed
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
