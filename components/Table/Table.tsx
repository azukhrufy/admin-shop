import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

interface TableProps {
  columns: GridColDef[];
  rows: any;
  pageSize? : number;
}

const Table = ({ rows, columns, pageSize }: TableProps) => {
  return (
    <div className={`deall-table`}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize ? pageSize : 5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Table;
