import React, {useState} from "react";
import "./ProductsStyles.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
export default function ProductIndex() {
  const [data, setData] = useState(productRows);
  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListProduct">
            <img className="productListImage" src={params.row.avatar} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "quantity", headerName: "Quantity", type: "number", width: 200 },
    {
      field: "price",
      headerName: "Price",
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
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
