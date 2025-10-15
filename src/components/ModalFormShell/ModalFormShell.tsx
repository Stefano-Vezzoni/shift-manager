"use client";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

const WEEK_DAYS = [
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" },
  { value: "sunday", label: "Sunday" },
];

export default function ModalFormShell() {
  const [phone, setPhone] = useState("");
  const [workingDays, setWorkingDays] = useState<string[]>([]);

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleWorkingDaysChange = (event: React.MouseEvent<HTMLElement>, newDays: string[]) => {
    setWorkingDays(newDays);
  };

  return (
    <Dialog open>
      <DialogTitle component="div" sx={{ px: 5, pt: 5 }}>
        <Typography variant="h2">New Doctor</Typography>
      </DialogTitle>
      <DialogContent sx={{ px: 6, display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField id="nomeCompleto" label="Nome Completo" variant="standard" />
        <Stack display="flex" flexDirection="row" gap={2}>
          <TextField id="email" label="Email" variant="standard" />
          <TextField
            id="phone"
            label="Phone"
            variant="standard"
            value={phone}
            onChange={handlePhoneChange}
          />
        </Stack>

        <Stack display="flex" flexDirection="row" gap={2}>
          <TextField id="specialty" label="Specialty" variant="standard" />
          <TextField id="hourlyRate" label="Hourly Rate" variant="standard" />
        </Stack>

        <Stack
          display="flex"
          justifyContent="space-between"
          sx={{ flexDirection: "row", gap: 2, mt: 3 }}
        >
          <Stack display="flex" sx={{ flexDirection: "column" }}>
            <Typography>Status</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              The doctor is available for appointments.
            </Typography>
          </Stack>

          <Switch defaultChecked />
        </Stack>

        <Stack display="flex" sx={{ flexDirection: "column", gap: 1, mt: 2 }}>
          <Typography>Working Days</Typography>
          <ToggleButtonGroup
            value={workingDays}
            onChange={handleWorkingDaysChange}
            aria-label="working days"
            sx={{ flexWrap: "wrap", gap: 1 }}
          >
            {WEEK_DAYS.map((day) => (
              <ToggleButton key={day.value} value={day.value} aria-label={day.value}>
                {day.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ px: 4, pb: 3 }}></DialogActions>
    </Dialog>
  );
}
