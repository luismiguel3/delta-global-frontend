import { Box, Button, Typography, Modal } from "@mui/material";
import { mutate } from "swr";
import { useModalsDashboardStore } from "../../context/useModalsDashboardStore";
import api from "../../services/api";

export default function DeleteModal() {
  const { deleteModal, setDeleteModalOpen, id, setId } =
    useModalsDashboardStore();

  async function handleDeleteUser() {
    try {
      await api.delete(`/student/${id}`);
      setDeleteModalOpen(false);
      setId(null!);
      mutate("/student");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal
      open={deleteModal}
      onClose={() => {
        setDeleteModalOpen(false);
      }}
      closeAfterTransition
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box
        sx={{ backgroundColor: "#fff", padding: "50px", borderRadius: "15px" }}>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", backgroundColor: "#fff" }}>
          Deseja realmente deletar o usuário?
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mt: 2,
            backgroundColor: "#fff",
          }}>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDeleteUser()}>
            Deletar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setDeleteModalOpen(false)}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
