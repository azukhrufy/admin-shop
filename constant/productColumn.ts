import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
    { field: "id", headerName: "ID", hide: true },
    { field: "productName", headerName: "Product Name", flex: 2, minWidth: 100 },
    { field: "brand", headerName: "Brand", flex: 1, minWidth: 100 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      flex: 1,
      minWidth: 100
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      flex: 1,
      minWidth: 100
    },
    { field: "category", headerName: "Category", flex: 1, minWidth: 100 },
  ];

  export const prodColumns: GridColDef[] = [
    { field: "id", headerName: "ID", hide: true },
    { field: "productName", headerName: "Product Name", flex: 2, minWidth: 100 },
    { field: "quantity", headerName: "Quantity", flex: 1, minWidth: 100 },
    { field: "discount", headerName: "Discount", flex: 1, minWidth: 100 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      flex: 1,
      minWidth: 100
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      flex: 1,
      minWidth: 100
    },
    { field: "discountedPrice", headerName: "Discounted Price", flex: 1, minWidth: 100 },
  ];