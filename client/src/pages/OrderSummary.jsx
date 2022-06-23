import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div``;

const OuterWrapper = styled.div`
  margin-top: 20px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  width: 47%;
  height: 67%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-left: 300px;
`;

const Subtitle = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductType = styled.span``;
const Quantity = styled.span``;
const Unit = styled.span``;
const ProductPrice = styled.span``;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SummaryItemText = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const SummaryButton = styled.button`
  width: 50%;
  border: none;
  padding: 10px 5px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 25px;
  margin-bottom: 10px;
  border-radius: 55px;
  font-weight: 700;
  font-size: 24px;
  margin-left: 320px;
  &:hover {
    background-color: black;
  }
`;

const OrderSummary = () => {
  const [cartItems, setCartItems] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    async function getcartItems() {
      axios
        .get(`http://localhost:5000/api/user/cartinfo`, {
          headers: {
            Authorization: "Bearer " + localStorage.authToken,
          },
        })
        .then((res) => {
          if (res.data.error) {
            alert(res.data.error);
          } else {
            setCartItems(res.data.cart);
            setProductDetails(res.data.productDetails);
          }
        });
    }
    getcartItems();
  }, []);

  const getSubtotal = (productDetails, cartItems) => {
    let subtotal = 0;

    for (let i = 0; i < productDetails.length; i++) {
      const cost = cartItems[i].quantity * productDetails[i].price;
      subtotal += cost;
    }
    return subtotal;
  };

  const subtotal = getSubtotal(productDetails, cartItems);
  const deliveryfee = 500000;
  const discount = 100000;
  const total = subtotal + deliveryfee - discount;

  return (
    <Container>
      <Navbar />
      <Announcement />
      <OuterWrapper>
        <Wrapper>
          <Title>ORDER SUMMARY</Title>
          <Subtitle>Cart Items</Subtitle>
          <Bottom>
            <Info>
              {productDetails.map((item, index) => (
                <Product>
                  <ProductDetail>
                    <Details>
                      <ProductName>
                        <b>Product name:</b> {item.product_name}
                      </ProductName>
                      <ProductId>
                        <b>Unit Price:</b> {item.price}
                      </ProductId>
                      <ProductType>
                        <b>Type:</b> {item.category}
                      </ProductType>
                      <Quantity>
                        <b>Quantity:</b> {cartItems[index].quantity}
                      </Quantity>
                      <ProductPrice>
                        <b>Cost:</b> {cartItems[index].quantity * item.price}{" "}
                      </ProductPrice>
                    </Details>
                  </ProductDetail>
                </Product>
              ))}

              <Subtitle>Payment Summary</Subtitle>
              <SummaryItem type="total">
                <SummaryItemText>
                  <b>Total:</b>Ksh {total}{" "}
                </SummaryItemText>
              </SummaryItem>
              <SummaryButton>PAY NOW</SummaryButton>
            </Info>
          </Bottom>
        </Wrapper>
        <Footer />
      </OuterWrapper>
    </Container>
  );
};

export default OrderSummary;
