"use client";
import DataTableShell from "@/components/DataTableShell/DataTableShell";
import { mDoctorsColumns, mDoctorsRows } from "./MockDoctorsData";

export default function DoctorsDataTable() {
  return <DataTableShell columns={mDoctorsColumns} rows={mDoctorsRows} />;
}
