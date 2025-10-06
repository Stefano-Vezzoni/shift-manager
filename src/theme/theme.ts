"use client";
import { createTheme } from "@mui/material/styles";

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
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.3)",
  },
});

export default theme;
