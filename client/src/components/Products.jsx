import styled from "styled-components";
import {popularProducts} from "../data";
import Product from "./Product";
import React from "react";

const Container = styled.div`
      padding: 20px;
      width: 100%;
      display: flex;
      flex-basis: 400px ;
      flex-wrap: wrap;
      justify-content: space-between;
`
const Products = () => {
    return (
        <Container>
            {popularProducts.map(item=>(
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
}

export default Products;
