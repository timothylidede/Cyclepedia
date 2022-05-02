import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import redharley from "../assets/redmoto.jpeg"
import {Add, Remove} from "@mui/icons-material";

const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;
`

const Title = styled.h1`
font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props)=>props.type === "filled" && "none"};
  background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
  color: ${(props)=>props.type === "filled" && "white"};

`

const TopTexts = styled.div``

const TopText = styled.span`
text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
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

const Image = styled.img`
width: 200px;
`

const Details = styled.div`
padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``
const ProductId = styled.span``
const ProductBrand = styled.span`
width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`

const ProductType = styled.span``
const PriceDetail = styled.div`
flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ProductAmountContainer = styled.div`
display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
font-size: 24px;
  margin: 5px;
`

const ProductPrice = styled.div`
font-size: 30px;
  font-weight: 200;
`

const Summary = styled.div`
flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === "total" && "500"};
  font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`






const Cart = () => {
    let motorcycle;
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (4)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src= {redharley} />
                                <Details>
                                    <ProductName><b>Product:</b> HARLEY-DAVIDSON VINTAGE BIKE</ProductName>
                                    <ProductId><b>ID:</b> 123456789876</ProductId>
                                    <ProductBrand color="red"/>
                                    <ProductType><b>Type:</b> Vintage Bike</ProductType>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>

                                <ProductPrice>Ksh 800,000</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <hr/>
                        <Product>
                            <ProductDetail>
                                <Image src= {redharley} />
                                <Details>
                                    <ProductName><b>Product:</b> HARLEY-DAVIDSON VINTAGE BIKE</ProductName>
                                    <ProductId><b>ID:</b> 123456789876</ProductId>
                                    <ProductBrand color="red"/>
                                    <ProductType><b>Type:</b> Vintage Bike</ProductType>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>

                                <ProductPrice>Ksh 800,000</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <hr/>
                        <Product>
                            <ProductDetail>
                                <Image src= {redharley} />
                                <Details>
                                    <ProductName><b>Product:</b> HARLEY-DAVIDSON VINTAGE BIKE</ProductName>
                                    <ProductId><b>ID:</b> 123456789876</ProductId>
                                    <ProductBrand color="red"/>
                                    <ProductType><b>Type:</b> Vintage Bike</ProductType>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>

                                <ProductPrice>Ksh 800,000</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <hr/>
                        <Product>
                            <ProductDetail>
                                <Image src= {redharley} />
                                <Details>
                                    <ProductName><b>Product:</b> HARLEY-DAVIDSON VINTAGE BIKE</ProductName>
                                    <ProductId><b>ID:</b> 123456789876</ProductId>
                                    <ProductBrand color="red"/>
                                    <ProductType><b>Type:</b> Vintage Bike</ProductType>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>

                                <ProductPrice>Ksh 800,000</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>

                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>Ksh 3,200,000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Delivery Fee</SummaryItemText>
                            <SummaryItemPrice>Ksh 500,000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Delivery Discount</SummaryItemText>
                            <SummaryItemPrice>Ksh 100,000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>Ksh 3,600,000</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryButton>CHECKOUT NOW</SummaryButton>

                    </Summary>

                </Bottom>
            </Wrapper>
            <Footer/>

        </Container>
    );
}

export default Cart;