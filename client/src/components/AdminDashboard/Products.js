import React, { useState } from "react";
import DataTable from "./DataTable";
import { useAxiosGet } from "./Hooks/axioshooks";
import { productsCols } from "./common/appData";

export default function Products() {
  const { data, error, loaded } = useAxiosGet("/api/products/allproducts");

  if (loaded) {
    if (error) {
      return <div>{error}</div>;
    } else {
      return <DataTable datarows={data} datacols={productsCols} />;
    }
  }
  return <div>Loading Products ...</div>;
}
