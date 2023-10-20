import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import DashboardTitle from "../components/DashboardTitle";


const Home = () => {

    return (

        <Box sx={{width: "100%", height: "100vh", display: "flex",}}>
            <Sidebar />
            <DashboardTitle title="Tickets"/>
        </Box>
       
    )
}

export default Home;