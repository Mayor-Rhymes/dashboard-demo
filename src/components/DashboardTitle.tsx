import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import Divider from "@mui/material/Divider";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Add } from "@mui/icons-material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Badge,
  Checkbox,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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
