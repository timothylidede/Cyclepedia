import React from "react";
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
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  color: black;
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
`;

const Navbar = () => {
  let navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

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
          <Logo><Link to="/">CYCLEPEDIA.</Link></Logo>
        </Center>
        <Right>
          {localStorage.getItem("authToken") ? (
            <MenuItem>
              <Welcome>Welcome Caren</Welcome>
              <NavLink to="#" onClick={logoutHandler}>
                SIGN OUT
              </NavLink>
            </MenuItem>
          ) : (
            <MenuItem>
              <NavLink to="/login">SIGN IN</NavLink>
            </MenuItem>
          )}
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
