import { useQuery } from "react-query";
import { Box, CircularProgress } from "@mui/material";

import { getAllUsers } from "../api/users/users.client";

import { UsersTable } from "../components/Users/UsersTable";
import { ErrorMessage } from "../components/shared/ErrorMessage";

export const Users = () => {
  const { data, isLoading, isError } = useQuery("users", getAllUsers);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box component="h1" sx={{ mb: "16px" }}>
        Users
      </Box>

      {isLoading && <CircularProgress />}

      {isError && (
        <ErrorMessage message="The request to retrieve users failed, please try again!" />
      )}

      {data && <UsersTable data={data.data.users} />}
    </Box>
  );
};
