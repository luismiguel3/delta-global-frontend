import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useLogin from "../../hooks/useLogin";
import CustomButton from "../../components/Button";
import CustomInput from "../../components/Input";

export default function SignInSide() {
  const { register, errors, submit } = useLogin();

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            mx: "15%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}>
          <img
            src="https://www.deltaglobal.com.br/assets/nova_home/img/deltaGlobal-deltagrupo-logo-color.svg"
            alt="trucks"
            width={"180rem"}
          />
          <Typography
            variant="h6"
            sx={{ mt: 5 }}
            fontSize="1.3rem"
            textAlign="center">
            Entre com sua conta Delta Global
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={submit}
            sx={{
              width: "100%",
              mt: 4,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}>
            <CustomInput
              id="email"
              label="E-mail"
              autoComplete="email"
              fullWidth
              register={register}
              errors={errors}
            />
            <CustomInput
              id="password"
              label="Senha"
              type="password"
              autoComplete="current-password"
              fullWidth
              register={register}
              errors={errors}
            />
            <CustomButton
              sx={{
                mt: 3,
              }}
              onClick={submit}>
              Entrar
            </CustomButton>
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
