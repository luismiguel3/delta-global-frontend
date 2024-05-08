import React from "react";
import { styled } from "@mui/system";
import {
  Box,
  Typography,
  TextField,
  TextFieldProps,
  BoxProps,
} from "@mui/material";
import { UseFormRegister, FieldErrors } from "react-hook-form";

type CustomInputProps = TextFieldProps & {
  label: string;
  id: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  containerProps?: BoxProps;
};

const InputBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const InputLabel = styled(Typography)({
  color: "#000",
  fontSize: "1rem",
  fontWeight: 500,
});

const StyledInput = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: 10,
  },
});

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  id,
  register,
  errors,
  containerProps,
  ...rest
}) => {
  return (
    <InputBox {...containerProps}>
      <InputLabel>{label}</InputLabel>
      <StyledInput
        id={id}
        autoComplete={id}
        autoFocus
        {...register(id)}
        error={!!errors[id]}
        {...rest}
      />
    </InputBox>
  );
};

export default CustomInput;
