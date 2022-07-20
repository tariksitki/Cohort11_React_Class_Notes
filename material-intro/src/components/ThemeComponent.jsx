/// Bu component de mui ye ait default theme yi customize edecegiz:


import { Box, Container } from "@mui/system";

const ThemeComponent = () => {
  return (
    <Container sx={{ background: "primary" }}>
      <Box
        color="primary"
        sx={{
          background: "primary",
          width: "500px",
          height: "100px",
          fontSize: "20px",
        }}
      >
        <h1>Hallo</h1>
      </Box>
    </Container>
  );
};

export default ThemeComponent;
