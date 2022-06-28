import logo from "./logo.svg";
import "./App.css";
import PrivateRoute from "./components/routing/PrivateRoute";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import ProductCategory from "./pages/ProductCategory";

import AdminHome from "./components/AdminDashboard/AdminHome";
import Users from "./components/AdminDashboard/Users";
import Products from "./components/AdminDashboard/Products";
import Payments from "./components/AdminDashboard/Payments";
import Orders from "./components/AdminDashboard/Orders";

import CheckoutCard from "./pages/CheckoutCard";
import CheckoutMpesa from "./pages/CheckoutMpesa";
import OrderSummary from "./pages/OrderSummary";
import RegisterSeller from "./pages/Authentication/RegisterSeller";
import OrderHistory from "./pages/OrderHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use PrivateRoute for routes to pages you want accessed only by logged in users */}
        {/* <Route exact path="/something" element={ <PrivateRoute/> } >
          <Route exact path='/something' element={ <Cart/> } />
        </Route> */}
        {/* How private route should look */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="history" element={<OrderHistory />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="products" element={<ProductList />} />
        <Route
          path="products/category/:category"
          element={<ProductCategory />}
        />
        <Route path="/admin" element={<PrivateRoute/>}>
          <Route path="/admin" element={<AdminHome />} />
        </Route>
        <Route path="/admin/products" element={<PrivateRoute />}>
        <Route
          path="/admin/products"
          element={<AdminHome content={<Products />} />}
        />
        </Route>
        <Route path="/admin/users" element={<PrivateRoute/>}>
          <Route path="/admin/users" element={<AdminHome content={<Users />} />} />
        </Route>
        <Route path="/admin/orders" element={<PrivateRoute/>}>
        <Route
          path="/admin/orders"
          element={<AdminHome content={<Orders />} />}
        />
        </Route>
        <Route path="/admin/payments" element={<PrivateRoute/>}>
          <Route
            path="/admin/payments"
            element={<AdminHome content={<Payments />} />}
          />
        </Route>

        <Route path="registerseller" element={<RegisterSeller />} />

        <Route exact path="/checkout-card" element={ <PrivateRoute/> } >
        <Route exact path="/checkout-card" element={<CheckoutCard />} />
        </Route>
        <Route exact path="/checkout-mpesa" element={ <PrivateRoute/> } >
        <Route exact path="/checkout-mpesa" element={<CheckoutMpesa />} />
        </Route>
        <Route path="ordersummary" element={<OrderSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
