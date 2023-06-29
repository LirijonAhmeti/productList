import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { getAllProducts } from "../api/products/products.client";
import { ProductsTable } from "../components/Products/ProductsTable";
import { ErrorMessage } from "../components/shared/ErrorMessage";

export const Products = () => {
  const { data, isLoading, isError } = useQuery("products", getAllProducts);
  console.log(data);
  console.log(data?.data.products);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box component="h1" sx={{ mb: "16px" }}>
        Products
      </Box>

      {isLoading && <CircularProgress />}

      {isError && (
        <ErrorMessage message="The request to retrieve products failed, please try again!" />
      )}

      {data && <ProductsTable data={data.data.products} />}
    </Box>
  );
};
