import { styled } from "@mui/material/styles";
import { Grid, Box, Typography } from "@mui/material";

export const InputContainer = styled(Box)(({ theme }) => ({
  marginInline: "15%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));

export const Form = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
}));

export const BackgroundImage = styled(Grid)(({ theme }) => ({
  backgroundImage: "url(https://source.unsplash.com/random?trucks)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  xs: false,
  sm: 4,
  md: 7,
}));

export const Heading = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(5),
  fontSize: "1.3rem",
  textAlign: "center",
}));
