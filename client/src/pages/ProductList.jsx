import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
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

const ProductList = () => {
  const navigate = useNavigate();
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
      <Title>All Products</Title>
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
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
