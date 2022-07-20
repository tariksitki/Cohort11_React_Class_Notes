import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Grid } from "@mui/material";
import data from "../data";
import { Container } from "@mui/system";

export default function MultiActionAreaCard() {
  return (
    // Flex ile responsive tasarim
    // <Box
    //   height="100vh"
    //   display="flex"
    //   // sx={{ flexDirection: "row-reverse" }}
    //   sx={{ flexWrap: "wrap" }}
    //   gap={5}
    //   justifyContent="center"
    //   alignItems="center"
    // >

    // Grid ile Responsive Tasarim
    // önemli: row spacing iki row arasindaki alt üst bosluktur. column spacing ise iki column arasindaki yataydaki bosluktur.
    <Container>
      <Grid
        width="100vw"
        height="100vh"
        container
        rowSpacing={6}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="center"
        alignItems="center"
        sx={{ border: "1px solid red" }}
      >
        {data.map((item) => {
          const { id, name, text, img } = item;
          return (
            <Grid item key={id} lg={4} md={6} xs={8}>
              {/* <Card sx={{ maxWidth: 345 }}> 
              Grid ile detayli ayarlama yaptiktan sonra buna ihtiyac kalmaz*/}
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt={name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="secondary">
                      {text}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <Button size="small" color="primary" variant="contained">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
