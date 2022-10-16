import React, {useState, useEffect} from "react";
import { DataGrid,GridRowsProp, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import data from "./mock-data.json"
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import axios from "axios";

const DataTable = (props) => {

    const [columns, setColumns] = useState([])
    const [rows, setRows] = useState([])
    const [id, setId] = useState(0)
    const [people, setPeople] = useState([])
    const [name, setName] = useState("")

    const deleteUser = React.useCallback(
      (id) => () => {
        setTimeout(() => {
          setRows((prevRows) => prevRows.filter((row) => row.id !== id));
        });
      },
      [],
    );

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
              width: 110,
              editable: true,
            },
            {
              field: 'Price',
              headerName: 'Price',
              type: 'number',
              width: 110,
              editable: true,
            },
            {
              field: 'actions',
              type: 'actions',
              width: 80,
              getActions: (params) => [
                <GridActionsCellItem
                  icon={<DeleteIcon />}
                  label="Delete"
                  onClick={deleteUser(params.id)}
                />
              ]
            },
          ]);
    
          setRows(response.data.products.map((data, index)=> (
            {id: index+1, Item: data.name, Quantity: data.quantity, Price: data.price, delete: index}
            )))
          
          setId(response.data.products.length+1)
        })
          .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

    useEffect(() => {
        getTableData()
    }, []);

    const mapPeopleIntoJSX = () => {
        console.log(people)
        return people.map((person, index) => {
            return (
                <ListItemButton component="a">
                  <ListItemText primary={person.name} />
                  {(index==people.length)?<div></div>:<Divider orientation="vertical" flexItem />}
                  <ListItemText primary={person.count} style={{paddingLeft: 10}}/>
                </ListItemButton>
            )
        })
    }
  
  return (
    <div>
        <h1>Reciept Grid</h1>
        <Grid container spacing={2}>
          <Box sx={{ height:500, width: '40%' }} style={{ paddingRight: 20, paddingLeft: 20, backgroundColor: "white" }}>
            <Button
              onClick={() => {
                setRows(rows.concat({ id: id, Item: 'New Item', Quantity: 0, Price: 0, delete: id }));
                setId(id+1)
              }}
              >New Item <AddIcon/>
            </Button>
            <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={100}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                  disableSelectionOnClick
                  experimentalFeatures={{ newEditingApi: true }}
              />
          </Box>
          <Box sx={{ height:300, width: '40%' }} style={{ paddingTop: 0, backgroundColor: "white" }}>
            <TextField 
              sx={{ height: 30, width: 200 }} 
              // id="outlined-basic" 
              // label="Outlined" 
              // variant="outlined" 
              onChange={(event) => setName(event.target.value)} 
              label="Add Person"
              id="outlined-size-small"
              size="small"/>
            <Button
              style={{width: 30, padding: 10, paddingLeft: 10}}
              onClick={() => {
                setPeople(people.concat({ name: name, count: 0 }));
              }}
              ><AddIcon/>
            </Button>
            <Card sx={{ maxWidth: 200 }}>
              {mapPeopleIntoJSX()}
            </Card>
          </Box>
        </Grid>
    </div>
  )

}

export default DataTable;