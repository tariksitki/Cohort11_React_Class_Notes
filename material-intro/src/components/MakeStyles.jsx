
// eger bir component in style ini verirken sürekli sx ile ugrasmak istemiyorsak, bu durumda kendimiz object formatinda elementler olusturabiliirz.
// Bunun icin ilk önce yarn add @mui/styles  kodu ile import yapilir. 
// sx formati cikmadan önce hersey bu sekilde idi.

import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";


    /// burada useStyles bir hook dur
const useStyles = makeStyles({
  btn: {
    background: "linear-gradient( 45deg, lightblue, blue)",
    border: 0,
    borderRadius: "1rem",
    color: "red",
    padding: "5px 30px",
    "&:hover": {
      opacity: "0.5",
    },
  },
  div: {
    border: "1px solid red",
  },
});


const MakeStyles = () => {
  const classes = useStyles();
  return (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      <Button className={classes.btn} variant="contained">
        Click
      </Button>
    </Box>
  );
};

export default MakeStyles;