import "@mui/material/styles";
import "@mui/x-data-grid/themeAugmentation";

declare module "@mui/material/styles" {
  interface Theme {
    cssVariables?: boolean;
  }
  interface ThemeOptions {
    cssVariables?: boolean;
  }
}
