export const MuiTextField = {
  styleOverrides: {
    root: {
      flexGrow: 1,
      "& input:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px transparent inset",
        WebkitTextFillColor: "#cbd5e1",
        transition: "background-color 5000s ease-in-out 0s",
      },
      "& input:-webkit-autofill:hover": {
        WebkitBoxShadow: "0 0 0 1000px transparent inset",
        WebkitTextFillColor: "#cbd5e1",
      },
      "& input:-webkit-autofill:focus": {
        WebkitBoxShadow: "0 0 0 1000px transparent inset",
        WebkitTextFillColor: "#cbd5e1",
      },
      "& input::spelling-error": {
        color: "#cbd5e1",
        textDecorationColor: "#f44336",
      },
      "& input": {
        caretColor: "#cbd5e1",
      },
      "& input[type=number]": {
        MozAppearance: "textfield",
      },
      "& input[type=number]::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },
      "& input[type=number]::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },
      "& .MuiInputLabel-root": {
        color: "#94a3b8",
      },
      "&:hover .MuiInputLabel-root": {
        color: "#cbd5e1",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#1976d2",
      },
      "& .MuiInput-underline:before": {
        borderBottomColor: "#64748b",
      },
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottomColor: "#94a3b8",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#1976d2",
      },
    },
  },
};
