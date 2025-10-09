import { sharedButtonStyles, BUTTON_HEIGHT } from "../constants";

export const MuiButton = {
  styleOverrides: {
    root: {
      textTransform: "none",
      ...sharedButtonStyles,
      height: BUTTON_HEIGHT,
      minWidth: BUTTON_HEIGHT,
    },
  },
} as const;
