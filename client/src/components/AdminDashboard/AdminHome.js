import React from "react";
import { AdminHomeStyle, ModuleSection } from "./admin.styles";
import { useAxiosGet } from "./Hooks/axioshooks";
import SideBar from "./SideBar";
import Users from "./Users";

export default function AdminHome({ content }) {
  return (
    <AdminHomeStyle>
      <SideBar />
      <ModuleSection>
        <div className="module_heading">
          <h2>Main Dashboard</h2>
          <p>Welcome, interact with your app analytics here </p>
        </div>
        <div className="module_container">{content}</div>
      </ModuleSection>
    </AdminHomeStyle>
  );
}
