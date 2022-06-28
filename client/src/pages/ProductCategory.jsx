import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Product from "../components/Product";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-basis: 400px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CategoryButton = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #3293a8;
  border: none;
  margin: 6px;
  color: white;
  font-weight: 600;
  transition: 0.5;
  border-radius: 10px;
`;

const ProductCategory = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    async function getproducts(category) {
      axios
        .get(` http://localhost:5000/api/products/category/${category}`)
        .then((res) => {
          if (res.data.error) {
            alert(res.data.error);
          } else {
            setProducts(res.data.products);
          }
        });
    }
    console.log(category);
    getproducts(category);
  }, []);

  function handleClick(e, categoryName) {
    e.preventDefault();
    navigate(`/products/category/${categoryName}`);
  }

  function handleBack(e) {
    e.preventDefault();
    navigate(`/products`);
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Categories:</FilterText>
          <CategoryButton onClick={(e) => handleBack(e)}>All</CategoryButton>
          <CategoryButton onClick={(e) => handleClick(e, "Cruiser")}>
            Cruiser
          </CategoryButton>
          <CategoryButton onClick={(e) => handleClick(e, "Sport")}>
            Sport
          </CategoryButton>
          <CategoryButton onClick={(e) => handleClick(e, "Touring")}>
            Touring
          </CategoryButton>
          <CategoryButton onClick={(e) => handleClick(e, "Dirt")}>
            Dirt
          </CategoryButton>
        </Filter>
      </FilterContainer>
      <ProductContainer>
        {products.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </ProductContainer>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductCategory;
