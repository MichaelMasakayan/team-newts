import React, {useState, useEffect} from "react";
import { DataGrid,GridRowsProp, GridColDef } from '@mui/x-data-grid';
import data from "./mock-data.json"
import axios from "axios";
const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 600 }
]

const DataTable = () => {

  const [tableData, setTableData] = useState([])

  const [rows, setRows] = useState(tableData);
  const [deletedRows, setDeletedRows] = useState([]);

  // fetch("http://localhost:3001/3B3mkRf_64427721e998")

  const getHere = async => {
    const [data, setData] = useState([]); 
    await axios.get("http://localhost:3001/3B3mkRf_64427721e998").then((res) => {
      setData(res.data.data);
    })
  }
  useEffect(() => {
    getHere(); 
  }, []);

  console.log(tableData);

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={12}
        checkboxSelection
        onSelectionModelChange={({ selectionModel }) => {
          const rowIds = selectionModel.map(rowId => parseInt(String(rowId), 10));
          const rowsToDelete = tableData.filter(row => rowIds.includes(row.id));
          setDeletedRows(rowsToDelete);
          console.log(deletedRows);
        }}
      />
    </div>
  )
}

export default DataTable