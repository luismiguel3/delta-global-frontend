import { styled } from "@mui/material";
import { login } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Button = styled("button")`
  background: ${({ theme }) => `${theme.palette.primary[500]}`};
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  border: 4px solid ${({ theme }) => `${theme.palette.primary[500]}`};
  &:hover {
    transition: 0.2s ease-in-out;
    background-color: transparent;
    color: ${({ theme }) => `${theme.palette.primary[500]}`};
  }
`;

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "95vh",
  border: "1px solid red",
});

function App() {
  const navigation = useNavigate();

  return (
    <Container>
      <h1>React TypeScript App</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button
        onClick={async () => {
          try {
            await login({ email: "test", password: "test" });
            navigation("/dashboard");
          } catch (error) {
            console.log(error);
          }
        }}>
        login
      </Button>
      <input type="file"></input>
    </Container>
  );
}

export default App;
