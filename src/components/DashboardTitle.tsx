import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";






import {
  
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";



interface DashProps {
  title: string;
}

const Dashboard = ({ title }: DashProps) => {
  return (
    <Box sx={{ flexGrow: "20", fontFamily: "Mulish" }}>
      <Navbar title={title} />
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          paddingInline: "20px",
          gap: "30px",
        }}
      >
        <TableContainer component={Card}>
          <Table>
            <TableHead>
              <TableRow sx={{ borderBottom: "none" }}>
                <TableCell>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    All tickets
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography></Typography>
                </TableCell>
                <TableCell>
                  <Typography></Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ color: "blue" }}>Sort</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography component="p">
                    Ticket Details
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>Customer name</Typography>
                </TableCell>
                <TableCell>
                  <Typography>Date</Typography>
                </TableCell>
                <TableCell>
                  <Typography>Priority</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Contact Email Not Linked</TableCell>
                <TableCell>Tom Cruise</TableCell>
                <TableCell>May 26, 2019</TableCell>
                <TableCell>
                  <Chip color="error" label="HIGH" sx={{ fontSize: "10px" }} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Adding Images To Featured Posts</TableCell>
                <TableCell>Matt Damon</TableCell>
                <TableCell>May 26, 2019</TableCell>
                <TableCell>
                  <Chip color="warning" label="LOW" sx={{ fontSize: "10px" }} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>When will I be charged this month</TableCell>
                <TableCell>Robert Downey</TableCell>
                <TableCell>May 26, 2019</TableCell>
                <TableCell>
                  <Chip color="error" label="HIGH" sx={{ fontSize: "10px" }} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Payment not going through</TableCell>
                <TableCell>Christian Bale</TableCell>
                <TableCell>May 25, 2019</TableCell>
                <TableCell>
                  <Chip
                    color="success"
                    label="NORMAL"
                    sx={{ fontSize: "10px" }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;
