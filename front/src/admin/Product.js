import React from "react";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';


const columns = [
  { field: "product_id", headerName: "ID", width: 70 },
  { field: "product_title", headerName: "Title", width: 200 },
  { field: "cat_title", headerName: "Category" },
  {
    field: "brand_title",
    headerName: "Brand",
    type: "number",
    width: 90,
  },
  { field: "product_price", headerName: "Price" },
  {
    field: "qty",
    headerName: "Quantity",
    renderCell: (params) => (
      <div dangerouslySetInnerHTML={{ __html: params.row.qty }}></div>
    ),
  },
  {
    field: "featured_image",
    headerName: "Image",
    renderCell: (params) => (
      <div
        dangerouslySetInnerHTML={{ __html: params.row.featured_image }}
      ></div>
    ),
  },
  {
    field: "product_status",
    headerName: "Status",
    renderCell: (params) => (
      <div
        dangerouslySetInnerHTML={{ __html: params.row.product_status }}
      ></div>
    ),
  },
  {
    field: "action",
    headerName: "Action",
    renderCell: (params) => (
      <div>
        <UpdateIcon style={{ color: `#1976d2`, cursor: `pointer` }} />
        <DeleteForeverIcon style={{ color: `red`, cursor: `pointer` }} />
      </div>
    ),
  },
  // { field: "totalPrice", headerName: "Total Price" }, // Custom field
];

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  let token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }) // Replace with your actual API URL
      .then((response) => {
        // if (!response.ok) {
        //   throw an Error("Network response was not ok");
        // }
        return response.json();
      })
      .then((data) => {
        setProducts(
          data.map((product) => ({
            ...product,
            qty:
              product.qty === 0
                ? `<span class="badge" style="background-color: red">Empty</span>`
                : product.qty,
            product_status: product.product_status
              ? `<span class="badge" style="background-color: green">Active</span>`
              : `<span class="badge" style="background-color: red">Inactive</span>`,
            featured_image: product.featured_image
              ? `<img src="http://localhost:3000/product-images/${product.featured_image}">`
              : ``,
          }))
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  console.log(products);

  return (
    <Typography style={{ height: 400, width: "100%" }}>
      <div style={{ height: 400 }}>
        {loading ? (
          // Render a loading indicator while data is being fetched
          <>
            {/* <Skeleton
              sx={{ bgcolor: 'lightgrey' }}
              variant="rectangular"
              width={`100%`}
              height={`100vh`}
            /> */}
            <Box sx={{ display: 'flex' , justifyContent: `center` , alignItems: `center` }}>
              <CircularProgress />
            </Box>
          </>

        ) : (
          <DataGrid
            rows={products}
            getRowId={(row: any) => row.product_id}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        )}
      </div>
    </Typography>
  );
}
