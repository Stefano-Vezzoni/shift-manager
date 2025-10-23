import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import { ReactNode } from "react";

type TStyledButton =
  | {
      label: string;
      startIcon?: ReactNode;
      tooltip?: never;
    }
  | {
      label?: never;
      startIcon: ReactNode;
      tooltip: string;
    };

interface IStyledButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

type TStyledButtonProps = TStyledButton & IStyledButtonProps;

export default function StyledButton({
  label,
  startIcon,
  tooltip,
  onClick,
  type = "button",
  disabled = false,
}: TStyledButtonProps) {
  const isIconOnly = !label && startIcon;

  return isIconOnly ? (
    <Tooltip title={tooltip}>
      <IconButton onClick={onClick} type={type} disabled={disabled}>
        {startIcon}
      </IconButton>
    </Tooltip>
  ) : (
    <Button
      variant="contained"
      startIcon={startIcon}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <Typography variant="body2">{label}</Typography>
    </Button>
  );
}
