"use client";
import Navbar from "@/components/Navbar/Navbar";
import StyledButton from "@/components/StyledButton/StyledButton";
import { PersonAdd, FilterList, FileDownload, Refresh } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import DoctorsDataTable from "./components/DoctorsDataTable";
import DoctorFilterModal, { DoctorFilterData } from "./components/DoctorFilterModal";
import { useState } from "react";
import NewDoctorModal from "./components/NewDoctorModal";
import { DoctorFormData } from "./components/NewDoctorModal";

export default function Doctors() {
  const [isNewDoctorModalOpen, setIsNewDoctorModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handleOpenNewModal = () => setIsNewDoctorModalOpen(true);
  const handleCloseNewModal = () => setIsNewDoctorModalOpen(false);

  const handleOpenFilterModal = () => setIsFilterModalOpen(true);
  const handleCloseFilterModal = () => setIsFilterModalOpen(false);

  const handleCreateDoctor = async (data: DoctorFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await fetch("/api/doctors", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  const handleFilterDoctor = async (data: DoctorFilterData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await fetch("/api/doctors", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <Box display="flex" minHeight="100vh">
      <Navbar />
      <Divider orientation="vertical" flexItem />

      <Box component="main" flexGrow={1} px={12} py={8}>
        <Typography variant="h1">Doctors</Typography>

        <Box display={"flex"} pt={4} pb={1} gap={2}>
          <Box display={"flex"} gap={1}>
            <StyledButton
              label="New Doctor"
              startIcon={<PersonAdd />}
              onClick={handleOpenNewModal}
            />
            <StyledButton
              startIcon={<FilterList />}
              tooltip="Filter"
              onClick={handleOpenFilterModal}
            />
            <StyledButton startIcon={<FileDownload />} tooltip="Download CSV" />
            <StyledButton startIcon={<Refresh />} tooltip="Reload" />
          </Box>
        </Box>

        <DoctorsDataTable />

        <NewDoctorModal
          title="New Doctor"
          open={isNewDoctorModalOpen}
          onClose={handleCloseNewModal}
          onConfirm={handleCreateDoctor}
        />
        <DoctorFilterModal
          title="Filter Doctors"
          open={isFilterModalOpen}
          onClose={handleCloseFilterModal}
          onConfirm={handleFilterDoctor}
        />
      </Box>
    </Box>
  );
}
