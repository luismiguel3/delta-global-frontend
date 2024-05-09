import { Typography, Modal } from "@mui/material";
import { useModalsDashboardStore } from "../../context/useModalsDashboardStore";
import useCreateStudent from "../../hooks/useCreateStudent";
import useEditStudent from "../../hooks/useEditStudent";

import * as S from "./index.styles";
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
      <S.Form component="form" id="form" onSubmit={submit}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            backgroundColor: "#fff",
            fontWeight: 600,
          }}>
          {id ? "Editar Aluno" : "Cadastrar Aluno"}
        </Typography>
        <S.AvatarContainer>
          <label htmlFor="file-input">
            <S.InputAvatar src={image?.image} alt="Upload image">
              {image ? "" : "Adicionar Foto"}
            </S.InputAvatar>
          </label>
          <input
            id="file-input"
            type="file"
            style={{ display: "none" }}
            accept="image/*"
            {...register("photo")}
            onChange={handleImageChange}
          />
        </S.AvatarContainer>
        <S.InputFieldContainer>
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
        </S.InputFieldContainer>
        <S.ButtonContainer>
          <CustomButton
            onClick={resetFieldsOnClose}
            sx={{
              width: "15%",
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
              width: "15%",
            }}>
            {id ? "Editar" : "Cadastrar"}
          </CustomButton>
        </S.ButtonContainer>
      </S.Form>
    </Modal>
  );
}
