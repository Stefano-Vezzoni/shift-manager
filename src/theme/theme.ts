"use client";
import { createTheme } from "@mui/material/styles";
import type {} from "@mui/x-data-grid/themeAugmentation";

const BUTTON_HEIGHT = 40;

const sharedButtonStyles = {
  border: "1px solid",
  borderColor: "#64748b",
  background: "#151C25",
  borderRadius: 8,
  "&:hover": { backgroundColor: "#1D2634" },
};

const theme = createTheme({
  cssVariables: true,
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          ...sharedButtonStyles,
          height: BUTTON_HEIGHT,
          minWidth: BUTTON_HEIGHT,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ...sharedButtonStyles,
          height: BUTTON_HEIGHT,
          minWidth: BUTTON_HEIGHT,
          color: "inherit",
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "1px solid #64748b",
          borderRadius: 8,
          background: "#151C25",
          color: "inherit",

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

          "& .MuiTablePagination-selectLabel, & .MuiSelect-select, & .MuiSvgIcon-root, & .MuiTablePagination-actions button":
            {
              color: "inherit",
              "&.Mui-disabled": {
                color: "#64748b",
                opacity: 1,
              },
            },
        },
      },
    },
  },
  typography: {
    fontFamily: "var(--font-inter)",
    body1: {
      fontSize: "0.875rem",
      lineHeight: 1.43,
    },
    body2: {
      fontSize: "0.75rem",
      lineHeight: 1.5,
    },

    h1: {
      fontFamily: "var(--font-montserrat)",
      fontWeight: 700,
      fontSize: "2rem",
    },
    h2: {
      fontFamily: "var(--font-montserrat)",
      fontWeight: 600,
      fontSize: "1.6rem",
    },
    h3: {
      fontFamily: "var(--font-montserrat)",
      fontWeight: 600,
      fontSize: "1.4rem",
    },
    h4: {
      fontFamily: "var(--font-montserrat)",
      fontWeight: 500,
      fontSize: "1.2rem",
    },
    h5: {
      fontFamily: "var(--font-montserrat)",
      fontWeight: 500,
      lineHeight: 1.5,
      fontSize: "1rem",
    },
    h6: {
      fontFamily: "var(--font-montserrat)",
      fontSize: "0.875rem",
      lineHeight: 1.43,
      fontWeight: 500,
    },
  },
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
    background: { default: "#131821", paper: "#131821" },
    text: {
      primary: "#cbd5e1",
      secondary: "#94a3b8",
      disabled: "#64748b",
    },
    divider: "rgba(255, 255, 255, 0.3)",
  },
});

export default theme;
