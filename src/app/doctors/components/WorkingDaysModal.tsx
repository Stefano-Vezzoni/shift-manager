import { WEEK_DAYS } from "@/utils/WeekDaysData";
import { Stack, Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";

interface IModalWorkingDaysProps {
  workingDays: string[];
  handleWorkingDaysChange: (event: React.MouseEvent<HTMLElement>, newDays: string[]) => void;
}

export default function ModalWorkingDays({
  workingDays,
  handleWorkingDaysChange,
}: IModalWorkingDaysProps) {
  return (
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
  );
}
