export const MuiSvgIcon = {
  styleOverrides: {
    root: {
      color: "#cbd5e1",

      "&.Mui-disabled": {
        color: "#64748b",
        opacity: 1,
      },
      "&.MuiSvgIcon-colorPrimary": { color: "var(--mui-palette-primary-main)" },
      "&.MuiSvgIcon-colorSecondary": { color: "var(--mui-palette-secondary-main)" },
      "&.MuiSvgIcon-colorError": { color: "var(--mui-palette-error-main)" },
      "&.MuiSvgIcon-colorSuccess": { color: "var(--mui-palette-success-main)" },
      "&.MuiSvgIcon-colorInfo": { color: "var(--mui-palette-info-main)" },
      "&.MuiSvgIcon-colorWarning": { color: "var(--mui-palette-warning-main)" },
    },
  },
};
