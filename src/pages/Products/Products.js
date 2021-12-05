import React from 'react'
import './ProductsStyles.css'
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
export default function ProductIndex() {
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
    )
}
