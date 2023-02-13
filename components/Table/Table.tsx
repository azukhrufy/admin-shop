import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

interface TableProps {
  columns: GridColDef[];
  rows: any;
}

const Table = ({ rows, columns }: TableProps) => {
  return (
    <div className={`deall-table`}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Table;
