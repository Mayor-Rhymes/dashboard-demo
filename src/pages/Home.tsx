import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";


const Home = () => {

    return (

        <Box sx={{width: "100%", height: "100vh", display: "flex",}}>
            <Sidebar />
            <Dashboard title="Overview"/>
        </Box>
       
    )
}

export default Home;