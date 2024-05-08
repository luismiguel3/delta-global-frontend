import swr from "swr";
import { Avatar, Box, Modal, Typography } from "@mui/material";
import { useModalsDashboardStore } from "../../context/useModalsDashboardStore";
import CustomButton from "../Button";
import { getStudent } from "../../services/student";

type TitleValueProps = {
  title: string;
  value: string;
};

export default function DetailsModal() {
  const { detailsModal, setDetailsModalOpen, id, setId } =
    useModalsDashboardStore();
  const { data, isLoading } = swr(`/student/details/${id}`, () => getStudent(id));

  if (isLoading) return <div>Carregando...</div>;

  const TitleValue = ({ title, value }: TitleValueProps) => (
    <Box>
      <Typography>
        <strong>{title}:</strong> {value}
      </Typography>
    </Box>
  );

  return (
    <Modal
      open={detailsModal}
      onClose={() => {
        setId(null), setDetailsModalOpen(false);
      }}
      sx={{
        display: "flex",
        justifySelf: "center",
        alignItems: "center",
        maxWidth: "90vw",
      }}>
      <Box
        sx={{
          backgroundColor: "#fff",
          minWidth: "30rem",
          padding: "50px",
          borderRadius: 5,
        }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            backgroundColor: "#fff",
            fontWeight: 600,
          }}>
          Detalhes
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
          }}>
          <Avatar
            src={data?.photo?.image}
            alt="Upload image"
            sx={{
              width: 150,
              height: 150,
              cursor: "pointer",
              border: "2px solid #a9a9a9",
              backgroundColor: "#a0a0a0",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 3,
            mt: 3,
          }}>
          <Box>
            <TitleValue title="Nome" value={data.name} />
            <TitleValue title="Email" value={data.email} />
            <TitleValue title="Telefone" value={data.phone} />
          </Box>
          <Box>
            <TitleValue title="Endereço" value={data.address} />
            <TitleValue title="Instituição" value={data.institution} />
            <TitleValue title="Curso" value={data.course} />
          </Box>
          <TitleValue title="Criado em" value={data.created_at} />
        </Box>
        <Box
          sx={{
            width: "100%",
            justifyContent: "flex-end",
            display: "flex",
            mt: 10,
            gap: 3,
          }}>
          <CustomButton
            onClick={() => {
              setId(null), setDetailsModalOpen(false);
            }}
            sx={{
              width: "20%",
              backgroundColor: "danger.700",
              "&:hover": {
                backgroundColor: "danger.800",
              },
            }}>
            Fechar
          </CustomButton>
        </Box>
      </Box>
    </Modal>
  );
}
