import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify/dist/react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  max-width: 700px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;

const Button = styled.span`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = (props) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    async function getproduct(productId) {
      axios
        .get(` http://localhost:5000/api/products/${productId}`)
        .then((res) => {
          if (res.data.error) {
            alert(res.data.error);
          } else {
            setProduct(res.data);
          }
        });
    }
    getproduct(productId);
  }, []);

  const addtocart = () => {
    axios
      .get(`http://localhost:5000/api/user/addtocart?productId=${productId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.authToken,
        },
      })
      .then((res) => {
        if (res.data.error) {
          console.log(res.data.error);
          toast.error("Adding to cart failed", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
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

  const renderProductImage = (images) => {
    if (images && images.length > 0) {
      let image = images[0];
      return image;
    }
  };
  const image = renderProductImage(product.images);

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
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.product_name}</Title>
          <Desc>{product.description}</Desc>
          <Price>Ksh {product.price}</Price>

          <AddContainer>
            <Button onClick={addtocart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
