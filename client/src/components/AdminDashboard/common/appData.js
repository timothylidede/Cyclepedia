

export const userCols = [
    { headerName: "Customer ID", field: "_id", width: 180 }, 
    { headerName: "Full Name", field: "fullname", width: 160 },
    { headerName: "Email", field: "email", width: 160 }, 
    { headerName: "Contact", field: "phonenumber", width: 160 }, 
    { headerName: "Date Created", field: "createdAt", width: 200 }
  ];

  export const productsCols = [
    { headerName: "Payment ID", field: "_id", width: 180 },
    { headerName: "Name", field: "product_name", width: 140 }, 
    { headerName: "Price", field: "price", width: 120 }, 
    { headerName: "Category", field: "category", width: 140 }, 
    { headerName: "Description", field: "description", width: 200 },
    { headerName: "Seller ID", field: "seller", width: 160 }, 
    { headerName: "Created At", field: "createdAt", width: 160 }, 
    { headerName: "Updated At", field: "updatedAt", width: 160 }, 
];

  export const ordersCols = [
    { headerName: "Order ID", field: "_id", width: 180 },
    { headerName: "Customer ID", field: "order_by", width: 180 }, 
    { headerName: "Total", field: "total", width: 120 }, 
    { headerName: "Created At", field: "createdAt", width: 180 }, 
    { headerName: "Updated At", field: "updatedAt", width: 160 }, 
    { headerName: "Products", 
      field: "products", width: 160, 
      valueFormatter: (params) => params.value.map(prod => prod.product_name)}, 
];

export const payCols = [
    { headerName: "Payment ID", field: "_id", width: 180 },
    { headerName: "Mode of Payment", field: "payment_type", width: 160 }, 
    { headerName: "Amount", field: "amount", width: 140 }, 
    { headerName: "Created At", field: "createdAt", width: 160 }, 
    { headerName: "Customer ID", field: "account_id", width: 140 }, 
];