import { Box, Button, Typography, Modal } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useModalsDashboardStore } from "../../context/useModalsDashboardStore";
import useCreateStudent from "../../hooks/useCreateStudent";
import { InputContainer, InputAvatar } from "./index.styles";
import useEditStudent from "../../hooks/useEditStudent";

export default function CreateEdit() {
  const { createEdit, setCreateEditOpen, id, setId } =
    useModalsDashboardStore();
  const { register, errors, submit, handleImageChange, image, reset } =
    useCreateStudent();

  const { loading } = useEditStudent({ reset });

  console.log("aqu")

  if (loading) return <div>Carregando...</div>;

  return (
    <Modal
      open={createEdit}
      onClose={() => {
        reset({
          name: "",
          email: "",
          phone: "",
          photo: {
            image: "",
          },
          address: "",
          institution: "",
          course: "",
        });
        setCreateEditOpen(false);
        setId(null!);
      }}
      sx={{
        justifySelf: "center",
        maxWidth: "80vw",
        maxHeight: "90vh",
      }}>
      <Box
        component="form"
        noValidate
        id="form"
        onSubmit={submit}
        //there is a function to called when the component mount?

        sx={{
          backgroundColor: "#fff",
          padding: "50px",
          overflow: "scroll",
          maxHeight: "90vh",
        }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            backgroundColor: "#fff",
            fontWeight: 600,
          }}>
          {id ? "Editar Aluno" : "Cadastrar Aluno"}
        </Typography>
        <InputContainer>
          <label htmlFor="file-input">
            <InputAvatar src={image?.image || ""} alt="Upload image">
              {image?.image ? "" : "Adicionar Foto"}
            </InputAvatar>
          </label>
          <input
            id="file-input"
            type="file"
            style={{ display: "none" }}
            accept="image/*"
            {...register("photo")}
            onChange={handleImageChange}
          />
        </InputContainer>
        <TextField
          margin="normal"
          fullWidth
          id="name"
          autoComplete="name"
          label="Nome"
          InputProps={{ sx: { borderRadius: 3 } }}
          autoFocus
          {...register("name")}
          error={!!errors.name}
        />
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="E-mail"
          autoComplete="email"
          InputProps={{ sx: { borderRadius: 3 } }}
          autoFocus
          {...register("email")}
          error={!!errors.email}
        />
        <TextField
          margin="normal"
          fullWidth
          id="phone"
          label="Telefone"
          autoComplete="phone"
          InputProps={{ sx: { borderRadius: 3 } }}
          {...register("phone")}
          error={!!errors.phone}
        />
        <TextField
          margin="normal"
          fullWidth
          id="address"
          label="Endereço"
          autoComplete="address"
          hiddenLabel
          InputProps={{ sx: { borderRadius: 3 } }}
          autoFocus
          {...register("address")}
          error={!!errors.address}
        />
        <TextField
          margin="normal"
          fullWidth
          id="institution"
          label="Instituição"
          autoComplete="institution"
          hiddenLabel
          InputProps={{ sx: { borderRadius: 3 } }}
          autoFocus
          {...register("institution")}
          error={!!errors.institution}
        />
        <TextField
          margin="normal"
          fullWidth
          id="course"
          label="Curso"
          autoComplete="course"
          hiddenLabel
          InputProps={{ sx: { borderRadius: 3 } }}
          autoFocus
          {...register("course")}
          error={!!errors.course}
        />
        <Box
          sx={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
          }}>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              borderRadius: 3,
              width: "80%",
            }}
            type="submit">
            {id ? "Editar" : "Cadastrar"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
