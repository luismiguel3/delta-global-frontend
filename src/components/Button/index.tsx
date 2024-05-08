import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 15,
  height: 50,
  backgroundColor: theme.palette.primary[500],
  "&:hover": {
    backgroundColor: theme.palette.primary[700],
  },
}));

const CustomButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <StyledButton
      fullWidth
      variant="contained"
      color="primary"
      size="large"
      {...rest}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
