import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import React, { useState, useEffect } from "react";
import axios from "axios";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-basis: 400px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getproducts() {
      axios
        .get(` http://localhost:5000/api/products/allproducts`)
        .then((res) => {
          if (res.data.error) {
            alert(res.data.error);
          } else {
            setProducts(res.data.products);
          }
        });
    }
    getproducts();
  }, []);

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
