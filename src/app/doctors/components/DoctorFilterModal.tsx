"use client";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import StyledButton from "@/components/StyledButton/StyledButton";
import ModalWorkingDays from "./WorkingDaysModal";
import SpecialtySelect from "./SpecialtySelect";
import LoadingStyledBox from "@/components/LoadingStyledBox/LoadingStyledBox";

interface IDoctorFilterModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  onConfirm?: (data: DoctorFilterData) => Promise<void> | void;
}

export interface DoctorFilterData {
  name: string;
  specialty: string;
  maxHourlyRate: string;
  workingDays: string[];
}

export default function DoctorFilterModal({
  title,
  open,
  onClose,
  onConfirm,
}: IDoctorFilterModalProps) {
  const [workingDays, setWorkingDays] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWorkingDaysChange = (event: React.MouseEvent<HTMLElement>, newDays: string[]) => {
    setWorkingDays(newDays);
  };

  const handleClose = () => {
    if (isSubmitting) return;
    onClose();
  };

  const handleConfirm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    const formData = new FormData(e.currentTarget);
    const data: DoctorFilterData = {
      name: formData.get("name") as string,
      specialty: formData.get("specialty") as string,
      maxHourlyRate: formData.get("maxHourlyRate") as string,
      workingDays,
    };

    try {
      setIsSubmitting(true);
      await onConfirm?.(data);
      onClose();
    } catch (error) {
      console.error("Error filtering doctors:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleConfirm}>
        <DialogTitle component="div" sx={{ px: 5, pt: 5 }}>
          <Typography variant="h2">{title}</Typography>
        </DialogTitle>
        <DialogContent sx={{ px: 6, display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField id="name" name="name" label="Name" variant="standard" />

          <Stack display="flex" flexDirection="row" gap={2}>
            <SpecialtySelect />
            <TextField
              id="maxHourlyRate"
              name="maxHourlyRate"
              label="Hourly Rate (Max)"
              variant="standard"
              type="number"
              sx={{ flexGrow: 1, width: 0 }}
            />
          </Stack>

          <ModalWorkingDays
            handleWorkingDaysChange={handleWorkingDaysChange}
            workingDays={workingDays}
          />
        </DialogContent>
        <DialogActions sx={{ px: 4, pb: 3 }}>
          <StyledButton label="Filter" type="submit" />
          <StyledButton label="Cancel" onClick={handleClose} />
        </DialogActions>

        {isSubmitting && <LoadingStyledBox />}
      </form>
    </Dialog>
  );
}
