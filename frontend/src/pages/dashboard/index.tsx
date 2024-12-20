import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Dashboard: React.FC = () => {
  // Mock data for the table
  const rows = [
    { name: "John Doe", role: "Admin", lastLogin: "2024-12-18" },
    { name: "Jane Smith", role: "Editor", lastLogin: "2024-12-17" },
    { name: "Alice Johnson", role: "Viewer", lastLogin: "2024-12-16" },
  ];

  return (
    <Box sx={{ p: 4, bgcolor: "#f4f6f8", minHeight: "100vh" }}>
      {/* Header */}
      <Typography variant="h4" color="textPrimary" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Welcome to the admin dashboard! Here’s an overview of the current
        status.
      </Typography>

      {/* Info Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Total Users
              </Typography>
              <Typography variant="h3" color="primary">
                1,245
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Active Sessions
              </Typography>
              <Typography variant="h3" color="primary">
                98
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Monthly Revenue
              </Typography>
              <Typography variant="h3" color="primary">
                $12,345
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts & Table */}
      <Grid container spacing={3}>
        {/* Placeholder Chart */}
        <Grid item xs={12} md={8}>
          <Card sx={{ boxShadow: 3 }}>
            <CardHeader title="Activity Overview" />
            <Divider />
            <CardContent>
              <Box
                sx={{
                  height: 240,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#f0f0f0",
                  borderRadius: "8px",
                }}
              >
                <Typography color="textSecondary">
                  [Placeholder for Chart]
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Table */}
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3 }}>
            <CardHeader title="Recent Logins" />
            <Divider />
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Last Login</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.role}</TableCell>
                      <TableCell>{row.lastLogin}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
