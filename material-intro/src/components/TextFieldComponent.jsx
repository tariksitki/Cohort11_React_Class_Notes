// mui de input lara text field denir.
// input lar bos birakildiginda, state ler vasitasi ile input un rengini error a cevirebiliriz.
// mui deki input lar yup library ile iyi combine edilebilir.
// tüm component larda margin probu yok. bunda var

import { Box, Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";

const TextFieldComponent = () => {
  const [error, setError] = useState(true);

  return (
    <Container>
          {/* typo da mt prob u var ama button da yok o nedenle sx ile verilir.  */}
        <Typography variant="h2" textAlign="center" mt={4} > TEXTFIELD </Typography>

      <Box textAlign="center">
        <TextField
          label="email"
          type="email"
          variant="outlined"
          id="email"
          placeholder="Enter Your Email"
          fullWidth
          error
          helperText={error && "Incorrect Email"}
        ></TextField>

        <TextField
          margin="dense" // dense yakin demek
          label="Password"
          type="password"
          variant="outlined"
          id="password"
          placeholder="Enter Your Password"
          fullWidth
          
        ></TextField>

        <Button type="submit" variant="contained" sx={{marginTop : 5}} >SUBMIT</Button>
      </Box>
    </Container>
  );
};

export default TextFieldComponent;
