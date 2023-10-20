import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Search, Notifications } from "@mui/icons-material";


interface NavProps {

  title: string;
}

const Navbar = ({title}: NavProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap:"10px", paddingInline: "20px", height: "100px" }}>
      <Box
        sx={{ flexGrow: "4", display: "flex", justifyContent: "space-between", alignItems: "center", }}
      >
        <Typography variant="h4" component="h5">
          {title}
        </Typography>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Search />
          <Notifications />
        </Box>
      </Box>

      <Typography component="p" sx={{flexGrow: "1"}}>
         Jones Ferdinand
      </Typography>

      
    </Box>
  );
};

export default Navbar;
