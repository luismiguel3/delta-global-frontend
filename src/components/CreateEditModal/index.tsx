import { Box, Typography, Modal } from "@mui/material";
import { useModalsDashboardStore } from "../../context/useModalsDashboardStore";
import useCreateStudent from "../../hooks/useCreateStudent";
import useEditStudent from "../../hooks/useEditStudent";
import { InputContainer, InputAvatar } from "./index.styles";
import useHandleFields from "../../hooks/useHandleFieldsCreateEdit";
import CustomButton from "../Button";
import CustomInput from "../Input";

const inputFields = [
  { label: "Nome Completo", id: "name" },
  { label: "E-mail", id: "email" },
  { label: "Telefone", id: "phone" },
  { label: "Endereço", id: "address" },
  { label: "Instiuição", id: "institution" },
  { label: "Curso", id: "course" },
];

export default function CreateEdit() {
  const { createEditModal, id } = useModalsDashboardStore();
  const {
    register,
    errors,
    watch,
    resetFieldsOnClose,
    handleImageChange,
    submitProps,
  } = useHandleFields();

  const { submit } = id ? useEditStudent(submitProps) : useCreateStudent(submitProps);

  const image = watch("photo");

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
            <InputAvatar src={image?.image} alt="Upload image">
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
          {inputFields.map((input) => (
            <CustomInput
              key={input.id}
              label={input.label}
              id={input.id}
              register={register}
              errors={errors}
              containerProps={{
                width: "30%",
              }}
            />
          ))}
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
            onClick={resetFieldsOnClose}
            sx={{
              width: "20%",
              backgroundColor: "danger.700",
              "&:hover": {
                backgroundColor: "danger.800",
              },
            }}>
            Cancelar
          </CustomButton>
          <CustomButton
            type="submit"
            sx={{
              width: "20%",
            }}>
            {id ? "Editar" : "Cadastrar"}
          </CustomButton>
        </Box>
      </Box>
    </Modal>
  );
}
