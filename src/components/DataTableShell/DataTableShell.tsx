"use client";
import { Box, Paper } from "@mui/material";
import { ptBR } from "@mui/material/locale";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID", flex: 0.5 },
  {
    field: "name",
    headerName: "Name",
    flex: 1.5,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1.5,
  },
  {
    field: "specialty",
    headerName: "Specialty",
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
  },
  {
    field: "active",
    headerName: "Active",
  },
  {
    field: "hourlyRate",
    headerName: "Hourly Rate",
  },
  {
    field: "availability",
    headerName: "Availability",
    flex: 2,
  },
  {
    field: "actions",
    headerName: "Actions",
    flex: 2,
  },
];

const rows = [
  {
    id: 1,
    name: "Dr. João Silva",
    email: "joao.silva@medico.com",
    specialty: 1,
    phone: "(11) 98765-4321",
    active: true,
    hourlyRate: 150,
    availability: ["Segunda", "Terça", "Quarta"],
    actions: "",
  },
  {
    id: 2,
    name: "Dra. Maria Santos",
    email: "maria.santos@medico.com",
    specialty: 2,
    phone: "(11) 98765-1234",
    active: true,
    hourlyRate: 180,
    availability: ["Terça", "Quinta", "Sexta"],
    actions: "",
  },
  {
    id: 3,
    name: "Dr. Pedro Costa",
    email: "pedro.costa@medico.com",
    specialty: 3,
    phone: "(11) 98765-5678",
    active: true,
    hourlyRate: 200,
    availability: ["Segunda", "Quarta", "Sexta", "Sábado"],
    actions: "",
  },
  {
    id: 4,
    name: "Dra. Ana Oliveira",
    email: "ana.oliveira@medico.com",
    specialty: 4,
    phone: "(11) 98765-9999",
    active: true,
    hourlyRate: 170,
    availability: ["Segunda", "Terça", "Quinta"],
    actions: "",
  },
  {
    id: 5,
    name: "Dr. Carlos Mendes",
    email: "carlos.mendes@medico.com",
    specialty: 5,
    phone: "(11) 98765-7777",
    active: true,
    hourlyRate: 220,
    availability: ["Terça", "Quarta", "Quinta", "Sexta"],
    actions: "",
  },
  {
    id: 6,
    name: "Dr. Fernando Alves",
    email: "fernando.alves@medico.com",
    specialty: 2,
    phone: "(11) 98765-3333",
    active: true,
    hourlyRate: 175,
    availability: ["Segunda", "Quinta", "Sábado", "Domingo"],
    actions: "",
  },
  {
    id: 7,
    name: "Dra. Paula Costa",
    email: "paula.costa@medico.com",
    specialty: 6,
    phone: "(11) 98765-2222",
    active: true,
    hourlyRate: 190,
    availability: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
    actions: "",
  },
  {
    id: 8,
    name: "Dr. Roberto Lima",
    email: "roberto.lima@medico.com",
    specialty: 7,
    phone: "(11) 98765-8888",
    active: true,
    hourlyRate: 210,
    availability: ["Quarta", "Quinta", "Sexta", "Sábado"],
    actions: "",
  },
  {
    id: 9,
    name: "Dra. Juliana Pereira",
    email: "juliana.pereira@medico.com",
    specialty: 8,
    phone: "(11) 98765-6666",
    active: true,
    hourlyRate: 185,
    availability: ["Segunda", "Terça", "Quinta", "Sexta"],
    actions: "",
  },
  {
    id: 10,
    name: "Dr. Marcelo Santos",
    email: "marcelo.santos@medico.com",
    specialty: 9,
    phone: "(11) 98765-1111",
    active: true,
    hourlyRate: 195,
    availability: ["Terça", "Quarta", "Quinta", "Sábado", "Domingo"],
    actions: "",
  },
];

export default function DataTableShell() {
  return (
    <Box>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}
