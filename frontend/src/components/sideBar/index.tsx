import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTheme } from "@mui/material/styles";

const Sidebar: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <Box
      sx={{
        width: 280,
        height: "100vh",
        bgcolor: theme.palette.primary.main,
        color: "white",
        display: "flex",
        flexDirection: "column",
        p: 3,
        boxShadow: 3,
      }}
    >
      {/* Logo & Tiêu Đề */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
        <IconButton sx={{ color: "white", mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "white",
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          Admin Panel
        </Typography>
      </Box>

      {/* Danh sách các mục */}
      <List>
        <ListItemButton
          component={RouterLink}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              transform: "scale(1.05)",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            sx={{ color: "white", fontWeight: "500" }}
          />
        </ListItemButton>

        <ListItemButton
          component={RouterLink}
          to="/users"
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              transform: "scale(1.05)",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText
            primary="User Management"
            sx={{ color: "white", fontWeight: "500" }}
          />
        </ListItemButton>

        <ListItemButton
          component={RouterLink}
          to="/companies"
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              transform: "scale(1.05)",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText
            primary="Company Management"
            sx={{ color: "white", fontWeight: "500" }}
          />
        </ListItemButton>
      </List>

      {/* Footer */}
      <Box sx={{ mt: "auto" }}>
        <ListItemButton
          onClick={handleLogout}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              transform: "scale(1.05)",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            sx={{ color: "white", fontWeight: "500" }}
          />
        </ListItemButton>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body2" color="white">
            © 2024 @namphh_
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
