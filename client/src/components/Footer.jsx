import styled from "styled-components";
import {Facebook, Instagram, MailOutline, PaymentsTwoTone, Phone, Pinterest, Room, Twitter} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    width: 100%;
`
const Left = styled.div`
    flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
margin: 20px 0px;
`

const SocialContainer = styled.div`
display: flex`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
  
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const FooterLink = styled(Link)`
    //font-weight: normal;
    color: black;
    font-size: 1rem;
`
const Right = styled.div`
    flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <FooterLink to="/"><Logo>CYCLEPEDIA.</Logo></FooterLink>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut autem commodi debitis doloremque eum, ex, in iure iusto laudantium minima necessitatibus porro quasi qui tenetur ut, veniam vero voluptas!</Desc>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="e60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem><FooterLink to="/">Home</FooterLink></ListItem>
                    <ListItem><FooterLink to="/cart">Cart</FooterLink></ListItem>
                    <ListItem>Vintage Motorcycles</ListItem>
                    <ListItem>MotorSport</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Sell on Cyclepedia</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/>622 Ole Sangale, Madaraka Estate 90087</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>+254 YOU WILDIN'</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/>cyclepedia.help@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>

            </Right>

        </Container>
    );
}

export default Footer;