import { styled } from "@mui/system";
import Avatar from "@mui/material/Avatar";


export const InputContainer = styled("div")({
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


