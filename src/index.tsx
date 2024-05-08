import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import styles from "./styles";
import RoutesFunction from "./routes/index.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <ThemeProvider theme={styles}>
      <Router>
        <RoutesFunction />
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  );
}
