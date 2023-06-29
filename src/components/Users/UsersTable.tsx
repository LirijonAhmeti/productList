import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

import { User } from "../../api/users/users";

interface Props {
  data: User[];
}

export const UsersTable = (props: Props) => {
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone" },
  ];

  const rows = props.data.map((item) => ({
    id: item.id,
    name: `${item.firstName} ${item.lastName}`,
    email: item.email,
    phone: item.phone,
  }));

  const handleDoubleClick: GridEventListener<"rowDoubleClick"> = (params) => {
    navigate({
      pathname: `/users/${params.row.id}`,
    });
  };

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={15}
      onRowDoubleClick={handleDoubleClick}
      rowsPerPageOptions={[15]}
    />
  );
};
