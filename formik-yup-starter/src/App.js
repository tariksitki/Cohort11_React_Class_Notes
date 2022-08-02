import { deepPurple, indigo, green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoginPage from './pages/LoginPage';

const theme = createTheme({
  palette : {
    primary : {
      main : deepPurple[500]
    },
    secondary : {
      main : indigo[500]
    }
  }
});

/// theme olustururken, mui e ait hazir renkleri de kullanabiliyoruz. Bu renkleri kullanmanin güzelligi;  tek tek light dark yazmamiza gerek kalmiyor hepsi otomatik olarak olusuyor. bizim sadece main i burada tanimlamamiz gerekiyor. rengi kullnacagimiz yerde light dark main ayri ayri cagirabiliyoruz. 

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: green[500],
//     },
//   },
// });

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <LoginPage />
      </ThemeProvider>
    </div>
  );
}
export default App;
