import React, { useState, useEffect } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";


export default function LatestProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  let token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }) // Replace with your actual API URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  console.log(products);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container">
      <h1 className="text-center my-5">Products</h1>
      <div className="row">
          {products.map((product) => {
            return (
              <ProductCard
                key={product.product_id}
                product_title={product.product_title}
                product_cat={product.product_cat}
                product_desc={product.product_desc}
                qty={product.qty}
                product_brand={product.product_brand}
                featured_image={product.featured_image}
              />
            );
          })}
      </div>
    </div>
  );
}
