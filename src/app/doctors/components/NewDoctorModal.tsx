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
  Typography,
} from "@mui/material";
import { formatPhone } from "@/utils/FormatPhone";
import StyledButton from "@/components/StyledButton/StyledButton";
import ModalWorkingDays from "./WorkingDaysModal";
import SpecialtySelect from "./SpecialtySelect";
import LoadingStyledBox from "@/components/LoadingStyledBox/LoadingStyledBox";

interface INewDoctorModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  onConfirm?: (data: DoctorFormData) => Promise<void> | void;
}

export interface DoctorFormData {
  name: string;
  email: string;
  phone: string;
  specialty: string;
  hourlyRate: string;
  isActive: boolean;
  workingDays: string[];
}

export default function NewDoctorModal({ title, open, onClose, onConfirm }: INewDoctorModalProps) {
  const [phone, setPhone] = useState("");
  const [workingDays, setWorkingDays] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

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
    const data: DoctorFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone,
      specialty: formData.get("specialty") as string,
      hourlyRate: formData.get("hourlyRate") as string,
      isActive,
      workingDays,
    };

    try {
      setIsSubmitting(true);
      await onConfirm?.(data);
      onClose();
    } catch (error) {
      console.error("Error creating doctor:", error);
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
          <TextField id="name" name="name" label="Name" variant="standard" required />
          <Stack display="flex" flexDirection="row" gap={2}>
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="standard"
              type="email"
              required
              sx={{ flexGrow: 1, width: 0 }}
            />
            <TextField
              id="phone"
              name="phone"
              label="Phone"
              variant="standard"
              value={phone}
              onChange={handlePhoneChange}
              required
              sx={{ flexGrow: 1, width: 0 }}
            />
          </Stack>

          <Stack display="flex" flexDirection="row" gap={2}>
            <SpecialtySelect />
            <TextField
              id="hourlyRate"
              name="hourlyRate"
              label="Hourly Rate"
              variant="standard"
              type="number"
              required
              sx={{ flexGrow: 1, width: 0 }}
            />
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

            <Switch checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
          </Stack>

          <ModalWorkingDays
            handleWorkingDaysChange={handleWorkingDaysChange}
            workingDays={workingDays}
          />
        </DialogContent>
        <DialogActions sx={{ px: 4, pb: 3 }}>
          <StyledButton label="Create" type="submit" />
          <StyledButton label="Cancel" onClick={handleClose} />
        </DialogActions>

        {isSubmitting && <LoadingStyledBox />}
      </form>
    </Dialog>
  );
}
