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
}

type TStyledButtonProps = TStyledButton & IStyledButtonProps;

export default function StyledButton({ label, startIcon, tooltip, onClick }: TStyledButtonProps) {
  const isIconOnly = !label && startIcon;

  return isIconOnly ? (
    <Tooltip title={tooltip}>
      <IconButton>{startIcon}</IconButton>
    </Tooltip>
  ) : (
    <Button variant="contained" startIcon={startIcon}>
      <Typography variant="body2">{label}</Typography>
    </Button>
  );
}
