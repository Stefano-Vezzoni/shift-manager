import { BUTTON_HEIGHT, sharedButtonStyles } from "../constants";

export const MuiIconButton = {
  styleOverrides: {
    root: {
      ...sharedButtonStyles,
      height: BUTTON_HEIGHT,
      minWidth: BUTTON_HEIGHT,
    },
  },
};
