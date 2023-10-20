import { Divider, Link, Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import { AirplaneTicket, Article, Person, Settings } from "@mui/icons-material";
import { Lightbulb } from "@mui/icons-material";
import { People } from "@mui/icons-material";
import { Loyalty } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Stack
      // spacing={4}
      sx={{
        flexGrow: "2",
        background: "#363740",
        height: "100%",
        alignItems: "center",
        paddingTop: "30px",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "inherit",
          boxShadow: 0,
          color: "#A4A6B3",

          width: "100%",
          textAlign: "center",
          padding: "20px",
          borderRadius: "none",
         //  ":hover": { background: "#9FA2B4", color: "white", borderLeft: "4px solid white"},
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="#3751FF" />
          <path
            d="M11 10C11 9.44772 11.4477 9 12 9H15.9905C18.2127 9 19.9333 9.60955 21.1524 10.8287C22.3841 12.0478 23 13.765 23 15.9803C23 18.2088 22.3841 19.9391 21.1524 21.1713C19.9333 22.3904 18.2127 23 15.9905 23H12C11.4477 23 11 22.5523 11 22V10Z"
            fill="url(#paint0_linear_584_285)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_584_285"
              x1="11"
              y1="9"
              x2="23"
              y2="23"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0.7" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>

        <Link href="/" sx={{ textDecoration: "none", color: "white" }}>
          Dashboard Kit
        </Link>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "inherit",
          color: "#A4A6B3",
          boxShadow: 0,
          width: "100%",
          textAlign: "center",
          padding: "20px",
          borderRadius: "none",
          ":hover": {
            background: "#9FA2B4",
            color: "white",
            borderLeft: "4px solid white",
          },
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5232 8.94116H8.54412L13.1921 13.5891C13.3697 13.7667 13.6621 13.7812 13.8447 13.6091C14.9829 12.5367 15.7659 11.0912 15.9956 9.46616C16.035 9.18793 15.8041 8.94116 15.5232 8.94116ZM15.0576 7.03528C14.8153 3.52176 12.0076 0.714119 8.49412 0.471767C8.22589 0.453237 8 0.679413 8 0.948236V7.5294H14.5815C14.8503 7.5294 15.0762 7.30352 15.0576 7.03528ZM6.58824 8.94116V1.96206C6.58824 1.68118 6.34147 1.45029 6.06353 1.48971C2.55853 1.985 -0.120585 5.04705 0.00412089 8.71675C0.132356 12.4856 3.37736 15.5761 7.14794 15.5288C8.6303 15.5103 10 15.0326 11.1262 14.2338C11.3585 14.0691 11.3738 13.727 11.1724 13.5256L6.58824 8.94116Z"
            fill="#DDE2FF"
          />
        </svg>

        <Link href="/" sx={{ textDecoration: "none", color: "inherit" }}>
          Overview
        </Link>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "inherit",
          color: "#A4A6B3",
          boxShadow: 0,
          width: "100%",
          textAlign: "center",
          padding: "20px",
          borderRadius: "none",
          ":hover": {
            background: "#9FA2B4",
            color: "white",
            borderLeft: "4px solid white",
          },
        }}
      >
        <AirplaneTicket />

        <Link href="tickets" sx={{ textDecoration: "none", color: "inherit" }}>
          Tickets
        </Link>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "inherit",
          color: "#A4A6B3",
          boxShadow: 0,
          width: "100%",
          textAlign: "center",
          padding: "20px",
          borderRadius: "none",
          ":hover": {
            background: "#9FA2B4",
            color: "white",
            borderLeft: "4px solid white",
          },
        }}
      >
        <Lightbulb />
        <Link href="/" sx={{ textDecoration: "none", color: "inherit" }}>
          Ideas
        </Link>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "inherit",
          color: "#A4A6B3",
          boxShadow: 0,
          width: "100%",
          textAlign: "center",
          padding: "20px",
          borderRadius: "none",
          ":hover": {
            background: "#9FA2B4",
            color: "white",
            borderLeft: "4px solid white",
          },
        }}
      >
        <People />
        <Link href="/" sx={{ textDecoration: "none", color: "inherit" }}>
          Contacts
        </Link>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "inherit",
          color: "#A4A6B3",
          boxShadow: 0,
          width: "100%",
          textAlign: "center",
          padding: "20px",
          borderRadius: "none",
          ":hover": {
            background: "#9FA2B4",
            color: "white",
            borderLeft: "4px solid white",
          },
        }}
      >
        <Person />
        <Link href="/" sx={{ textDecoration: "none", color: "inherit" }}>
          Agents
        </Link>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "inherit",
          color: "#A4A6B3",
          boxShadow: 0,
          width: "100%",
          textAlign: "center",
          padding: "20px",
          borderRadius: "none",
          ":hover": {
            background: "#9FA2B4",
            color: "white",
            borderLeft: "4px solid white",
          },
        }}
      >
        <Article />
        <Link href="/" sx={{ textDecoration: "none", color: "inherit" }}>
          Articles
        </Link>
      </Paper>

      <Divider color="grey" />
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#A4A6B3",
          backgroundColor: "inherit",
          marginTop: "40px",
          boxShadow: 0,
          width: "100%",
          textAlign: "center",
          padding: "20px",
          borderRadius: "none",
          ":hover": {
            background: "#9FA2B4",
            color: "white",
            borderLeft: "4px solid white",
          },
        }}
      >
        <Settings />
        <Link href="/" sx={{ textDecoration: "none", color: "inherit" }}>
          Settings
        </Link>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "inherit",
          color: "#A4A6B3",
          boxShadow: 0,
          width: "100%",
          textAlign: "center",
          padding: "20px",
          borderRadius: "none",
          ":hover": {
            background: "#9FA2B4",
            color: "white",
            borderLeft: "4px solid white",
          },
        }}
      >
        <Loyalty />
        <Link href="/" sx={{ textDecoration: "none", color: "inherit" }}>
          Subscription
        </Link>
      </Paper>
    </Stack>
  );
};

export default Sidebar;
