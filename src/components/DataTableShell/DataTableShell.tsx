import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { TDoctorData } from "@/app/doctors/MockDoctorsData";

interface IDataTableShell {
  columns: GridColDef<TDoctorData>[];
  rows: TDoctorData[];
}

export default function DataTableShell({ columns, rows }: IDataTableShell) {
  return (
    <Box>
      <DataGrid rows={rows} columns={columns} disableColumnMenu />
    </Box>
  );
}
