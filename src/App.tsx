import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";
import Dashboard from "@/pages/Dashboard/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout>
            <Dashboard />
          </AppLayout>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}