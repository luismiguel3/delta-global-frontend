import { styled } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";

export const AvatarContainer = styled("div")({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  margin: "20px 0",
});

export const InputAvatar = styled(Avatar)({
  width: 150,
  height: 150,
  cursor: "pointer",
  border: "2px solid #a9a9a9",
  backgroundColor: "#a0a0a0",
});

export const InputFieldContainer = styled(Box)({
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const ButtonContainer = styled(Box)({
  width: "100%",
  justifyContent: "flex-end",
  display: "flex",
  gap: 30,
  marginTop: 50,
});

export const Form = styled(Box)({
  backgroundColor: "#fff",
  padding: "50px",
  borderRadius: 5,
  maxWidth: "90vw",
});
