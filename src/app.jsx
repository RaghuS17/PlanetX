import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LogoScreen from './LogoScreen.jsx'
import RoleSelection from './roleselection.jsx'
import LoginPage from './loginpage.jsx'
import StudentApp from '../StudentDashboard/StudentApp.jsx'
import ParentApp from '../ParentDashboard/ParentApp.jsx'
import TeacherApp from '../TeacherDashboard/TeacherApp.jsx'
import ManagementApp from '../ManagementDashboard/ManagementApp.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogoScreen />} />
        <Route path="/roles" element={<RoleSelection />} />
        <Route path="/login/:role" element={<LoginPage />} />
        <Route path="/student/*" element={<StudentApp />} />
        <Route path="/parent/*" element={<ParentApp />} />
        <Route path="/teacher/*" element={<TeacherApp />} />
        <Route path="/management/*" element={<ManagementApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
