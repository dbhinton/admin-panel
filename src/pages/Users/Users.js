import React, {useState} from "react";
import "./UserStyles.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
export default function Users() {
    const [data, setData] = useState(userRows)

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImage" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "numberOfOrders",
      headerName: "# Of Orders",
      type: "number",
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160, 
      renderCell: (params) => {
        return(
          <>
          <Link to={`/user/${params.rows.id}`}>
            <button>Edit</button>
          </Link>
          <DeleteOutline className="userListDelete"/>
          </>
          
        )

      }

    }
  ];

  return (
    <div className="users">
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
