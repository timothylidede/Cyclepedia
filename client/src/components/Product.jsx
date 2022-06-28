import styled from "styled-components";
import axios from "axios";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { toast, ToastContainer } from "react-toastify/dist/react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  width: 23%;
  margin: 5px;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
const ProductContainer = styled.div`
  flex: 1;
  width: 97%;
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
  width: 90%;
  padding: 0 0 0 0.2rem;
  margin: 5px;
`;
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
  font-size: 20px;
`;
const Price = styled.p`
  font-weight: bold;
`;

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
          toast.success("Added to cart successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ProductContainer>
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
        </Info>
      </ProductContainer>
      <TextContainer>
        <Text>{item.product_name}</Text>
        <Text>
          <Price>{`Ksh ${item.price}`}</Price>
        </Text>
      </TextContainer>
    </Container>
  );
};

export default Product;
