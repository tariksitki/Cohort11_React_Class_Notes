import { deepPurple, indigo, green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const theme = createTheme({
  palette: {
    primary: {
      // mui de tanimli hazir renkleri kullanirsak light ve darki otomatok olarak gelir bizim tanimlamamiza gerek kalmaz. burada sadece main verdik ama digerleri de verilebilirdi. 
      // main: green[500],
      // main: deepPurple[500],
      main: indigo[500],
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <LoginPage /> */}
        <SignUpPage />
      </ThemeProvider>
    </div>
  );
}
export default App;
