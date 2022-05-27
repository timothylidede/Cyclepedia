import React from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import motorcycle from "../assets/motorcycle.png"
import {Add, Remove} from "@mui/icons-material";

const Container = styled.div``

const Wrapper = styled.div`
      padding: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
`
const ImageContainer = styled.div`
      flex: 1;
`

const Image = styled.img``

const InfoContainer = styled.div`
      flex: 1;
      padding: 0 50px;
`

const Title = styled.h1`
      font-weight: 200;
`

const Desc = styled.p`
      margin: 20px 0px;
`

const Price = styled.span`
      font-weight: 100;
      font-size: 40px;
`

const AddContainer = styled.div`
      margin-top: 50px;
      display: flex;
      align-items: center;
      width: 50%;
      justify-content: space-between;
`

const AmountContainer = styled.div`
      display: flex;
      align-items: center;
      font-weight: 700;
`

const Amount = styled.div`
      width: 30px;
      height: 30px;
      border-radius: 10px;
      border: 1px solid teal;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0px 5px;
`

const Button = styled.span`
      padding: 15px;
      border: 2px solid teal;
      background-color: white;
      cursor: pointer;
      font-weight: 500;
  
      &:hover{
        background-color: #f8f4f4;
      }
`

const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src={motorcycle}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Red and Black HONDA Motorcycle</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor illum laborum magnam officia quasi sed, voluptates. Aperiam aut dicta, dolorum explicabo itaque nam provident quae qui, quod sint voluptates!</Desc>
                    <Price>Ksh 750,000</Price>

                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
}

export default Product;