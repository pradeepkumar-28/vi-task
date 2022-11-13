import React from 'react'
import { EuiProvider } from '@elastic/eui';
import { Routes, Route } from "react-router-dom";
import Dashbord from './pages/Dashbord';
import TeamMeetingPage from "./pages/TeamMeetingPage"


function App() {
  return (
    <EuiProvider>
     <Routes>
        <Route path="/" element={<Dashbord />} />
        <Route path="/TeamMeet" element={<TeamMeetingPage />} />
      </Routes>
    </EuiProvider>
  )
}

export default App