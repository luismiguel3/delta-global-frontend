import { Box, Grid } from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";
import * as S from "./index.styles";

import useSWR from "swr";

import ResponsiveAppBar from "../../components/navBar";
import DeleteModal from "../../components/DeleteModal";
import CreateEdit from "../../components/CreateEditModal";
import { useModalsDashboardStore } from "../../context/useModalsDashboardStore";
import DetailsModal from "../../components/DetailsModal";
import { getAllStudents } from "../../services/student";

export default function Dashboard() {
  const {
    setDeleteModalOpen,
    setId,
    setCreateEditOpen,
    createEditModal,
    detailsModal,
    setDetailsModalOpen,
  } = useModalsDashboardStore();

  const { data: students, isLoading } = useSWR("/student", getAllStudents);

  if (isLoading) return <div>Carregando...</div>;

  return (
    <Box>
      <ResponsiveAppBar />
      <Grid container sx={{ height: "85vh", justifyContent: "center" }}>
        <S.MainContainer>
          <S.DashboardSection>
            <S.Title variant="h4">Dashboard</S.Title>
          </S.DashboardSection>
          <S.Table
            rows={students}
            rowHeight={50}
            columns={[
              {
                field: "option",
                headerName: "Opções",
                flex: 1,
                minWidth: 150,
                renderCell: (params) => {
                  return (
                    <S.IconsContainer>
                      <Visibility
                        sx={{ color: "primary.500", cursor: "pointer" }}
                        onClick={() => {
                          setId(params.row.id);
                          setDetailsModalOpen(true);
                        }}
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
                    </S.IconsContainer>
                  );
                },
              },
              { field: "name", headerName: "Nome", flex: 2 },
              { field: "email", headerName: "E-mail", flex: 3 },
              { field: "phone", headerName: "Telefone", flex: 1.5 },
              { field: "address", headerName: "Endereço", flex: 3 },
            ]}
            rowSelection={false}
            slots={{
              noRowsOverlay: () => <div>Nenhum dado encontrado</div>,
            }}
          />
        </S.MainContainer>
      </Grid>
      {createEditModal && <CreateEdit />}
      {detailsModal && <DetailsModal />}
      <DeleteModal />
    </Box>
  );
}
