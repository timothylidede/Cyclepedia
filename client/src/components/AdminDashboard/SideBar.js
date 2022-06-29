import React from 'react'
import { AdminSideBarStyle, SideBarLink, Button } from './admin.styles'
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";

import { HomeOutlined, WorkspacesOutlined, GroupOutlined , ShoppingBasketOutlined, PaymentsOutlined, ExitToAppOutlined} from "@mui/icons-material";
import { Link, useLocation } from 'react-router-dom';

export default function SideBar() {
    let navigate = useNavigate();

    let location = useLocation();
    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
      };
  return (
    <AdminSideBarStyle>
        <div className="logo_div">
        <img src={logo} alt="Logo" />
        </div>

        <SideBarLink href="/admin" className={ location.pathname === '/admin' ? "active" : ""}>
            <HomeOutlined />
            <p style={{ marginLeft: "8px" }}>Home</p>
        </SideBarLink>

        <SideBarLink href="/admin/products" className={ location.pathname === '/admin/products' ? "active" : ""}>
            <WorkspacesOutlined />
            <p style={{ marginLeft: "8px" }}>Products</p>
        </SideBarLink>

        <SideBarLink href="/admin/users" className={ location.pathname === '/admin/users' ? "active" : ""}>
            <GroupOutlined />
            <p style={{ marginLeft: "8px" }}>Users</p>
        </SideBarLink>

        <SideBarLink href="/admin/orders" className={ location.pathname === '/admin/orders' ? "active" : ""}>
            <ShoppingBasketOutlined />
            <p style={{ marginLeft: "8px" }}>Orders</p>
        </SideBarLink>

        <SideBarLink href="/admin/payments" className={ location.pathname === '/admin/payments' ? "active" : ""}>
            <PaymentsOutlined />
            <p style={{ marginLeft: "8px" }}>Payments</p>
        </SideBarLink>

        <div className="button_div">
            <Button onClick={logoutHandler}>
                <ExitToAppOutlined />Logout
            </Button>
        </div>

    </AdminSideBarStyle>
  )
}
