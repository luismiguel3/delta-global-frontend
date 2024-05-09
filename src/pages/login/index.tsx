import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useLogin from "../../hooks/useLogin";
import CustomButton from "../../components/Button";
import CustomInput from "../../components/Input";

import * as S from "./index.styles";

export default function SignInSide() {
  const { register, errors, submit } = useLogin();

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <S.InputContainer>
          <img
            src="https://www.deltaglobal.com.br/assets/nova_home/img/deltaGlobal-deltagrupo-logo-color.svg"
            alt="trucks"
            width={"180rem"}
          />
          <S.Heading variant="h6">Entre com sua conta Delta Global</S.Heading>
          <S.Form component="form" onSubmit={submit}>
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
          </S.Form>
        </S.InputContainer>
      </Grid>
      <S.BackgroundImage item xs={false} sm={4} md={7} />
    </Grid>
  );
}
