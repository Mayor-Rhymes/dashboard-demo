import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Tickets from "./pages/Tickets"
import Box from "@mui/material/Box"
import Sidebar from "./components/Sidebar"


export default function App () {

  return (
    <Router>
      <Box sx={{width: "100%", height: "100vh", display: "flex",}}>
        <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tickets" element={<Tickets />} />
      </Routes>
      </Box>
    </Router>
  )
}