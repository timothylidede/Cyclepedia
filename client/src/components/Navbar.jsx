import React, {useState, useEffect } from "react";
import axios from "axios"
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const NavLink = styled(Link)`
  margin: 5px 0;
  font-size: 1 rem;
  text-decoration: none;
  cursor: pointer;
  color: black;
  font-family: "Roboto Thin", sans-serif;
`;

const Links = styled(Link)`
  margin: 5px 0;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  color: teal;
  font-family: "Roboto Thin", sans-serif;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Welcome = styled.div`
  color: #fd7b48;
  font-size: 18px;
  font-weight: 600;
  display: inline;
  margin: 0 2rem 0 0;
`;

const Navbar = () => {
  let navigate = useNavigate();

  const [cartCount, setCartCount] = useState();
  const[ username, setUsername]= useState();

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
            let count = res.data.cart;
            setCartCount(count.length);
            console.log(count.length);
            console.log(res.data.name);
            setUsername(res.data.name);
          }
        });
    }
    getcartItems();
  }, []);


  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  let cart;
  if(cartCount == undefined){
    cart = <Badge badgeContent={cartCount} color="primary"> <ShoppingCartOutlined color="action" /></Badge>
  }else{
    cart = <ShoppingCartOutlined color="action" />
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo><NavLink to="/">CYCLEPEDIA.</NavLink></Logo>
        </Center>
        <Right>
          {localStorage.getItem("authToken") ? (
            <MenuItem>
              <Welcome>Welcome {username}</Welcome>
              <Links to="#" onClick={logoutHandler}>
                SIGN OUT
              </Links>
            </MenuItem>
          ) : (
            <MenuItem>
              <Links to="/login">SIGN IN</Links>
            </MenuItem>
          )}
          <MenuItem>
            <Link to="/cart">
              {cart}
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
