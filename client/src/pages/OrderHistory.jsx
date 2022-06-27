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
  margin-left: 10px;
`;

const Field = styled.p`
  font-weight: 600;
`;

const OrderDetails = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 20px;
  width: "100%";
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Order = styled.div`
  display: flex;
`;

const Detail = styled.div`
  margin: 20px;
  flex-direction: column;
  justify-content: space-around;
`;

export default function OrderHistory() {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    async function getOrderHistory() {
      axios
        .get(`http://localhost:5000/api/user/orderhistory`, {
          headers: {
            Authorization: "Bearer " + localStorage.authToken,
          },
        })
        .then((res) => {
          if (res.data.error) {
            alert(res.data.error);
          } else {
            setOrderDetails(res.data.orderhistory);
          }
        });
    }
    getOrderHistory();
  }, []);

  return (
    <div>
      <Container>
        <Navbar />
        <Announcement />
        <OuterWrapper>
          <Title>ORDER HISTORY</Title>

          {orderDetails &&
            orderDetails.map((order) => (
              <OrderDetails>
                <Order>
                  <Detail>
                    <Field>Order Id : {order._id}</Field>
                  </Detail>
                  <Detail>
                    <Field>Order Total : {order.total}</Field>
                  </Detail>
                  <Detail>
                    <Field>Order Time and Date : {order.createdAt}</Field>
                  </Detail>
                </Order>

                <Detail>
                  <Field>Products:</Field>
                </Detail>

                {order.products.map((product) => (
                  <Order>
                    <Detail>Product Id : {product._id}</Detail>
                    <Detail> Product Name: {product.product_name}</Detail>
                    <Detail> Unit Price: {product.price}</Detail>
                    <Detail> Quantity: {product.quantity}</Detail>
                  </Order>
                ))}
              </OrderDetails>
            ))}
        </OuterWrapper>
        <Footer />
      </Container>
    </div>
  );
}
