"use client";
import { createTheme } from "@mui/material/styles";
import type {} from "@mui/x-data-grid/themeAugmentation";

import { palette } from "./palette";
import { typography } from "./typography";

import { MuiLink } from "./components/MuiLink";
import { MuiIconButton } from "./components/MuiIconButton";
import { MuiDataGrid } from "./components/MuiDataGrid";
import { MuiSvgIcon } from "./components/MuiSvgIcon";
import { MuiSelect } from "./components/MuiSelect";
import { MuiInputBase } from "./components/MuiInputBase";
import { MuiButton } from "./components/MuiButton";

const theme = createTheme({
  cssVariables: true,
  palette,
  typography,
  components: {
    MuiLink,
    MuiIconButton,
    MuiDataGrid,
    MuiSvgIcon,
    MuiSelect,
    MuiInputBase,
    MuiButton,
  },
});

export default theme;
