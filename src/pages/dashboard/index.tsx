import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Grid, Typography } from "@mui/material";

import { Edit, Delete, Visibility } from "@mui/icons-material";
import useSWR from "swr";

import { logout } from "../../hooks/useAuth";
import api from "../../services/api";
import ResponsiveAppBar from "../../components/navBar";
import DeleteModal from "../../components/DeleteModal";
import CreateEdit from "../../components/CreateEditModal";
import { useModalsDashboardStore } from "../../context/useModalsDashboardStore";

async function getUsers() {
  return api.get("/students").then((response) => response.data);
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { setDeleteModalOpen, setId, setCreateEditOpen, createEditModal } =
    useModalsDashboardStore();

  const { data: users, isLoading } = useSWR("/users", getUsers);

  if (isLoading) return <div>Carregando...</div>;

  return (
    <Box>
      <ResponsiveAppBar />
      <Grid container sx={{ height: "85vh", justifyContent: "center" }}>
        <Box
          sx={{
            width: "80%",
            height: "80vh",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              display: "flex",
              width: "80%",
              backgroundColor: "primary.400",
              borderRadius: "10px",
              my: 5,
            }}>
            <Typography
              sx={{
                textAlign: "center",
                cursor: "pointer",
                padding: "10px 50px",
                color: "#fff",
              }}
              onClick={() => {
                logout();
                navigate("/");
              }}
              fontWeight={700}
              variant="h4">
              Dashboard
            </Typography>
          </Box>
          <DataGrid
            rows={users}
            rowHeight={50}
            columns={[
              {
                field: "option",
                headerName: "Opções",
                flex: 1,
                minWidth: 150,
                renderCell: (params) => {
                  return (
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        height: "100%",
                      }}>
                      <Visibility
                        sx={{ color: "primary.500", cursor: "pointer" }}
                      />
                      <Edit
                        sx={{
                          color: "white",
                          cursor: "pointer",
                          backgroundColor: "secundary.800",
                          borderRadius: "10%",
                        }}
                        onClick={() => {
                          setId(params.row.id);
                          setCreateEditOpen(true);
                        }}
                      />
                      <Delete
                        sx={{ color: "danger.700", cursor: "pointer" }}
                        onClick={() => {
                          setDeleteModalOpen(true);
                          setId(params.row.id);
                        }}
                      />
                    </Box>
                  );
                },
              },
              { field: "name", headerName: "Nome", flex: 2 },
              { field: "email", headerName: "E-mail", flex: 3 },
              { field: "phone", headerName: "Telefone", flex: 1.5 },
              { field: "address", headerName: "Endereço", flex: 3 },
            ]}
            sx={{
              height: "100%",
              width: "100%",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",

              "& .MuiDataGrid-columnHeaders": {
                paddingLeft: "20px",
              },
              "& .MuiDataGrid-cell": {
                paddingLeft: "30px",
              },
              "& .MuiDataGrid-cell:focus-within": {
                outline: "none",
              },
            }}
            rowSelection={false}
            slots={{
              noRowsOverlay: () => <div>Nenhum dado encontrado</div>,
            }}
          />
        </Box>
      </Grid>
      {createEditModal && <CreateEdit />}
      <DeleteModal />
    </Box>
  );
}
