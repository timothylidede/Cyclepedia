import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

const Container = styled.div``

const OuterWrapper = styled.div`
        margin-top: 20px;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
`

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
`

const Title = styled.h1`
      font-weight: 300;
      text-align: center;
      margin-left:  300px;
`

const Subtitle = styled.div`
      margin-top: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
`

const Bottom = styled.div`
      display: flex;
      justify-content: space-between;
`

const Info = styled.div`
      flex: 3;
`

const Product = styled.div`
      display: flex;
      justify-content: space-between;
`

const ProductDetail = styled.div`
      flex: 2;
      display: flex;
`

const Details = styled.div`
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
`

const ProductName = styled.span``
const ProductId = styled.span``
const ProductType = styled.span``
const Quantity = styled.span``
const Unit = styled.span``
const ProductPrice = styled.span``

const SummaryItem = styled.div`
      display: flex;
      justify-content: space-between;
`

const SummaryItemText = styled.div`
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
`

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
        background-color:black;
      }
`

const OrderSummary = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <OuterWrapper>
                <Wrapper>
                    <Title>ORDER SUMMARY</Title>
                    <Subtitle>Cart Items</Subtitle>
                    <Bottom>
                        <Info>
                            <Product>
                                <ProductDetail>
                                    <Details>
                                        <ProductName><b>Product name:</b> HARLEY-DAVIDSON VINTAGE BIKE</ProductName>
                                        <ProductId><b>Product ID:</b> 123456789876</ProductId>
                                        <ProductType><b>Type:</b> Vintage Bike</ProductType>
                                        <Quantity><b>Quantity:</b> 4</Quantity>
                                        <ProductPrice><b>Price:</b> Ksh 800,000 <Unit>per unit</Unit> </ProductPrice>
                                    </Details>
                                </ProductDetail>
                            </Product>
                            <Product>
                                <ProductDetail>
                                    <Details>
                                        <ProductName><b>Product name:</b> HONDA BIKE</ProductName>
                                        <ProductId><b>Product ID:</b> 123456767I3496</ProductId>
                                        <ProductType><b>Type:</b> Sports Bike</ProductType>
                                        <Quantity><b>Quantity:</b> 1</Quantity>
                                        <ProductPrice><b>Price:</b> Ksh 500,000 <Unit>per unit</Unit> </ProductPrice>
                                    </Details>
                                </ProductDetail>
                            </Product>
                            <Subtitle>Payment Summary</Subtitle>
                            <SummaryItem type="total">
                                <SummaryItemText><b>Total:</b>Ksh 1,300,000 </SummaryItemText>
                            </SummaryItem>
                            <SummaryButton>PAY NOW</SummaryButton>
                        </Info>
                    </Bottom>
                </Wrapper>
                <Footer/>
            </OuterWrapper>
        </Container>
    );
}

export default OrderSummary;