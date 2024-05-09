import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const MainContainer = styled("div")({
  width: "80%",
  height: "80vh",
});

export const DashboardSection = styled("div")(({ theme }) => ({
  display: "flex",
  width: "80%",
  backgroundColor: theme.palette.primary[400],
  borderRadius: "10px",
  margin: `${theme.spacing(5)} 0`,
}));

export const Title = styled(Typography)({
  textAlign: "center",
  padding: "10px 50px",
  color: "#fff",
  fontWeight: 700,
});

export const IconsContainer = styled("div")({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  height: "100%",
});

export const Table = styled(DataGrid)({
  height: "100%",
  width: "100%",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
  "& .MuiDataGrid-columnHeaders": {
    paddingLeft: "20px",
  },
  "& .MuiDataGrid-cell": {
    paddingLeft: "30px",
  },
  "& .MuiDataGrid-cell:focus-within": {
    outline: "none",
  },
});
