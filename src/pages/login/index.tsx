import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useLogin from "../../hooks/useLogin";

export default function SignInSide() {
  const { register, errors, submit } = useLogin();

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            mx: "20%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}>
          <img
            src="https://www.deltaglobal.com.br/assets/nova_home/img/deltaGlobal-deltagrupo-logo-color.svg"
            alt="trucks"
            width={150}
          />
          <Typography
            variant="h6"
            sx={{ mt: 5 }}
            fontSize="1.2rem"
            textAlign="center">
            Entre com sua conta Delta Global
          </Typography>
          <Box component="form" noValidate onSubmit={submit} sx={{ mt: 1 }}>
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
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{ sx: { borderRadius: 3 } }}
              {...register("password")}
              error={!!errors.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: 3,
                height: 50,
                backgroundColor: "primary.500",
                "&:hover": {
                  backgroundColor: "#63AED1",
                },
              }}>
              Entrar
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?trucks)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid>
  );
}
