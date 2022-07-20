import { deepOrange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/system";
import AppBar from "../components/AppBar";
import CardsGrid from "../components/CardsGrid";
import ButtonBases from "../components/ComplexButton";
import MakeStyles from "../components/MakeStyles";
import TextField from "../components/TextFieldComponent";
import ThemeComponent from "../components/ThemeComponent";
import TypoButtons from "../components/TypoButtons";

const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: deepOrange,
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <TypoButtons /> */}
        {/* <ButtonBases /> */}
        {/* <TextField /> */}
        {/* <CardsGrid /> */}
        {/* <AppBar /> */}
        {/* <ThemeComponent /> */}
        <MakeStyles />
      </ThemeProvider>
    </>
  );
};

export default Home;
