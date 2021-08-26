import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Wheel from './wheel.png'

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'Score',
    headerName: 'Score',
    width: 150,
    editable: true,
  },
  {
    field: 'Rank',
    headerName: 'Rank',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'Rank',
    headerName: 'Rank',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, Name: 'Snow', Score: '105', Rank: 35 },
  { id: 2, Name: 'Lannister', Score: '150', Rank: 42 },
  { id: 3, Name: 'Lannister', Score: '115', Rank: 45 },
  { id: 4, Name: 'Stark', Score: '235', Rank: 16 },
  { id: 5, Name: 'Targaryen', Score: null, Rank: null },
  { id: 6, Name: 'Melisandre', Score: null, Rank: 150 },
  { id: 7, Name: 'Clifford', Score: '215', Rank: 44 },
  { id: 8, Name: 'Frances', Score: '107', Rank: 36 },
  { id: 9, Name: 'Roxie', Score: '70', Rank: 65 },
  { id: 1, Name: 'Snow', Score: '105', Rank: 35 },
  { id: 2, Name: 'Lannister', Score: '150', Rank: 42 },
  { id: 3, Name: 'Lannister', Score: '115', Rank: 45 },
  { id: 4, Name: 'Stark', Score: '235', Rank: 16 },
  { id: 5, Name: 'Targaryen', Score: null, Rank: null },
  { id: 6, Name: 'Melisandre', Score: null, Rank: 150 },
  { id: 7, Name: 'Clifford', Score: '215', Rank: 44 },
  { id: 8, Name: 'Frances', Score: '107', Rank: 36 },
  { id: 9, Name: 'Roxie', Score: '70', Rank: 65 },
  { id: 1, Name: 'Snow', Score: '105', Rank: 35 },
  { id: 2, Name: 'Lannister', Score: '150', Rank: 42 },
  { id: 3, Name: 'Lannister', Score: '115', Rank: 45 },
  { id: 4, Name: 'Stark', Score: '235', Rank: 16 },
  { id: 5, Name: 'Targaryen', Score: null, Rank: null },
  { id: 6, Name: 'Melisandre', Score: null, Rank: 150 },
  { id: 7, Name: 'Clifford', Score: '215', Rank: 44 },
  { id: 8, Name: 'Frances', Score: '107', Rank: 36 },
  { id: 9, Name: 'Roxie', Score: '70', Rank: 65 },
];

export default function DataTable() {
  return (
      <>
        <div style={{ height: 500, width: '100%',marginTop:'30px' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            checkboxSelection
            disableSelectionOnClick
        />
        </div>
        <div className="wheel align-content-center d-flex justify-content-center">
            <img src={Wheel} alt="wheel" />
        </div>
        <div className="align-content-center d-flex justify-content-center mt-5">
            <a href className="spin">Spin</a>
        </div>
    </>
  );
}
