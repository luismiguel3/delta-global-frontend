import { createTheme } from "@mui/material/styles";
const styles = {
  primary: {
    100: "#B3E5FC",
    200: "#81D4FA",
    300: "#4FC3F7",
    400: "#29B6F6",
    500: "#0170A5",
    600: "#00618F",
    700: "#005D89",
    800: "#00567D",
    900: "#091d3c",
  },

  secundary: {
    100: "#FFF3B3",
    200: "#FFE999",
    300: "#FFDF80",
    400: "#ffd147",
    500: "#FFB300",
    600: "#FFC200",
    700: "#FFB300",
    800: "#FFA400",
    900: "#FF9500",
  },
  danger: {
    100: "#FFB3B3",
    200: "#FF9999",
    300: "#FF8080",
    400: "#FF6666",
    500: "#FF0000",
    600: "#E60000",
    700: "#CC0000",
    800: "#B30000",
    900: "#990000",
  },
  success: {
    100: "#B3FFB3",
    200: "#99FF99",
    300: "#80FF80",
    400: "#66FF66",
    500: "#00FF00",
    600: "#00E600",
    700: "#00CC00",
    800: "#00B300",
    900: "#009900",
  },
  warning: {
    100: "#FFF3B3",
    200: "#FFE999",
    300: "#FFDF80",
    400: "#FFD566",
    500: "#FFD700",
    600: "#FFC200",
    700: "#FFB300",
    800: "#FFA400",
    900: "#FF9500",
  },
};
declare module "@mui/material/styles" {
  interface Palette {
    danger: Palette["primary"];
  }
  interface PaletteColor {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }
}

const theme = createTheme({
  palette: styles,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
