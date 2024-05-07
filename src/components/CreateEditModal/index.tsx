import { Box, Button, Typography, Modal } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useModalsDashboardStore } from "../../context/useModalsDashboardStore";
import useCreateStudent from "../../hooks/useCreateStudent";
import useEditStudent from "../../hooks/useEditStudent";
import { InputContainer, InputAvatar } from "./index.styles";
import useHandleFields from "./useHandleFields";

export default function CreateEdit() {
  const { createEditModal, id } = useModalsDashboardStore();
  const {
    register,
    errors,
    watch,
    resetFieldsOnClose,
    handleImageChange,
    handleSubmit,
  } = useHandleFields();

  const { submit } = id
    ? useEditStudent(handleSubmit)
    : useCreateStudent(handleSubmit);

  //const image = watch("photo");
  const image = watch("photo.image");

  return (
    <Modal
      open={createEditModal}
      onClose={resetFieldsOnClose}
      sx={{
        display: "flex",
        justifySelf: "center",
        alignItems: "center",
        maxWidth: "90vw",
      }}>
      <Box
        component="form"
        noValidate
        id="form"
        onSubmit={submit}
        sx={{
          backgroundColor: "#fff",
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
          {id ? "Editar Aluno" : "Cadastrar Aluno"}
        </Typography>
        <InputContainer>
          <label htmlFor="file-input">
            <InputAvatar src={image || ""} alt="Upload image">
              {image ? "" : "Adicionar Foto"}
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
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
          <Box
            width="30%"
            style={{
              display: "flex",
              flexDirection: "column",
            }}>
            <Typography
              style={{
                color: "#000",
                fontSize: "1rem",
                fontWeight: 500,
              }}>
              Nome Completo
            </Typography>
            <TextField
              margin="dense"
              id="name"
              autoComplete="name"
              //label="Nome"
              InputProps={{ sx: { borderRadius: 2 } }}
              autoFocus
              {...register("name")}
              error={!!errors.name}
            />
          </Box>
          <TextField
            margin="normal"
            id="email"
            label="E-mail"
            autoComplete="email"
            InputProps={{ sx: { borderRadius: 3 } }}
            autoFocus
            sx={{
              //border: "1px solid #000",
              width: "30%",
            }}
            {...register("email")}
            error={!!errors.email}
          />
          <TextField
            margin="normal"
            id="phone"
            label="Telefone"
            autoComplete="phone"
            sx={{
              //border: "1px solid #000",
              width: "30%",
            }}
            InputProps={{ sx: { borderRadius: 3 } }}
            {...register("phone")}
            error={!!errors.phone}
          />
          <TextField
            margin="normal"
            id="address"
            label="Endereço"
            autoComplete="address"
            hiddenLabel
            sx={{
              //border: "1px solid #000",
              width: "30%",
            }}
            InputProps={{ sx: { borderRadius: 3 } }}
            autoFocus
            {...register("address")}
            error={!!errors.address}
          />
          <TextField
            margin="normal"
            id="institution"
            label="Instituição"
            autoComplete="institution"
            hiddenLabel
            sx={{
              //border: "1px solid #000",
              width: "30%",
            }}
            InputProps={{ sx: { borderRadius: 3 } }}
            autoFocus
            {...register("institution")}
            error={!!errors.institution}
          />
          <TextField
            margin="normal"
            id="course"
            label="Curso"
            autoComplete="course"
            hiddenLabel
            sx={{
              width: "30%",
            }}
            InputProps={{ sx: { borderRadius: 3 } }}
            // InputLabelProps={{
            //   shrink: true,
            //   sx(theme) {
            //     return {
            //       color: "black",
            //       fontSize: "1.5rem",
            //       left: "10px",
            //       "&.Mui-focused": {
            //         color: theme.palette.primary.main,
            //       },
            //     };
            //   },
            // }}
            autoFocus
            {...register("course")}
            error={!!errors.course}
          />
        </Box>
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
