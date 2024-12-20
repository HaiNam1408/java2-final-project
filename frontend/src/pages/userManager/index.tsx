import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { fetchUserList, deleteUser } from "../../apis/repositories/user";

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const userList = await fetchUserList();
        setUsers(userList);
      } catch (error: any) {
        setError(error.message || "Failed to fetch user list");
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  const handleDelete = async (userId: number) => {
    setLoading(true);
    setError(null);
    try {
      await deleteUser(userId);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error: any) {
      setError(error.message || "Failed to delete user");
    } finally {
      setLoading(false);
      setOpenConfirmDialog(false);
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "firstname", headerName: "First Name", flex: 2 },
    { field: "lastname", headerName: "Last Name", flex: 2 },
    { field: "email", headerName: "Email", flex: 2 },
    { field: "company", headerName: "Company", flex: 2 },
    {
      field: "roles",
      headerName: "Roles",
      flex: 1.2,
      renderCell: (params) => params.value.join(", "),
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      flex: 2,
      renderCell: (params) => (
        <Box>
          <Button
            href={`/users/edit/${params.row.id}`}
            variant="contained"
            color="primary"
            sx={{
              mr: 1,
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              setSelectedUser(params.row);
              setOpenConfirmDialog(true);
            }}
            sx={{
              "&:hover": {
                backgroundColor: "#f50057",
                borderColor: "#f50057",
              },
            }}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h4"
        color="primary"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        User Management
      </Typography>

      {/* Tìm kiếm người dùng */}
      <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}>
        <TextField
          label="Search Users"
          variant="outlined"
          size="small"
          sx={{ width: 300 }}
        />
        <Button
          href="/users/add"
          variant="contained"
          color="primary"
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          Add New User
        </Button>
      </Box>

      {/* DataGrid - Hiển thị bảng người dùng */}
      <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
        <Box sx={{ height: "calc(100vh - 200px)", width: "100%" }}>
          {loading ? (
            <Typography variant="h6" align="center">
              Loading...
            </Typography>
          ) : error ? (
            <Typography variant="h6" color="error" align="center">
              {error}
            </Typography>
          ) : (
            <DataGrid
              rows={users}
              columns={columns}
              sx={{
                "& .MuiDataGrid-columnHeader": {
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  fontWeight: 600,
                },
                "& .MuiDataGrid-cell": {
                  fontSize: 14,
                },
                "& .MuiDataGrid-row:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            />
          )}
        </Box>
      </Paper>

      {/* Confirm Delete Dialog */}
      <Dialog
        open={openConfirmDialog}
        onClose={() => setOpenConfirmDialog(false)}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete user {selectedUser?.firstname}{" "}
            {selectedUser?.lastname}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirmDialog(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => handleDelete(selectedUser?.id)}
            color="secondary"
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserManagement;
