import "@mui/material/styles";
import "@mui/x-data-grid/themeAugmentation";

// 👇 Extends MUI theme interfaces to recognize our custom structure
declare module "@mui/material/styles" {
  interface Theme {
    cssVariables?: boolean;
  }
  interface ThemeOptions {
    cssVariables?: boolean;
  }
}
