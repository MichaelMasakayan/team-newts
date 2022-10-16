import React, {useState, useEffect} from "react";
import { DataGrid,GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import data from "./mock-data.json"
import axios from "axios";

const DataTable = () => {
    const [columns, setColumns] = useState([])
      
    const [rows, setRows] = useState([])

    const getTableData = async () => {
        axios.get('http://localhost:5000/testJson')
        .then(function (response) {
          // handle success
          setColumns([
            { field: 'id', headerName: 'ID', width: 90 },
            {
              field: 'Item',
              headerName: 'Item',
              width: 150,
              editable: true,
            },
            {
              field: 'Quantity',
              headerName: 'Quantity',
              width: 150,
              editable: true,
            },
            {
              field: 'Price',
              headerName: 'Price',
              type: 'number',
              width: 110,
              editable: true,
            }
          ]);
    
          setRows(response.data.products.map((data, index)=> (
            {id: index, Item: data.name, Quantity: data.quantity, Price: data.price}
            )))
        })
          .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

    // const setRowsColumns = async () => {
    //   setColumns([
    //     { field: 'id', headerName: 'ID', width: 90 },
    //     {
    //       field: 'Item',
    //       headerName: 'Item',
    //       width: 150,
    //       editable: true,
    //     },
    //     {
    //       field: 'Quantity',
    //       headerName: 'Quantity',
    //       width: 150,
    //       editable: true,
    //     },
    //     {
    //       field: 'Price',
    //       headerName: 'Price',
    //       type: 'number',
    //       width: 110,
    //       editable: true,
    //     }
    //   ]);

    //   setRows(tableData.products.map((data, index)=> (
    //     {id: index, Item: data.name, Quantity: data.quantity, Price: data.price}
    //     )))
    // }

    useEffect(() => {
        getTableData()
    }, []);

  return (
    <div>
        <h1>Hello</h1>
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    </div>
  )

}

export default DataTable;