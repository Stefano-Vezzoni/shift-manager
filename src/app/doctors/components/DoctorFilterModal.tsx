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

interface INewDoctorModalProps {
  title: string;
}

export default function NewDoctorModal({ title }: INewDoctorModalProps) {
  const [workingDays, setWorkingDays] = useState<string[]>([]);

  const handleWorkingDaysChange = (event: React.MouseEvent<HTMLElement>, newDays: string[]) => {
    setWorkingDays(newDays);
  };

  return (
    <Dialog open>
      <DialogTitle component="div" sx={{ px: 5, pt: 5 }}>
        <Typography variant="h2">{title}</Typography>
      </DialogTitle>
      <DialogContent sx={{ px: 6, display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField id="name" label="Name" variant="standard" />

        <Stack display="flex" flexDirection="row" gap={2}>
          <SpecialtySelect />
          <TextField
            id="maxHourlyRate"
            label="Hourly Rate (Max)"
            variant="standard"
            sx={{ width: 0 }}
          />
        </Stack>

        <ModalWorkingDays
          handleWorkingDaysChange={handleWorkingDaysChange}
          workingDays={workingDays}
        />
      </DialogContent>
      <DialogActions sx={{ px: 4, pb: 3 }}>
        <StyledButton label="Filter" />
        <StyledButton label="Cancel" />
      </DialogActions>
    </Dialog>
  );
}
