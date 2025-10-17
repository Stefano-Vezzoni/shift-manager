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
import { WEEK_DAYS } from "@/utils/WeekDaysData";
import { formatPhone } from "@/utils/FormatPhone";
import StyledButton from "@/components/StyledButton/StyledButton";

interface INewDoctorModalProps {
  title: string;
}

export default function NewDoctorModal({ title }: INewDoctorModalProps) {
  const [phone, setPhone] = useState("");
  const [workingDays, setWorkingDays] = useState<string[]>([]);

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
        <Typography variant="h2">{title}</Typography>
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
          sx={{
            flexDirection: "row",
            gap: 2,
            mt: 3,
            border: "1px solid",
            borderRadius: "8px",
            borderColor: "divider",
            p: 2,
          }}
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
      <DialogActions sx={{ px: 4, pb: 3 }}>
        <StyledButton label="Create" />
        <StyledButton label="Cancel" />
      </DialogActions>
    </Dialog>
  );
}
