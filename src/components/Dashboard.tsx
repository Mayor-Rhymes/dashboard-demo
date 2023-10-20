import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import Divider from "@mui/material/Divider";

import { Add } from "@mui/icons-material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  Checkbox,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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
    <Box sx={{ flexGrow: "3", fontFamily: "Mulish" }}>
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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            paddingInline: "20px",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              paddingBlock: "10px",
              cursor: "pointer",
              ":hover": { borderColor: "blue", color: "blue" },
            }}
          >
            <Typography variant="subtitle1" component="p">
              Unresolved
            </Typography>
            <Typography variant="h2" component="p">
              60
            </Typography>
          </Card>
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              paddingBlock: "10px",
              cursor: "pointer",
              ":hover": { borderColor: "blue", color: "blue" },
            }}
          >
            <Typography variant="subtitle1" component="p">
              Overdue
            </Typography>
            <Typography variant="h2" component="p">
              16
            </Typography>
          </Card>
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              paddingBlock: "10px",
              cursor: "pointer",
              ":hover": { borderColor: "blue", color: "blue" },
            }}
          >
            <Typography variant="subtitle1" component="p">
              Open
            </Typography>
            <Typography variant="h2" component="p">
              43
            </Typography>
          </Card>
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              paddingBlock: "10px",
              cursor: "pointer",
              ":hover": { borderColor: "blue", color: "blue" },
            }}
          >
            <Typography variant="subtitle1" component="p">
              On hold
            </Typography>
            <Typography variant="h2" component="p">
              64
            </Typography>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            boxShadow: "5px 10px 30px lightgrey",
            marginInline: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: "1",
              padding: "10px",
            }}
          >
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ fontWeight: "bold" }}
            >
              Today's Trend
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography variant="subtitle1" component="p">
                as of 25 May 2019, 09:41 AM
              </Typography>
            </Box>

            <LineChart
              width={900}
              height={500}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
            {/* </ResponsiveContainer> */}
          </Box>
          <Box
            sx={{
              flexGrow: "1",
              borderLeft: ".5px solid grey",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                padding: "20px",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1" component="p">
                Resolved
              </Typography>

              <Typography variant="subtitle1" component="p">
                449
              </Typography>
            </Box>

            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1" component="p">
                Received
              </Typography>

              <Typography variant="subtitle1" component="p">
                426
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1" component="p">
                Average first response time
              </Typography>

              <Typography variant="subtitle1" component="p">
                33m
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1" component="p">
                Average response time
              </Typography>

              <Typography variant="subtitle1" component="p">
                3h 8m
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1" component="p">
                Resolution within SLA
              </Typography>

              <Typography variant="subtitle1" component="p">
                94%
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            paddingInline: "20px",
            gap: "40px",
            paddingBottom: "20px",
          }}
        >
          <TableContainer component={Card}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Stack>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Unresolved tickets
                      </Typography>
                      <Typography>Group: Support</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ color: "blue" }}>View details</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Waiting On Feature Request</TableCell>
                  <TableCell>4238</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Awaiting Customer Response</TableCell>
                  <TableCell>1005</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Awaiting Developer Fix</TableCell>
                  <TableCell>914</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Pending</TableCell>
                  <TableCell>281</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer component={Card}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Stack>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Tasks
                      </Typography>
                      <Typography>Today</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ color: "blue" }}>View all</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ border: "none" }}>
                  <TableCell>Create New Task</TableCell>
                  <TableCell>
                    <Add />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                    Finish ticket update
                  </TableCell>
                  <TableCell>
                    <Chip label="URGENT" sx={{ backgroundColor: "yellow" }} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                    Create new ticket example
                  </TableCell>
                  <TableCell>
                    <Chip label="NEW" sx={{ backgroundColor: "green" }} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                    Update ticket report
                  </TableCell>
                  <TableCell>
                    <Chip
                      label="DEFAULT"
                      sx={{ backgroundColor: "lightgrey" }}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
