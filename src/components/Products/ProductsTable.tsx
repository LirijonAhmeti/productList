import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { Product } from "../../api/products/products";

interface Props {
  data: Product[];
}

export const ProductsTable = (props: Props) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    {
      field: "price",
      headerName: "Price",
    },
    {
      field: "stock",
      headerName: "Stock",
    },
  ];

  const rows = props.data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    price: item.price,
    stock: item.stock,
  }));

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={15}
      rowsPerPageOptions={[15]}
    />
  );
};
