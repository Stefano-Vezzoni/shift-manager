export const MuiDataGrid = {
  styleOverrides: {
    root: {
      border: "1px solid #64748b",
      borderRadius: 8,
      background: "#151C25",

      "& .MuiDataGrid-columnHeader": {
        backgroundColor: "#151C25",
      },
      "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
        outline: "none",
      },
      "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within": {
        outline: "none",
      },
      "& .MuiDataGrid-cell": {
        borderColor: "#64748b",
      },
      "& .MuiDataGrid-footerContainer": {
        borderTop: "1px solid #64748b",
      },
      "& .MuiDataGrid-columnHeaders::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "1px",
        backgroundColor: "#64748b",
      },
      "& .MuiDataGrid-columnHeaderTitleContainer": {
        justifyContent: "space-between",
      },
    },
  },
};
