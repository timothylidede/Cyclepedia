import React from 'react'
import { AdminSideBarStyle, SideBarLink, Button } from './admin.styles'
import logo from '../../assets/logo.png';

import { HomeOutlined, WorkspacesOutlined, GroupOutlined , ShoppingBasketOutlined, PaymentsOutlined, ExitToAppOutlined} from "@mui/icons-material";
import { Link, useLocation } from 'react-router-dom';

export default function SideBar() {

    let location = useLocation();
  return (
    <AdminSideBarStyle>
        <div className="logo_div">
        <img src={logo} alt="Logo" />
        </div>

        <SideBarLink href="/admin" className={ location.pathname === '/admin' ? "active" : ""}>
            <HomeOutlined />
            <p>Home</p>
        </SideBarLink>

        <SideBarLink href="/admin/products" className={ location.pathname === '/admin/products' ? "active" : ""}>
            <WorkspacesOutlined />
            <p>Products</p>
        </SideBarLink>

        <SideBarLink href="/admin/users" className={ location.pathname === '/admin/users' ? "active" : ""}>
            <GroupOutlined />
            <p>Users</p>
        </SideBarLink>

        <SideBarLink href="/admin/orders" className={ location.pathname === '/admin/orders' ? "active" : ""}>
            <ShoppingBasketOutlined />
            <p>Orders</p>
        </SideBarLink>

        <SideBarLink href="/admin/payments" className={ location.pathname === '/admin/payments' ? "active" : ""}>
            <PaymentsOutlined />
            <p>Payments</p>
        </SideBarLink>

        <a href="/" className="button_div">
            <Button>
                <ExitToAppOutlined />Logout
            </Button>
        </a>

    </AdminSideBarStyle>
  )
}
