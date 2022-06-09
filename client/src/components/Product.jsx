import styled from "styled-components";
import axios from "axios";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  width: 90%;
  flex-basis: 20%;
  margin: 5px;
  min-width: 280px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const TextContainer = styled.div`
 display: block;
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  border: 0;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Text = styled.p`
  text-align: left;
`

const Product = ({ item }) => {
  const navigate = useNavigate();

  const addtocart = () => {
    axios
      .get(`http://localhost:5000/api/user/addtocart?productId=${item._id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.authToken,
        },
      })
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          navigate("/cart");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <Container>
      <Circle />
      <Image src={item.images[0]} />
      <Info>
        <Icon onClick={addtocart}>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
    <TextContainer>
    <Text>{item.product_name}</Text>
    <Text>{item.price}</Text>
    </TextContainer>
    </>
  );
};

export default Product;
