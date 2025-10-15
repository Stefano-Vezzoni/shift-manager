export const MuiToggleButton = {
  styleOverrides: {
    root: {
      textTransform: "capitalize",
      borderRadius: "8px",
      padding: "8px 16px",
      minWidth: "120px",
      color: "#cbd5e1",
      opacity: 0.7,
      borderColor: "#64748b",
      "&:hover": {
        backgroundColor: "rgba(25, 118, 210, 0.08)",
        borderColor: "#94a3b8",
        opacity: 1,
      },
      "&.Mui-selected": {
        opacity: 1,
        backgroundColor: "#1976d2",
        color: "#fff",
        borderColor: "#1976d2",
        "&:hover": {
          backgroundColor: "#1565c0",
        },
      },
    },
  },
} as const;

export const MuiToggleButtonGroup = {
  styleOverrides: {
    root: {
      gap: "8px",
    },
    grouped: {
      margin: 0,
      border: "1px solid",
      borderColor: "#64748b",
      "&:not(:first-of-type)": {
        borderRadius: "8px",
        borderLeft: "1px solid #64748b",
        marginLeft: 0,
      },
      "&:first-of-type": {
        borderRadius: "8px",
      },
    },
  },
} as const;
