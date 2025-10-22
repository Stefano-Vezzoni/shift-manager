export const MuiSelect = {
  styleOverrides: {
    root: {
      "& .MuiSelect-select": {
        caretColor: "#cbd5e1",
      },
      "&.MuiInput-underline:before": {
        borderBottomColor: "#64748b",
      },
      "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottomColor: "#94a3b8",
      },
      "&.MuiInput-underline:after": {
        borderBottomColor: "#1976d2",
      },
    },
    icon: {
      color: "#94a3b8",
    },
  },
} as const;
